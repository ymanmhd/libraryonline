/*
// Import React and other libraries
import React from "react";

// Define the Cart component
function Cart({ cart, removeFromCart, clearCart }) {
  // Define a function to format the price
  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  // Define a function to calculate the total price
  const calculateTotal = () => {
    let total = 0;
    // Loop over the cart items and add their prices
    for (let item of cart) {
      total += item.price * item.quantity;
    }
    return total;
  };

  // Define a function to render a single cart item
  const renderCartItem = (item) => {
    return (
      <div className="cart-item" key={item.id}>
        <div className="cart-image">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="cart-info">
          <h3 className="cart-title">{item.title}</h3>
          <p className="cart-author">by {item.author}</p>
          <p className="cart-price">{formatPrice(item.price)}</p>
          <p className="cart-quantity">Quantity: {item.quantity}</p>
          <button className="remove-from-cart" onClick={() => removeFromCart(item)}>
            Remove from Cart
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="cart">
      <h1 className="page-title">Your Cart</h1>
      //{Check if the cart is empty or not }
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-list">
            //{ Map over the cart array and render each item }
            {cart.map((item) => renderCartItem(item))}
          </div>
          <div className="cart-summary">
            <p className="total-price">Total: {formatPrice(calculateTotal())}</p>
            <button className="clear-cart" onClick={clearCart}>
              Clear Cart
            </button>
            <button className="checkout">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

// Export the Cart component
export default Cart;*/
