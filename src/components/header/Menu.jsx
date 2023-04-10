import React from "react";
import MenuItem from "./MenuItem";

export default function Menu() {
  const menu = [
    { name: "Мясо", id: 1 },
    { name: "Рыба", id: 2 },
    { name: "Овощи и ягоды", id: 3 },
  ];
  return (
    <div className="menu">
      <nav>
        <ul className="d-flex">
          {menu.map((elem) => (
            <MenuItem elem={elem} key={elem.id} />
          ))}
        </ul>
      </nav>
    </div>
  );
}
