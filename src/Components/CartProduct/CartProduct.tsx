import { Li } from "./index";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

interface IProduct {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}
interface ICartProductProps {
  item: IProduct;
}

const CartProduct = ({ item }: ICartProductProps) => {
  const { remove } = useContext(CartContext);

  function removeItem() {
    remove(item);
  }

  return (
    <Li>
      <img src={item.img} alt="" />
      <div className="container">
        <div>
          <p className="nameText">{item.name}</p>
          <p className="categoryText">{item.category}</p>
        </div>
        <div>
          <button onClick={removeItem}>Remover</button>
        </div>
      </div>
    </Li>
  );
};

export default CartProduct;
