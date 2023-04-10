import React, { useEffect } from "react";
import { removeProductById } from "../../../store/basket";
import { useDispatch } from "react-redux";
import { store } from "../../../store/configure-store";

export default function BasketItems({ cart }) {
  const dispatch = useDispatch();

  const { items } = cart;
  const handleClick = (id) => {
    dispatch(removeProductById(id));
  };

  return (
    <div className="items">
      {items &&
        items.map(({ id, name, imageUrl, price }) => (
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
            <div className="mr-30">(1)</div>
            <img
              className="removeBtn"
              onClick={() => handleClick(id)}
              src="/img/btn-remove.svg"
              alt="remove"
            />
          </div>
        ))}
    </div>
  );
}
