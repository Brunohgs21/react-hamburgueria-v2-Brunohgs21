import { Div, TodosBtn } from "./index";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import Img from "../../Assets/OIP (2).jpeg";
interface IProduct {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}
interface IInputProps {
  setFiltro: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

interface IData {
  search: string;
}

const Input = ({ setFiltro }: IInputProps) => {
  const { register, handleSubmit } = useForm<IData>();
  const { food } = useContext(UserContext);

  function saveSearch(data: IData) {
    if (food != null) {
      let produtosFiltrados = food.filter((produto) => {
        let categoriaInput = produto.category
          .toLowerCase()
          .includes(data.search.toLowerCase());
        let inputFiltrado = produto.name
          .toLowerCase()
          .includes(data.search.toLowerCase());

        if (inputFiltrado == true || categoriaInput == true) {
          return produto;
        }
      });
      setFiltro(produtosFiltrados);
    }
  }

  return (
    <>
      <Div>
        <form onSubmit={handleSubmit(saveSearch)}>
          <input
            type="text"
            placeholder="Digitar Pesquisa"
            {...register("search")}
          />
          <button>Pesquisar</button>
        </form>
      </Div>
      <div>
        {food ? (
          <TodosBtn src={Img} onClick={() => setFiltro(food)}></TodosBtn>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Input;
