import React from "react";
import styles from "../Product.module.scss";

export default function FavoriteIcon() {
  return (
    <div className={styles.favorite}>
      <img
        src="/img/heart-unliked.svg"
        alt="unliked"
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}
