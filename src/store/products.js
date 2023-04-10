const FETCH_PRODUCT = "FETCH_PRODUCT";
export const fetchProduct = (data) => ({
  type: FETCH_PRODUCT,
  payload: data,
});

const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCT:
      console.log(payload);

      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};
