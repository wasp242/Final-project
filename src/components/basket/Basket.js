import React, { useEffect } from "react";
import BasketHeader from "./basket-header/index";
import BasketItems from "./basket-items/index";
import BasketTotal from "./basket-total";
import { store } from "../../store/configure-store";

export default function Basket({ onCloseCart, cartOpened }) {
  const [cart = [], setCart] = React.useState([]);

  useEffect(() => {
    store.subscribe(() => {
      setCart(store.getState().basket);
    });
  }, []);
  return (
    cartOpened && (
      <div className="overlay">
        <div className="drawer">
          <BasketHeader onCloseCart={onCloseCart} />
          <BasketItems cart={cart} />
          <BasketTotal />
        </div>
      </div>
    )
  );
}
