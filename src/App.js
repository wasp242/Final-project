import styles from "./App.scss";
import "macro-css";
import Card from "./components/product/product-card";
import Header from "./components/header/Header";
import Basket from "./components/basket/Basket";
import { useState } from "react";
import { ProductList } from "./components/product/product-list/index";

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  return (
    <div className="wrapper clear">
      <Basket
        onCloseCart={() => setCartOpened(false)}
        cartOpened={cartOpened}
      />
      <Header onClickCart={() => setCartOpened(true)} />
      <ProductList />
    </div>
  );
}

export default App;
