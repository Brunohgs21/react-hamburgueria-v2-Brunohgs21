import React from "react";
import { DivForm, Link2 } from "../FormRegister/index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaLogin } from "../../Validation";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { api } from "../../Services/api";
interface IUserLogin {
  email: string;
  password: string;
}
const FormLogin = () => {
  const { login } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IUserLogin>({
    resolver: yupResolver(formSchemaLogin),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <DivForm>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(login)}>
        <div className="nameDiv">
          <label htmlFor="">Email</label>
          <input type="email" {...register("email")} />
        </div>
        {errors.email?.message}
        <div className="emailDiv">
          <label htmlFor="">Senha</label>
          <input type="password" {...register("password")} />
        </div>
        {errors.password?.message}
        <button className="btnLogin" type="submit">
          Logar
        </button>
      </form>
      <div className="divText">
        <p className="p">
          Crie sua conta para saborear muitas delicias e matar sua fome
        </p>
      </div>
      <Link2 to="/register">Cadastrar</Link2>
    </DivForm>
  );
};

export default FormLogin;
