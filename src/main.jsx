import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { CartContext, CartContextProvider} from './context/cart-context';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartContextProvider>
      <App />
    </CartContextProvider>
</BrowserRouter>
);