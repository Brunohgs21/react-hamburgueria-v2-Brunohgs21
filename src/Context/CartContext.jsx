import { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCartt(item) {
    let search = cart.find((el) => {
      return el.name == item.name;
    });

    if (!search) {
      setCart((old) => [...old, item]);
    } else {
      toast.error("Item já adicionado ao carrinho");
    }
  }

  function remove(item) {
    let filtro = cart.filter((value) => {
      return value.name != item.name;
    });

    setCart(() => [...filtro]);
  }

  return (
    <CartContext.Provider value={{ cart, setCart, addToCartt, remove }}>
      {children}
    </CartContext.Provider>
  );
};
