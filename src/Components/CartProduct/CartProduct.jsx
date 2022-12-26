import { Li } from "./index";
import { useContext } from "react";
import { CartContext } from "./../../Context/CartContext";

const CartProduct = ({ item }) => {
  const { remove } = useContext(CartContext);
  // function remove() {
  //   let filtro = cart.filter((value, index) => {
  //     return value.name != item.name;
  //   });

  //   setCart(() => [...filtro]);
  // }

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
