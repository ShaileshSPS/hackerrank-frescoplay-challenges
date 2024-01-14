import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ title, price, quantity }) => {
  return (
    <div className="product">
      <h2>{title}</h2>
      <p> - ${price.toFixed(2)}{quantity ? ` x ${quantity}` : ''}</p>
    </div>
  );
};

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product
