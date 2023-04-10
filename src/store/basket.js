const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});

export const removeProductById = (id) => ({
  type: REMOVE_PRODUCT,
  payload: id,
});

const initialState = {
  items: [],
};

export const basketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      const founded = state.items.find((elem) => elem.id === payload.id);
      if (!founded) {
        return {
          ...state,
          items: state.items.concat(payload),
        };
      }
      return state;
    case REMOVE_PRODUCT:
      const updItems = state.items.filter(
        (product) => product.id !== payload.id
      );
      console.log(state.items);
      return {
        ...state,
        items: updItems,
      };
    default:
      return state;
  }
};
