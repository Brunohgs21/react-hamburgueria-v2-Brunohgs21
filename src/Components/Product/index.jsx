import { useState, useContext } from "react";
import { Li } from "./index.js";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { CartContext } from "./../../Context/CartContext";

const Product = ({ item }) => {
  const { addToCartt } = useContext(CartContext);

  function addToCart() {
    addToCartt(item);
  }

  return (
    <Li>
      <img src={item.img} alt={item.name} />
      <div>
        <p className="nameP">{item.name}</p>
        <p className="categoryP">{item.category}</p>
        <p className="priceP">
          {item.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button onClick={addToCart}>Adicionar</button>
      </div>
    </Li>
  );
};

export default Product;
