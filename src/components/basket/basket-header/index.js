import React from "react";

export default function BasketHeader({ onCloseCart }) {
  return (
    <h2 className="d-flex mb-30 justify-between">
      Корзина
      <img
        onClick={onCloseCart}
        className="removeBtn cu-p"
        src="/img/btn-remove.svg"
        alt="remove"
      />
    </h2>
  );
}
