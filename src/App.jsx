import React, {useContext} from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import { ThemeProvider } from './context/themeContext';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Products from './products/products';
import ProductDetails from './products/product-detail';
import SignUp from './main-page-components/sign-up';
import Home from './main-page-components/home';
import CartPage from './main-page-components/cart'; // Import CartPage


function App() {
  return (
    <PrimeReactProvider>
      <ThemeProvider>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </main>
          <Footer />
      </ThemeProvider>
    </PrimeReactProvider>
  );
}

export default App;
