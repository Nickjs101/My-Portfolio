import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HireMeApp from './components/hire-me/HireMeApp';

// Initialize theme from localStorage or system preference
const initTheme = () => {
  const stored = localStorage.getItem('theme');
  if (stored) {
    document.documentElement.setAttribute('data-theme', stored);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
};

initTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HireMeApp />
  </React.StrictMode>
);
