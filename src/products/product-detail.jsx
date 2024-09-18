import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/apiService';
import { useTheme } from '../context/themeContext';
import ProductSlider from '../main-page-components/product-slider';
import { Image } from 'primereact/image';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { theme } = useTheme();
  // const { addToCart } = useCart(); // Get addToCart function from cart context
  const icon = <i className="pi pi-search"></i>;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setError('Failed to fetch product details.');
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center py-12">Loading product details...</div>;
  }

  if (error) {
    return <div className="text-center py-12">{error}</div>;
  }

  if (!product) {
    return <div className="text-center py-12">Product not found.</div>;
  }

  return (
    <div className={`py-12 ${theme.background} ${theme.text}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-subgrid gap-4 col-span-3">
          <div className='flex justify-center'>
            <Image
              src={product.image}
              alt={product.title}
              indicatorIcon={icon}
              preview
              width="250"
              className="object-contain hover:opacity-75"
            />
          </div>

          <div className='col-start-2'>
            <h2 className="text-4xl font-bold mb-4">{product.title}</h2>
            <p className="text-lg mb-6">{product.description}</p>
            <div className="font-bold mb-4">
              <span className='mr-3 text-2xl'>${product.price}</span>
              <button
                className={`p-3 rounded-lg ${theme.buttonBg} ${theme.buttonText} hover:bg-blue-500 transition-colors`}
                // onClick={() => addToCart(product)} // Add to cart functionality
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-6">You may also like</h3>
          <ProductSlider />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
