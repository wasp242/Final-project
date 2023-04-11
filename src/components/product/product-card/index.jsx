import styles from "./Product.module.scss";
import FavoriteIcon from "./fav";
import PlusIcon from "./plus/index";
import CardImage from "./card-image";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../store/basket";
import axios from "axios";

export default function Product({ data, onClick }) {
  const dispatch = useDispatch();

  // const addToCart = (payload) => {
  //   if (axios.get("https://642bc380d7081590f92918a7.mockapi.io/cart"))
  //     axios.post("https://642bc380d7081590f92918a7.mockapi.io/cart", payload);
  //   dispatch(addProduct(payload));
  // };

  async function addToCart(payload) {
    console.log(payload);
    dispatch(addProduct(payload));
    try {
      const response = await axios.get(
        `https://642bc380d7081590f92918a7.mockapi.io/cart?id=${payload.id}`
      );
      if (response.data.length > 0) {
        await axios.put(
          `https://642bc380d7081590f92918a7.mockapi.io/cart/${payload.id}`,
          payload
        );
      } else {
        await axios.post(
          "https://642bc380d7081590f92918a7.mockapi.io/cart",
          payload
        );
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className={styles.card}>
      <FavoriteIcon />
      <CardImage data={data} />
      <h5>{data.name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <b>{data.price} руб.</b>
        </div>

        <PlusIcon
          onClick={() => {
            addToCart(data);
          }}
        />
      </div>
    </div>
  );
}
