import React from 'react';
import Hero from './hero';
import ProductSlider from './product-slider';

// Assuming the products array is here for demonstration purposes
const products = [
  { id: 1, name: 'Product 1', price: 25.99, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 35.99, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 45.99, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', price: 55.99, image: 'https://via.placeholder.com/150' }
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Product Slider Section */}
      <section>
        <ProductSlider products={products} />
      </section>
    </>
  );
};

export default Home;