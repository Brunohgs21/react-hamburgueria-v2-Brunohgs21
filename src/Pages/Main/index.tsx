import Header from "../../Components/Header/Header";
import ProductsList from "../../Components/ProductsList/ProductList";
import Cart from "../../Components/Cart/Cart";
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
