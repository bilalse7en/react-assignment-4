import React from 'react';
import { useTheme } from '../context/themeContext';

function Hero() {
  const { theme } = useTheme();

  return (
    <section className={`relative h-screen flex items-center justify-center text-center ${theme.background}`}>
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url('https://img.pikbest.com/ai/illus_our/20230413/7f7a5af5338449137251eaa2f673d9ab.jpg!w700wp')` }}
      ></div>
      <div className={`absolute inset-0 ${theme.overlayOpacity}`}></div>
      <div className={`relative z-10 ${theme.text}`}>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-out">Welcome to MyStore</h1>
        <p className="text-lg mb-8">Discover our exclusive range of products.</p>
        <div className="flex justify-center items-center space-x-3">
          <input
            type="email"
            placeholder="Enter your email"
            className={`py-2 px-4 rounded-lg border border-gray-600 focus:outline-none ${theme.inputBg} ${theme.inputText}`}
          />
          <button className={`py-2 px-6 rounded-lg ${theme.buttonBg} ${theme.buttonText}`}>
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;