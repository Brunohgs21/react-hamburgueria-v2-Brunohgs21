import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required(<p>Nome obrigatório</p>),
  email: yup
    .string()
    .required(<p>E-mail obrigatório</p>)
    .email(<p>E-mail inválido</p>),
  password: yup.string().required(<p>Insira uma senha</p>),
  confirmation: yup.string().required(<p>Insira a confirmação</p>),
});

export const formSchemaLogin = yup.object().shape({
  email: yup
    .string()
    .required(<p>E-mail obrigatório</p>)
    .email(<p>E-mail inválido</p>),
  password: yup.string().required(<p>Insira uma senha</p>),
});
