import { useEffect, useState } from "react";

import { setTotal } from "../../../store/basket";

import Product from "../product-card";
import { useDispatch, useSelector } from "react-redux";

import ProductSearch from "../product-search";

export const ProductList = () => {
  //const data = useSelector((state) => state.products.products);
  const [data, setData] = useState([]);
  const searchValue = useSelector((state) => state.products.searchValue);
  const dispatch = useDispatch();
  const addedItems = useSelector((state) => state.basket.items);

  fetch("https://642bc380d7081590f92918a7.mockapi.io/items")
    .then((response) => response.json())
    .then((data) => setData(data));

  data.forEach((item) => {
    item.quantity = 1;
  });
  useEffect(() => {
    const total = addedItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    dispatch(setTotal(total));
  }, [dispatch, addedItems]);

  const items = data.filter((item) => {
    const itemName = item.name.toLowerCase();
    return itemName.includes(searchValue.toLowerCase());
  });

  return (
    <div className="content p-40 ">
      <ProductSearch />
      <ul className="d-flex flex-wrap">
        {items.length > 0 ? (
          items.map((elem) => <Product key={elem.id} data={elem} />)
        ) : (
          <p>Товары не найдены!</p>
        )}
      </ul>
    </div>
  );
};
