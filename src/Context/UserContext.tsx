import { createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { api } from "../Services/api";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

interface IUserContextProps {
  children: React.ReactNode;
}

interface IUserLogin {
  email: string;
  password: string;
}

interface IUserRegister {
  email: string;
  password: string;
  name: string;
}
interface IFood {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}

interface IUserResponse {
  id: string;
  name: string;
  email: string;
}

interface IUserContext {
  // login: ;
  // // user: {};
  // loading: boolean;
  // // registerUser: {};
}
export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserContextProps) => {
  const [user, setUser] = useState(null);
  const [food, setFood] = useState<IFood[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("Tokenburguer");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const { data } = await api.get("products");
        setFood(data);
        setUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, []);

  async function loadFood() {
    const token = localStorage.getItem("Tokenburguer");
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const { data } = await api.get("products");
      setFood(data);
    } catch (error) {
      console.error(error);
      setFood([]);
    }
  }

  async function login(data: IUserLogin) {
    try {
      const response = await api.post("login", data);

      const { accessToken, user: userResponse } = response.data;

      setUser(userResponse);

      localStorage.setItem("Tokenburguer", accessToken);
      api.defaults.headers.common.authorization = `Bearer ${accessToken}`;

      const toNavigate = location.state?.from?.pathname || "/dashboard";

      navigate(toNavigate, { replace: true });
      loadFood();
    } catch (error) {
      console.error(error);
      setUser(null);
      toast.error("Algo deu errado");
    }
  }

  async function registerUser(userData: IUserRegister) {
    console.log(userData);
    try {
      const response = await api.post("users", userData);
      toast.success("Conta criada com sucesso");
      setTimeout(() => {
        navigate("/");
      }, 6000);
    } catch (error) {
      console.log(error);
      toast.error("Erro ao criar conta");
    }
  }
  return (
    <UserContext.Provider value={{ login, loading, user, food, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};
