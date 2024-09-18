import React, { createContext, useState, useContext, useMemo } from 'react';

// Create ThemeContext
const ThemeContext = createContext();

const lightTheme = {
  background: 'bg-white',
  text: 'text-black',
  inputBg: 'bg-white',
  inputText: 'text-black',
  buttonBg: 'bg-blue-600',
  buttonText: 'text-white',
  overlayOpacity: 'bg-white/40',
  cardBorder: 'border-gray-200',
  hoverShadow: 'hover:shadow-lg',
  transitionHover: 'hover:scale-105 transition-transform duration-300',
};

const darkTheme = {
  background: 'bg-gray-600',
  text: 'text-white',
  inputBg: 'bg-gray-800',
  inputText: 'text-white',
  buttonBg: 'bg-blue-500',
  buttonText: 'text-white',
  overlayOpacity: 'bg-gray-900/80',
  cardBorder: 'border-gray-700',
  hoverShadow: 'hover:shadow-gray-700',
  transitionHover: 'hover:scale-105 transition-transform duration-300',
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const setThemeValue = (themeValue) => {
    setTheme(themeValue);
  };

  const currentTheme = useMemo(() => {
    return theme === 'light' ? lightTheme : darkTheme;
  }, [theme]);

  const value = useMemo(() => ({
    theme: currentTheme,
    setThemeValue
  }), [currentTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
