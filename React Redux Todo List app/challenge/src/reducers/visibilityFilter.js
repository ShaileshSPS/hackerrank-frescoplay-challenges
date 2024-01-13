import { VisibilityFilters } from "../actions";

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  // reducers for visibility filter
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter || VisibilityFilters.SHOW_ALL; // Ensure a valid filter value
    default:
      return state;
  }
};

export default visibilityFilter;
