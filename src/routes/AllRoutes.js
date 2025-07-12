import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
const AllRoutes = ({ cart, setCart, product, setProduct }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home cart={cart} />}></Route>
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              product={product}
              setProduct={setProduct}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
