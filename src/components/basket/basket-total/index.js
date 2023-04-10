import React from "react";

export default function BasketTotal() {
  return (
    <div className="cartTotalBlock">
      <ul>
        <li className="d-flex">
          <span>Итого:</span>
          <div></div>
          <b>21498 руб.</b>
        </li>
        <li className="d-flex">
          <span>Налог 5%:</span>
          <div></div>
          <b> 1074 руб.</b>
        </li>
      </ul>
      <button className="greenBtn">
        Оформить заказ <img src="/img/arrow.svg" alt="right" />{" "}
      </button>
    </div>
  );
}
