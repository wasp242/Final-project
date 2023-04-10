const FETCH_PRODUCT = "FETCH_PRODUCT";
const SEARCH_PRODUCT = "SEARCH_PRODUCT";
const FILTER_PRODUCT = "FILTER_PRODUCT";
export const fetchProduct = (data) => ({
  type: FETCH_PRODUCT,
  payload: data,
});

export const searchProductByInputValue = (payload) => ({
  type: SEARCH_PRODUCT,
  payload,
});

export const filterProductByInputValue = (payload) => ({
  type: FILTER_PRODUCT,
  payload,
});

const initialState = {
  products: [],
  searchValue: "",
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCT:
      return {
        ...state,
        products: payload,
      };
    case SEARCH_PRODUCT:
      return {
        ...state,
        searchValue: payload,
      };
    case FILTER_PRODUCT:
      return {
        ...state,
        filteredProducts: payload,
      };
    default:
      return state;
  }
};
