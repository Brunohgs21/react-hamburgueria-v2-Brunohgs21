import React, { useState, useContext } from "react";
import { Link, DivForm } from "./index";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../Validation";
import PWDRequisite from "../../PWDRequisite/index";
import { useOutClick } from "../../hooks/useOutclick";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { UserContext } from "../../Context/UserContext";

interface INewUser {
  name: string;
  email: string;
  password: string;
  confirmation: string;
}

const FormRegister = () => {
  const { registerUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<INewUser>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmation: "",
    },
  });

  const onSubmit: SubmitHandler<INewUser> = (data) => {
    if (data.confirmation === data.password) {
      const { name, email, password } = data;
      const user = {
        name: name,
        email: email,
        password: password,
      };
      registerUser(user);
    } else {
      toast.error("As senhas são diferentes");
    }
  };

  const [pwdRequisite, setPWDRequisite] = useState(false);
  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false,
    specialCharCheck: false,
  });
  const clickRef = useOutClick(() => setPWDRequisite(false), 1);
  function handleOnFocus() {
    setPWDRequisite(true);
  }

  function handleOnKeyUp(e: any) {
    const { value } = e.target;
    const capsLetterCheck = /[A-Z]/.test(value);
    const numberCheck = /[0123456789]/.test(value);
    const pwdLengthCheck = value.length >= 8;
    const specialCharCheck = /[!@#$%^&*]/.test(value);
    setChecks({
      capsLetterCheck,
      numberCheck,
      pwdLengthCheck,
      specialCharCheck,
    });
  }

  return (
    <DivForm ref={clickRef}>
      <div className="headerDiv">
        <h1>Cadastro</h1>
        <Link to="/">Retornar para o login</Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="nameDiv">
          <label htmlFor="">Nome</label>
          <input type="text" {...register("name")} />
        </div>
        {errors.name?.message}
        <div className="emailDiv">
          <label htmlFor="">Email</label>
          <input type="email" {...register("email")} />
        </div>
        {errors.email?.message}

        <input
          type="password"
          id="password"
          placeholder="Senha"
          {...register("password")}
          onFocus={handleOnFocus}
          onKeyUp={handleOnKeyUp}
        />
        {errors.password?.message}
        <div className="relative">
          {pwdRequisite ? (
            <PWDRequisite
              capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
              numberFlag={checks.numberCheck ? "valid" : "invalid"}
              pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
              specialCharFlag={checks.specialCharCheck ? "valid" : "invalid"}
            />
          ) : null}
        </div>
        <input
          type="password"
          id="confirmation"
          placeholder="Confirmar Senha"
          {...register("confirmation")}
        />
        {errors.confirmation?.message}
        <button type="submit">Cadastrar</button>
      </form>
    </DivForm>
  );
};

export default FormRegister;
