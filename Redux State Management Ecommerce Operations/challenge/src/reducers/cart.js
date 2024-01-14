import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
} from "../constants/ActionTypes";

const initialState = {
  addedIds: [],
  quantityById: {},
};

// Reducers for corresponding Actions
const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(state, action.productId);

    case CHECKOUT_REQUEST:
      return checkoutRequest(state);

    case CHECKOUT_FAILURE:
      return checkoutFailure(state, action.error);

    // Add more cases for other actions as needed

    default:
      return state;
  }
};


// Reducer functions for each action

const addToCart = (state, productId) => {
  const addedIds = state.addedIds.includes(productId)
    ? state.addedIds
    : [...state.addedIds, productId];

  const quantityById = {
    ...state.quantityById,
    [productId]: (state.quantityById[productId] || 0) + 1,
  };

  return { ...state, addedIds, quantityById };
};

const checkoutRequest = (state) => {
  // Handle checkout request (if needed)
  return initialState;
};

const checkoutFailure = (state, error) => {
  // Handle checkout failure (if needed)
  return "cart state";
};

export default cart;
