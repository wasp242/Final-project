import React from "react";

export default function MenuItem({ elem }) {
  const [open, setOpen] = React.useState(false);
  const selectedCat = [];
  const meat = [
    { name: "Говядина", id: 1 },
    { name: "Свинина", id: 2 },
    { name: "Курица", id: 3 },
  ];
  const vegetables = [
    { name: "Овощи", id: 1 },
    { name: "Ягода", id: 2 },
  ];
  const fish = [
    { name: "Морская рыба", id: 1 },
    { name: "Морепродукты", id: 2 },
    { name: "Филе", id: 3 },
  ];
  if (elem.id === 1) {
    meat.map((item) => selectedCat.push(item));
  }
  if (elem.id === 2) {
    fish.map((item) => selectedCat.push(item));
  }
  if (elem.id === 3) {
    vegetables.map((item) => selectedCat.push(item));
  }
  return (
    <li className="menuItem" onMouseLeave={() => setOpen(false)}>
      <button
        className="btnMenuItem"
        onClick={() => setOpen(!open)}
        onMouseOver={() => setOpen(true)}
      >
        {elem.name}
      </button>
      <div className="dropdownMenu">
        {open && selectedCat.map((elem) => <p key={elem.id}>{elem.name}</p>)}
      </div>
    </li>
  );
}
