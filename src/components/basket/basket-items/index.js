import React, { useEffect, useState } from "react";
import {
  increaseAmount,
  removeProductById,
  decreaseAmount,
  setTotal,
} from "../../../store/basket";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../../store/configure-store";

export default function BasketItems({ cart }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.basket.items);
  console.log("Состояние стора:", store.getState());

  const [itemsInBasket, setItemsInBasket] = useState(items);

  const handleDeleteClick = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItemsInBasket(updatedItems);
    dispatch(removeProductById(updatedItems));
  };

  const handleIncrementQuantity = (itemId) => {
    const updatedItems = itemsInBasket.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
    setItemsInBasket(updatedItems);
    dispatch(increaseAmount(updatedItems));
  };
  const handleDecrementQuantity = (itemId) => {
    const updatedItems = itemsInBasket.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      } else {
        return item;
      }
    });
    setItemsInBasket(updatedItems);
    console.log(updatedItems);
    dispatch(decreaseAmount(updatedItems));
  };

  // useEffect(() => {
  //   const total = items.reduce(
  //     (acc, item) => acc + item.quantity * item.price,
  //     0
  //   );
  //   console.log(total);
  //   dispatch(setTotal(total));
  // }, [dispatch, items]);

  return (
    <div className="items">
      {itemsInBasket &&
        itemsInBasket.map(({ id, name, imageUrl, price, quantity }) => (
          <div
            className="cartItem d-flex justify-between align-center mb-20"
            key={id}
          >
            <img
              className="mr-20"
              width={70}
              height={70}
              src={imageUrl}
              alt="sneakers"
            />
            <div className="mr-20">
              <p className="mb-5">{name}</p>

              <b>{price} руб</b>
            </div>

            <div className="divider"></div>
            <div className="mr-30">{quantity}</div>

            <button onClick={() => handleIncrementQuantity(id)}>+</button>
            <button onClick={() => handleDecrementQuantity(id)}>-</button>

            <p>Total: {quantity * price}</p>
            {/* <p>{total}</p> */}

            <img
              className="removeBtn"
              onClick={() => handleDeleteClick(id)}
              src="/img/btn-remove.svg"
              alt="remove"
            />
          </div>
        ))}
    </div>
  );
}
