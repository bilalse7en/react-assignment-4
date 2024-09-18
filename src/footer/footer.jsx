import React from 'react';
import { useTheme } from '../context/themeContext';

function Footer() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`${theme.background} ${theme.text}`}>
      <footer className="py-8">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <ul className="flex justify-center space-x-6 mt-4">
              <li>
                <a href="#!" className="hover:underline hover:text-gray-300 transition-all duration-300 relative">
                  <span className="hover-line">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#!" className="hover:underline hover:text-gray-300 transition-all duration-300 relative">
                  <span className="hover-line">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#!" className="hover:underline hover:text-gray-300 transition-all duration-300 relative">
                  <span className="hover-line">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#!" className="hover:underline hover:text-gray-300 transition-all duration-300 relative">
                  <span className="hover-line">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-400">&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;