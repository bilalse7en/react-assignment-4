import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTheme } from '../context/themeContext';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      const toShowEightProducts = response.data.slice(0, 8);
      setProducts(toShowEightProducts);
      setLoading(false);
      
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return  <div className='h-[100vh] flex items-center justify-center'>
              <ProgressSpinner className=' my-10 w-full' style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
            </div>;
  }

  // Responsive options for the carousel
  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  // Template to render each product
  const productTemplate = (product) => {
    return (
      <div className="product-item">
        <div className="product-item-content border mx-3 rounded-lg">
          <div className="py-3">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
          <div className="flex flex-col justify-between min-h-[330px] product-details p-3">
            <h3 className={`text-xl font-semibold mb-2 ${theme.text}`}>{product.title}</h3>
            <p className="mb-4">{product.description.substring(0, 80)}...</p>
            <p className="text-lg font-bold">${product.price}</p>
            <Button label="Add to Cart" className={`mt-4 w-full py-3 ${theme.buttonBg} ${theme.buttonText}`} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`py-12 ${theme.background} ${theme.text}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <Carousel
          value={products}
          itemTemplate={productTemplate}
          numVisible={3}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          circular
          autoplayInterval={3000}
          showIndicators={true}
        />
      </div>
    </div>
  );
}

export default Products;
