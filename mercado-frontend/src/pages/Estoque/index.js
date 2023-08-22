import React, { useEffect, useState } from "react";
import ProdutosService from "../../services/ProdutosService";
import { useNavigate } from "react-router-dom";

const Estoque = () => {
  const [produto, setProduto] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    ProdutosService.getProdutos().then((res) => {
      setProduto(res.data);
    });
  });

  if (!produto) return "carregando...";

  const deleteItem = (id) => {
    return ProdutosService.deleteProdutoById(id);
  };

  const updateItem = (id) => {
    navigate("/atualizar-produto/"+id);
  };

  return (
    <div>
      <div class="row">
        <div class="col">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Título</th>
                <th scope="col">Produto</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {produto.map((e) => {
                return (
                  <tr key={e.id}>
                    <th scope="row">{e.id}</th>
                    <td>{e.titulo}</td>
                    <td>{e.descricao}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-alert"
                        onClick={(id) => updateItem(e.id)}
                      >
                        Atualizar
                      </button>
                      <button
                        type="button"
                        class="btn btn-alert"
                        onClick={(id) => deleteItem(e.id)}
                      >
                        Deletar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Estoque;
