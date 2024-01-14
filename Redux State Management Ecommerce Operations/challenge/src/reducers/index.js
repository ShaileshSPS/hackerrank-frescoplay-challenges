import { combineReducers } from "redux";
import cart, * as fromCart from "./cart";
import products, * as fromProducts from "./products";

export default combineReducers({
  cart,
  products,
});

// Reducers for corresponding Actions
export const getCartProducts = state => {
  const { addedIds, quantityById } = state.cart;
  const { byId } = state.products;

  return addedIds.map(id => ({
    ...byId[id],
    quantity: quantityById[id],
  }));
};

export const getTotal = state => {
  const cartProducts = getCartProducts(state);
  const totalPrice = cartProducts.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  // Rounding to two decimal places to avoid precision issues
  return totalPrice.toFixed(2);
};