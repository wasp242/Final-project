import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function BasketTotal() {
  const total = useSelector((state) => state.basket.total);
  return (
    <div className="cartTotalBlock">
      <ul>
        <li className="d-flex">
          <span>Итого:</span>
          <div></div>
          <b>{total} руб.</b>
        </li>
        <li className="d-flex">
          <span>Налог 5%:</span>
          <div></div>
          <b> {total * 0.05} руб.</b>
        </li>
      </ul>
      <button className="greenBtn">
        Оформить заказ <img src="/img/arrow.svg" alt="right" />{" "}
      </button>
    </div>
  );
}
