import { Cabecalho } from "./index.ts";
import logo from "../../Assets/logo.jpg";
import Input from "../InputSearch/index.jsx";
import CartImg from "../../Assets/cart.png.png";
import { CartContext } from "./../../Context/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Img from "../../Assets/close.png";

const Header = ({ setFiltro, setOpenCart }) => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/", { replace: true });
  }

  return (
    <Cabecalho>
      <img src={logo} alt="" />
      <div>
        <Input setFiltro={setFiltro} />
        <button className="openCart" onClick={() => setOpenCart(true)}>
          <img src={CartImg} alt="carrinho" className="cartImg" />
          <span>{cart.length}</span>
        </button>
        <button className="logout" onClick={logout}>
          <img className="cartImg" src={Img} alt="LogOut" />
        </button>
      </div>
    </Cabecalho>
  );
};

export default Header;
