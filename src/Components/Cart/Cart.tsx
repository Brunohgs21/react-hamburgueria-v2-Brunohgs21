import React, { Dispatch, SetStateAction, useRef } from "react";
import { BackGround, Div } from "./index";
import CartProduct from "../CartProduct/CartProduct";
import EmptyCard from "../EmptyCart/EmptyCards";
import CardTotal from "../CartTotal/CardTotal";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useOutClick } from "../../hooks/useOutclick";

interface ICartProps {
  setOpenCart: Dispatch<SetStateAction<boolean>>;
}

const Cart = ({ setOpenCart }: ICartProps) => {
  const { cart } = useContext(CartContext);
  const clickRef = useOutClick(() => setOpenCart(false), 2);
  const divRef = useRef(null);

  return (
    <BackGround ref={clickRef}>
      <Div ref={divRef}>
        <header>
          <p>Carrinho de compras</p>
          <button className="closeBtn" onClick={() => setOpenCart(false)}>
            x
          </button>
        </header>
        <ul>
          {cart.length > 0 ? (
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
