import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required(<p className="schemaText">Nome obrigatório</p>),
  email: yup
    .string()
    .required(<p className="schemaText">E-mail obrigatório</p>)
    .email(<p className="schemaText">E-mail inválido</p>),
  password: yup
    .string()
    .required(<p className="schemaText">Insira uma senha</p>),
  confirmation: yup
    .string()
    .required(<p className="schemaText">Insira a confirmação</p>),
});

export const formSchemaLogin = yup.object().shape({
  email: yup
    .string()
    .required(<p className="schemaText">E-mail obrigatório</p>)
    .email(<p className="schemaText">E-mail inválido</p>),
  password: yup
    .string()
    .required(<p className="schemaText">Insira uma senha</p>),
});
