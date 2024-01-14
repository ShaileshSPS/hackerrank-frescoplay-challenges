// import { combineReducers } from "redux";
import { RECEIVE_PRODUCTS, ADD_TO_CART } from "../constants/ActionTypes";

// Initial state for products
export const initialState = {
  byId: {},
  visibleIds: [],
};

export const getProduct = (state, productId) => state.byId[productId];

export const getVisibleProducts = (state) =>
  state.visibleIds.map((id) => state.byId[id]);

// Products reducer
const products = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return receiveProducts(state, action.products);

    case ADD_TO_CART:
      return addToCart(state, action.productId);

    default:
      return state;
  }
};

// Reducer function for RECEIVE_PRODUCTS action
const receiveProducts = (state, products) => {
  const byId = {};
  const visibleIds = [];

  products.forEach(product => {
    byId[product.id] = product;
    visibleIds.push(product.id);
  });

  return { ...state, byId, visibleIds };
};

// Reducer function for ADD_TO_CART action
const addToCart = (state, productId) => {
  const updatedProducts = { ...state.byId };
  const product = updatedProducts[productId];

  if (product && product.inventory > 0) {
    updatedProducts[productId] = { ...product, inventory: product.inventory - 1 };
  }

  return { ...state, byId: updatedProducts };
};

export default products;
