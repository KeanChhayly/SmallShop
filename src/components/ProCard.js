import React from "react";
import "./ProductCard.css";
const ProCard = ({ products }) => {
  const { name, image, price } = products;
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>{price}$</p>
        <button className="button">Add To Cart</button>
      </div>
    </div>
  );
};
export default ProCard;
