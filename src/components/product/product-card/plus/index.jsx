import React from "react";
import { useState } from "react";

export default function PlusIcon({ onClick, isAdded }) {
  return (
    <img
      src={!isAdded ? "/img/btn-plus.svg" : "/img/btn-checked.svg"}
      alt="Plus"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    />
  );
}
