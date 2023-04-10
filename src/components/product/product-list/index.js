import { useEffect, useState } from "react";
import { searchProductByInputValue } from "../../../store/search";
import { fetchProduct } from "../../../store/products";
import Product from "../product-card";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../../store/configure-store";

export const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  // const products = useSelector((state) => state.products);
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    dispatch(searchProductByInputValue(event.target.value));
  };

  const handleChange = () => {};

  useEffect(() => {
    fetch("https://642bc380d7081590f92918a7.mockapi.io/items")
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchProduct(data));
        store.subscribe(handleChange);
        console.log("Store updated:", store.getState().products);
        const products = store.getState().products;
        setItems(products);
        console.log(items);
      });
  }, []);

  return (
    <div className="content p-40 ">
      <div className="d-flex align-center mb-40 justify-between">
        <h1 className="">Все товары</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search" />
          <input onChange={handleSearch} placeholder="Поиск..." type="text" />
        </div>
      </div>
      <ul className="d-flex flex-wrap">
        {items &&
          items.length > 0 &&
          items.map((elem) => <Product key={elem.id} data={elem} />)}
      </ul>
    </div>
  );
};
