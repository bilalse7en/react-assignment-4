import React, { useContext } from 'react';
import { CartContext } from '../context/cart-context'; // Correct path to CartContext
import { Image } from 'primereact/image'; // PrimeReact Image component
import { Button } from 'primereact/button'; // PrimeReact Button component
import { FiTrash2 } from 'react-icons/fi'; // Trash icon for removing items

function CartPage() {
  const { cartItems, removeItemFromCart } = useContext(CartContext);

  // Calculate total amount and quantity
  const totalAmount = cartItems.reduce((total, product) => total + product.price * product.quantity, 0);
  const totalQuantity = cartItems.reduce((total, product) => total + product.quantity, 0);

  return (
    <div className="container mx-auto py-4">
      {/* Display total amount and quantity */}
      <div className="flex gap-2 my-4">
        <div className="flex flex-col p-3 flex-grow border justify-center items-center rounded-md">
          <h1>Amount</h1>
          <h1 className="font-semibold text-3xl">${totalAmount.toFixed(2)}</h1>
        </div>
        <div className="flex flex-col p-3 flex-grow border justify-center items-center rounded-md">
          <h1>Quantity</h1>
          <h1 className="font-semibold text-3xl">{totalQuantity}</h1>
        </div>
        <div className="flex flex-col p-3 flex-grow border justify-center items-center rounded-md">
          <Button label="Proceed to Checkout" className="font-semibold text-2xl p-button-success" />
        </div>
      </div>

      {/* Display cart items */}
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div className="flex p-3 border my-2" key={item.id}>
            <Image
              height={100}
              width={100}
              src={item.image}
              alt={item.title}
              className="h-32 w-32 rounded"
            />
            <div className="pl-5">
              <h1 className="text-3xl font-bold my-1">{item.title}</h1>
              <h2 className="text-2xl font-medium my-1">
                Price: ${item.price} | Quantity: {item.quantity}
              </h2>
              <Button
                icon={<FiTrash2 />}
                label="Remove Item"
                className="p-button-danger"
                onClick={() => removeItemFromCart(item.id)}
              />
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-2xl font-semibold py-10">Your cart is empty.</div>
      )}
    </div>
  );
}

export default CartPage;