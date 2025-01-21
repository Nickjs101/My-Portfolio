import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        // Check localStorage first, then system preference, default to dark
        return localStorage.getItem('theme') || 
               (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    });

    useEffect(() => {
        // Update document theme
        document.documentElement.setAttribute('data-theme', theme);
        // Save to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Listen for system theme changes
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button 
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
            ) : (
                <Moon className="w-5 h-5" />
            )}
        </button>
    );
} 