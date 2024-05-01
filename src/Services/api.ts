import axios from "axios";

export const api = axios.create({
  baseURL: "https://hbv2.alextoledo.com.br/",
  timeout: 5000,
});
// https://hamburgueria-kenzie-v2.herokuapp.com
