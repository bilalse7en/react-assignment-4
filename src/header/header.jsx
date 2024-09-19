import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/themeContext';
import { FaSun, FaMoon, FaShoppingCart } from 'react-icons/fa'; // Import the cart icon

function Header() {
  const { theme, setThemeValue } = useTheme(); // Use the theme from context

  return (
    <div className={`w-full ${theme.background} ${theme.text}`}>
      <header className={`shadow-lg ${theme.background}`}>
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold">
            <Link to="/" className={`text-2xl font-bold ${theme.text}`}>
              MyStore
            </Link>
          </div>

          <nav className="hidden md:flex space-x-6">
            <Link to="/shop" className={theme.text}>Shop</Link>
            <Link to="/about" className={theme.text}>About Us</Link>
            <Link to="/contact" className={theme.text}>Contact</Link>
            <Link to="/products" className={theme.text}>Products</Link>
          </nav>

          <div className="flex items-center space-x-4"> {/* Increased space-x for better layout */}
            {/* Light Mode Button */}
            <button
              onClick={() => setThemeValue('light')}
              className={`flex items-center p-2 rounded-lg border ${theme === 'light' ? theme.text : ''}`}
              aria-label="Light Mode"
            >
              <FaSun className="text-xl" />
            </button>
            {/* Dark Mode Button */}
            <button
              onClick={() => setThemeValue('dark')}
              className={`flex items-center p-2 rounded-lg border ${theme === 'dark' ? theme.text : ''}`}
              aria-label="Dark Mode"
            >
              <FaMoon className="text-xl" />
            </button>
            {/* Add to Cart Button */}
            <button
              className={`flex items-center p-2 rounded-lg border ${theme.text}`} // Added border and color for the cart button
              aria-label="Cart"
            >
              <FaShoppingCart className="text-xl" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;