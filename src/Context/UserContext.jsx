import { createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { api } from "../Services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
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
        setUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, []);

  async function login(data) {
    try {
      const response = await api.post("login", data);
      console.log(response);
      const { accessToken, user: userResponse } = response.data;

      setUser(userResponse);

      localStorage.setItem("Tokenburguer", accessToken);
      api.defaults.headers.common.authorization = `Bearer ${accessToken}`;

      const toNavigate = location.state?.from?.pathname || "/dashboard";

      navigate(toNavigate, { replace: true });
    } catch (error) {
      console.error(error);
      setUser(null);
    }
  }
  return (
    <UserContext.Provider value={{ login, user, loading }}>
      {children}
    </UserContext.Provider>
  );
};
