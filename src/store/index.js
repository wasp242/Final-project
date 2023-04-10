export { store } from "./configure-store";

// import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

// const initialState = {
//   items: [
//     {
//       name: "Оковалок",
//       id: 1,
//       price: 600,
//       imageUrl: "/img/beef/okovalok.jpeg",
//     },
//     { name: "Огузок", id: 2, price: 590, imageUrl: "/img/beef/oguzok.jpeg" },
//     { name: "Шея", id: 3, price: 550, imageUrl: "/img/beef/sheya.jpeg" },
//     { name: "Фарш", id: 4, price: 400, imageUrl: "/img/beef/farsh.jpeg" },
//     { name: "Вырезка", id: 5, price: 1490, imageUrl: "/img/beef/vyrezka.jpeg" },
//     { name: "Лопатка", id: 6, price: 550, imageUrl: "/img/beef/lopatka.jpeg" },
//     {
//       name: "Голяшка",
//       id: 7,
//       price: 490,
//       imageUrl: "/img/beef/golyashka.jpeg",
//     },
//     {
//       name: "Подбедерок",
//       id: 8,
//       price: 650,
//       imageUrl: "/img/beef/podbederok.jpeg",
//     },
//     {
//       name: "Грудинка",
//       id: 9,
//       price: 620,
//       imageUrl: "/img/beef/grudinka.jpeg",
//     },
//     { name: "Край", id: 10, price: 700, imageUrl: "/img/beef/krai.jpeg" },
//     { name: "Печень", id: 11, price: 340, imageUrl: "/img/beef/pechen.jpeg" },
//     { name: "Язык", id: 12, price: 770, imageUrl: "/img/beef/yazik.jpeg" },
//     {
//       name: "Особукко",
//       id: 13,
//       price: 500,
//       imageUrl: "/img/beef/osobukko.jpeg",
//     },
//     { name: "Сердце", id: 14, price: 340, imageUrl: "/img/beef/serdce.jpeg" },
//     { name: "Почки", id: 15, price: 85, imageUrl: "/img/beef/pochki.jpeg" },
//     { name: "Вымя", id: 16, price: 110, imageUrl: "/img/beef/vymya.jpeg" },
//   ],
//   itemsInCart: [],
// };

// const addToCard = (payload) => ({
//   type: "ADD_TO_CART",
//   payload,
// });

// const initialState = {
//   goods: [],
// };

// const basketReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       return state;
//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//   basket: basketReducer,
// });

// export const store = createStore(rootReducer, composeWithDevTools());

// // export function reducer(state = initialState, action) {
// //   switch (action.type) {
// //     case "ADD_TO_CART":
// //       const arr = [...state.itemsInCart];
// //       const founded = arr.find((elem) => elem.id === action.payload.id);
// //       if (founded) {
// //         return state;
// //       }
// //       arr.push({
// //         id: action.payload.id,
// //         name: action.payload.name,
// //         price: action.payload.price,
// //       });
// //       // console.log(arr);
// //       return {
// //         ...state,
// //         itemsInCart: arr,
// //       };
// //     default:
// //       return state;
// //   }
// // }
