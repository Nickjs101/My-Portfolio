/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        code: ['"Fira Code"', 'monospace'],
        display: ['Sora', '"Segoe UI"', 'system-ui', 'sans-serif'],
        sans: ['Manrope', '"Segoe UI"', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: {
          primary: 'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
        },
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        nav: {
          bg: 'var(--nav-bg)',
          border: 'var(--nav-border)',
        },
        card: {
          bg: 'var(--card-bg)',
          border: 'var(--card-border)',
        },
        button: {
          bg: 'var(--button-bg)',
          hover: 'var(--button-hover)',
        },
        input: {
          bg: 'var(--input-bg)',
          border: 'var(--input-border)',
        },
        hover: {
          bg: 'var(--hover-bg)',
        },
      },
      boxShadow: {
        'theme': '0 4px 6px -1px var(--shadow-color)',
        'theme-lg': '0 10px 15px -3px var(--shadow-color)',
      },
    },
    screens: {
      'sm': '640px',
      'smmd': '700px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
