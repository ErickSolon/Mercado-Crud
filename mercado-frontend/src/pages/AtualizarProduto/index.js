import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProdutosService from "../../services/ProdutosService";

function AtualizarProduto() {
  const { idParam } = useParams();
  const [dado, setDados] = useState({
    id: idParam,
    titulo: "",
    descricao: "",
  });

  useEffect(() => {
    ProdutosService.getProdutoById(idParam).then((res) => {
      let dados = res.data;

      setDados((prevState) => ({
        ...prevState,
        titulo: dados.titulo,
        descricao: dados.descricao,
      }));
    });
  }, [idParam]);

  const changeTituloHandler = (event) => {
    setDados({
      ...dado,
      titulo: event.target.value,
    });
  };

  const changeDescricaoHandler = (event) => {
    setDados({
      ...dado,
      descricao: event.target.value,
    });
  };

  const UpdateProduto = () => {
    try {
        const Produto = {
            titulo: dado.titulo,
            descricao: dado.descricao,
        }

        ProdutosService.updateProdutoById(dado.id, Produto);
        alert("Produto atualizado com sucesso!");
    } catch (error) {
        alert("Produto Não atualizado!!!")
    }
  }

  return (
    <div>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Nome do produto</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Digite o título novo"
            value={dado.titulo}
            onChange={changeTituloHandler}
          />
          <small id="emailHelp" class="form-text text-muted">
            Input para atualizar o nome do produto.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Descrição do produto</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Digite a descrição nova."
            value={dado.descricao}
            onChange={changeDescricaoHandler}
          />
        </div>
        <button type="submit" class="btn btn-primary" onClick={UpdateProduto}>
          Salvar
        </button>
      </form>
    </div>
  );
}

export default AtualizarProduto;
