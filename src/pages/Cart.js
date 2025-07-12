import { CartCard } from "../components/index";
import { useState } from "react";
import useTitle from "../hooks/useTitle";
const products = [
  {
    id: 1,
    name: "Sony Wh-Ch510 Bluetooth Wireless",
    price: 149,
    image: "/images/1001.png",
  },
  {
    id: 2,
    name: "boAt Rockerz 450",
    price: 49,
    image: "/images/1002.png",
  },
  {
    id: 3,
    name: "boAt Rockerz 450",
    price: 49,
    image: "/images/1002.png",
  },
];
const Cart = ({ cart, setCart }) => {
  useTitle("Cart");
  const [product, setProduct] = useState(products);

  function handleRemove(id) {
    const removePro = product.filter((pro) => pro.id !== id);
    setProduct(removePro);
    alert(product.length);
  }

  setCart(3);
  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {product.length}</h1>
        {product.map((product) => (
          <CartCard
            key={product.id}
            product={product}
            handleRemove={handleRemove}
          />
        ))}
      </section>
    </main>
  );
};
export default Cart;
