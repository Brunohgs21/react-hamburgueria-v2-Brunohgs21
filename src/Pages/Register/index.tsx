import React from "react";
import Img from "../../Assets/Component1.png";
import FormRegister from "../../Components/FormRegister/FormRegister";
import { Div } from "../../Components/FormRegister/style";

const Register = () => {
  return (
    <Div>
      <img src={Img} alt="logo" />
      <FormRegister />
    </Div>
  );
};

export default Register;
