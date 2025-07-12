import "./App.css";

import AllRoutes from "./routes/AllRoutes";
import { Header } from "./components";
import { useState } from "react";
// import ProductCard from "./components/ProductCard";
function App() {
  const [amountCart, setAmountCart] = useState(10);
  return (
    <>
      <Header cart={amountCart} setCart={setAmountCart} />
      <AllRoutes cart={amountCart} setCart={setAmountCart} />
    </>
  );
}

export default App;
