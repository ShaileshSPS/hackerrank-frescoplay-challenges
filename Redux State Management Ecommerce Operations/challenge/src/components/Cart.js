import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

const Cart = ({ products, total, onCheckoutClicked }) => {
  // Cart component should display total products
  // It should display a message "You can add some products to cart."
  // When product is added it should display title, price and quantity.
  const nodes = products.map(product => (
    <Product
      key={product.id}
      title={product.title}
      price={product.price}
      quantity={product.quantity}
    />
  ));

  return (
    <div>
      <h3>Your Cart</h3>
      {products.length === 0 ? (
        <em>You can add some products to cart.</em>
      ) : (
        <div>{nodes}</div>
      )}
      <p>Total: &#36;{total}</p>
      <button onClick={onCheckoutClicked} disabled={products.length === 0 ? 'disabled' : ''}>
        Checkout
      </button>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
};

export default Cart;
