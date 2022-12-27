import { List } from "./index";
import Product from "../Product/index.jsx";
import { useState, useEffect } from "react";
import { api } from "../../Services/api";

const ProductsList = ({ filtro }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function getList() {
      try {
        const response = await api.get("products");
        setList(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getList();
  }, []);
  console.log(list);

  return list.length > 0 ? (
    <List>
      {filtro == undefined
        ? list?.map((item) => <Product item={item}></Product>)
        : filtro.map((item) => <Product item={item}></Product>)}
    </List>
  ) : (
    <p>Carregando nossas delícias</p>
  );
};

export default ProductsList;
