import "./CartCard.css";

const CartCard = ({ product, handleRemove }) => {
  const { id, name, price, image } = product;

  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button onClick={() => handleRemove(id)}>Remove</button>
    </div>
  );
};

export default CartCard;
