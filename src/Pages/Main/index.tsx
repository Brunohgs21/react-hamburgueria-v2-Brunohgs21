import Header from "../../Components/Header/Header";
import ProductsList from "../../Components/ProductsList/ProductList";
import Cart from "../../Components/Cart/Cart";
import { Div } from "../../index";
import { useState } from "react";
interface IProduct {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}

const Main = () => {
  const [openCart, setOpenCart] = useState(false);
  const [filtro, setFiltro] = useState([] as IProduct[]);

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
