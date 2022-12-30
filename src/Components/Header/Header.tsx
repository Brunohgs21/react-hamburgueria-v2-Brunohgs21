import { Cabecalho } from "./index";
import logo from "../../Assets/logo.jpg";
import Input from "../InputSearch/Input";
import CartImg from "../../Assets/cart.png.png";
import { CartContext } from "../../Context/CartContext";
import { Dispatch, SetStateAction, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Img from "../../Assets/close.png";

interface IProduct {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}

interface IHeaderProps {
  setFiltro: IProduct[] | [] | undefined;
  setOpenCart: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ setFiltro, setOpenCart }: IHeaderProps) => {
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
