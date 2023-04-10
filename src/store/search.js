const SEARCH_PRODUCT = "SEARCH_PRODUCT";

export const searchProductByInputValue = (query) => ({
  type: SEARCH_PRODUCT,
  payload: query,
});

const initialState = {
  searchQuery: "",
};

export const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_PRODUCT:
      return {
        ...state,
        searchQuery: payload,
      };
    default:
      return state;
  }
};
