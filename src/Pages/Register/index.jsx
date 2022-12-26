import React from "react";
import Img from "../../Assets/Component 1.png";
import FormRegister from "../../Components/FormRegister/FormRegister";
import { Div } from "../../Components/FormRegister";

const Register = () => {
  return (
    <Div>
      <img src={Img} alt="logo" />
      <FormRegister />
    </Div>
  );
};

export default Register;
