import { useState, useContext } from "react";
import { Div } from "./index";
import { CartContext } from "./../../Context/CartContext";

const CardTotal = () => {
  const { cart, setCart } = useContext(CartContext);
  let sum = 0;
  if (cart.length != 0) {
    sum = cart.reduce((acc, value) => {
      return acc + value.price;
    }, 0);
  }

  let sumTratado = sum.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Div>
      <p>
        <span>Total</span>
        <span>{sumTratado}</span>
      </p>
      <button onClick={() => setCart([])}>Remover Todos</button>
    </Div>
  );
};

export default CardTotal;
