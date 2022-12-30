import { ReactNode } from "react";

export interface IUserContextProps {
  children: React.ReactNode;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister {
  email: string;
  password: string;
  name: string;
}
export interface IFood {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}

export interface IUserResponse {
  id: string;
  name: string;
  email: string;
}

export interface IUserContext {
  login: (data: IUserLogin) => void;
  food: IFood[] | null;
  loading: boolean;
  registerUser: (userData: IUserRegister) => void;
}
export interface ICartContextProps {
  children: ReactNode;
}

export interface ICartContext {
  cart: IFood[];
  addToCartt: (item: IFood) => void;
  remove: (item: IFood) => void;
  setCart: React.Dispatch<React.SetStateAction<IFood[]>>;
}
