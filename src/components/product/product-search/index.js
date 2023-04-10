import React from "react";
import { searchProductByInputValue } from "../../../store/products";
import { useDispatch, useSelector } from "react-redux";

export default function ProductSearch() {
  const dispatch = useDispatch();

  const handleInputValue = (event) => {
    dispatch(searchProductByInputValue(event.target.value));
  };

  return (
    <div className="d-flex align-center mb-40 justify-between">
      <h1 className="">Все товары</h1>
      <div className="search-block d-flex">
        <img src="/img/search.svg" alt="search" />
        <input onChange={handleInputValue} placeholder="Поиск..." type="text" />
      </div>
    </div>
  );
}
