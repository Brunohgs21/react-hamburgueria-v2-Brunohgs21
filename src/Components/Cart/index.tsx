import React from "react";
import { BackGround, Div } from "./index";
import CartProduct from "../CartProduct/CartProduct";
import EmptyCard from "../EmptyCart/EmptyCards";
import CardTotal from "../CartTotal/CardTotal";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

interface ICartProps {
  setOpenCart: boolean;
}

const Cart = ({ setOpenCart }: ICartProps) => {
  const { cart } = useContext(CartContext);
  return (
    <BackGround>
      <Div>
        <header>
          <p>Carrinho de compras</p>
          <button className="closeBtn" onClick={() => setOpenCart(false)}>
            x
          </button>
        </header>
        <ul>
          {cart.length > "0" ? (
            cart.map((item) => <CartProduct item={item} />)
          ) : (
            <EmptyCard />
          )}
        </ul>
        {cart.length != 0 ? <CardTotal /> : ""}
      </Div>
    </BackGround>
  );
};

export default Cart;
