import { createContext, useState, ReactNode } from "react";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { ICartContext, ICartContextProps, IFood } from ".";

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartContextProps) => {
  const [cart, setCart] = useState([] as IFood[]);

  function addToCartt(item: IFood) {
    let search = cart.find((el) => {
      return el.name == item.name;
    });

    if (!search) {
      setCart((old) => [...old, item]);
      toast.success("Item adiconado ao carrinho");
    } else {
      toast.error("Item já adicionado ao carrinho");
    }
  }

  function remove(item: IFood) {
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
