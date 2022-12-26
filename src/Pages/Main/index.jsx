import Header from "../../Components/Header/index.jsx";
import ProductsList from "../../Components/ProductsList/index.jsx";
import Cart from "../../Components/Cart/index.jsx";
import { Div } from "../../index";
import { useState } from "react";

const Main = () => {
  const [openCart, setOpenCart] = useState(false);
  const [filtro, setFiltro] = useState();

  return (
    <>
      <Header setFiltro={setFiltro} setOpenCart={setOpenCart} />
      <Div>
        <ProductsList filtro={filtro} />
        <div>{openCart ? <Cart setOpenCart={setOpenCart} /> : null}</div>
      </Div>
    </>
  );
};

export default Main;
