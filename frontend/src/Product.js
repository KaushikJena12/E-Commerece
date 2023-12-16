import React from "react";
import Card from "./Card";
import "./Card.css";

function Product() {
  const caption = [
    {
      img: "men1.jpeg",
      details: "MENWEAR",
    },
    {
      img: "women.png",
      details: "WOMENWEAR",
    },
  ];
  return (
    <div id="mm">
      {caption.map((items, key) => (
        <Card
          img={items.img}
          details={items.details}
          price={items.details}
          key={key}
        />
      ))}
    </div>
  );
}

export default Product;
