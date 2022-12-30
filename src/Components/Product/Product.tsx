import { useState, useContext } from "react";
import { Li } from "./index";
import "react-toastify/ReactToastify.css";
import { CartContext } from "../../Context/CartContext";
interface IProduct {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}
interface IProductProps {
  item: IProduct;
}

const Product = ({ item }: IProductProps) => {
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
