import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTheme } from '../context/themeContext';
import { Card } from 'primereact/card';
import { Link } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
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
    return <div className="text-center py-12">Loading products...</div>;
  }

  const header = (product) => (
    <img
      alt={product.title}
      src={product.image}
      className="w-full h-32 object-contain pt-2"
    />
  );

  const footer = (product) => (
    <div className="flex justify-between">
      <button
        className={`p-2 rounded-lg ${theme.buttonBg} ${theme.buttonText} hover:bg-blue-500 transition-colors`}
      >
        Add to Cart
      </button>
      <Link to={`/products/${product.id}`}>
      <button
        className={`p-2 rounded-lg ${theme.buttonBg} ${theme.buttonText} hover:bg-blue-500 transition-colors`}
      >
        View Details
      </button>
    </Link>
    </div>
  );

  return (
    <div className={`py-12 ${theme.background} ${theme.text}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              subTitle={`Category: ${product.category}`}
              footer={footer(product)}
              header={header(product)}
              className={`rounded-lg shadow-md p-0 products-card ${theme.cardBorder} ${theme.transitionHover} ${theme.background} ${theme.text}`}
            >
              <div className="flex flex-col justify-between">
                <p className="mb-2">
                  {product.description.substring(0, 50)}...
                </p>
                <p className="text-lg font-bold">${product.price}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
