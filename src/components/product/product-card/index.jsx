import styles from "./Product.module.scss";
import FavoriteIcon from "./fav";
import PlusIcon from "./plus/index";
import CardImage from "./card-image";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../store/basket";

export default function Product({ data, onClick }) {
  const dispatch = useDispatch();

  const handleClick = (payload) => {
    dispatch(addProduct(payload));
  };
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
            handleClick(data);
          }}
        />
      </div>
    </div>
  );
}
