import { useEffect } from "react";
import { setTotal } from "../../../store/basket";
import Product from "../product-card";
import { useDispatch, useSelector } from "react-redux";
import ProductSearch from "../product-search";
import { fetchProduct } from "../../../store/products";
import axios from "axios";

export const ProductList = () => {
  const data = useSelector((state) => state.products.products);
  const searchValue = useSelector((state) => state.products.searchValue);
  const dispatch = useDispatch();
  const addedItems = useSelector((state) => state.basket.items);

  useEffect(() => {
    axios
      .get("https://642bc380d7081590f92918a7.mockapi.io/items")
      .then((res) => {
        res.data.forEach((item) => (item.quantity = 1));
        dispatch(fetchProduct(res.data));
      });
  }, []);

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
