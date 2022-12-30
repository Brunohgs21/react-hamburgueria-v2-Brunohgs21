import React from "react";
import { List } from "./index";
import { useState, useEffect } from "react";
import { api } from "../../Services/api";
import Product from "../Product/Product";

interface IProduct {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}
interface IProductListProps {
  filtro: IProduct[] | undefined | [];
}

const ProductsList = ({ filtro }: IProductListProps) => {
  const [list, setList] = useState([] as IProduct[]);

  useEffect(() => {
    async function getList() {
      try {
        const response = await api.get("products");
        console.log(response);
        setList(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getList();
  }, []);

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
