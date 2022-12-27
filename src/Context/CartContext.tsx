import { createContext, useState, ReactNode } from "react";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

interface ICartContextProps {
  children: ReactNode;
}

interface IProduct {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}

interface ICartContext {
  cart: IProduct[];
  addToCartt: (item: IProduct) => void;
  remove: (item: IProduct) => void;
  setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartContextProps) => {
  const [cart, setCart] = useState<IProduct[]>([]);

  function addToCartt(item: IProduct) {
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

  function remove(item: IProduct) {
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
