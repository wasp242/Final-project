import React from "react";

export default function CardImage({ data }) {
  return (
    <img
      style={{ margin: "0 auto" }}
      width={150}
      height={150}
      src={data.imageUrl}
      alt=""
    />
  );
}
