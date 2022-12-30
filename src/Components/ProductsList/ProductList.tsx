import React from "react";
import { List, Loading } from "./index";
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
  filtro: IProduct[] | [];
}

const ProductsList = ({ filtro }: IProductListProps) => {
  const [list, setList] = useState([] as IProduct[]);

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

  return list.length > 0 ? (
    <List>
      {filtro.length == 0
        ? list?.map((item) => <Product item={item}></Product>)
        : filtro.map((item) => <Product item={item}></Product>)}
    </List>
  ) : (
    <Loading>Carregando nossas delícias...</Loading>
  );
};

export default ProductsList;
