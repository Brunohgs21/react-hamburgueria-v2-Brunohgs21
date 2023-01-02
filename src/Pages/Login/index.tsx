import React, { useEffect, useState } from "react";
import FormLogin from "../../Components/FormLogin";
import { Div } from "../../Components/FormRegister/style.js";
import Img from "../../Assets/Component1.png";
import { useNavigate } from "react-router-dom";
import { api } from "../../Services/api";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("Tokenburguer");
    async function auth() {
      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          const response = await api.get("products");
          navigate("/dashboard", { replace: true });
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    }
    auth();
  }, [navigate]);

  if (loading) {
    return null;
  }
  return (
    <Div>
      <img src={Img} alt="logo" />
      <FormLogin />
    </Div>
  );
};

export default Login;
