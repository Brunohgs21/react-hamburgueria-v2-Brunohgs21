import { Div } from "./index";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "./../../Context/UserContext";
const Input = ({ setFiltro }) => {
  const { register, handleSubmit } = useForm();
  const { food } = useContext(UserContext);

  function saveSearch(data) {
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

  return (
    <div>
      <button onClick={() => setFiltro(food)}>Todos</button>
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
    </div>
  );
};

export default Input;
