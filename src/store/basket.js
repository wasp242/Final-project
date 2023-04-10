const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";
const INCREASE_AMOUNT = "INCREASE_AMOUNT";
const DECREASE_AMOUNT = "DECREASE_AMOUNT";
const SET_TOTAL = "SET_TOTAL";

export const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});

export const removeProductById = (payload) => ({
  type: REMOVE_PRODUCT,
  payload,
});

export const increaseAmount = (payload) => ({
  type: INCREASE_AMOUNT,
  payload,
});
export const decreaseAmount = (payload) => ({
  type: INCREASE_AMOUNT,
  payload,
});
export const setTotal = (payload) => ({
  type: SET_TOTAL,
  payload,
});

const initialState = {
  items: [],
  total: 0,
};

export const basketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      const foundedIndex = state.items.findIndex(
        (elem) => elem.id === payload.id
      );
      if (foundedIndex === -1) {
        return {
          ...state,
          items: state.items.concat(payload),
        };
      } else {
        const updatedItems = [...state.items];
        updatedItems[foundedIndex].quantity += 1;
        return {
          ...state,
          items: updatedItems,
        };
      }

    case REMOVE_PRODUCT:
      return {
        ...state,
        items: payload,
      };
    case INCREASE_AMOUNT:
      return {
        ...state,
        items: payload,
      };
    case DECREASE_AMOUNT:
      return {
        ...state,
        items: payload,
      };
    case SET_TOTAL:
      return {
        ...state,
        total: payload,
      };

    default:
      return state;
  }
};
