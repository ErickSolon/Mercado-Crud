import React, { useEffect, useState } from "react";
import ProdutosService from "../../services/ProdutosService";
import { useNavigate } from "react-router-dom";

const Estoque = () => {
  const [produtos, setProdutos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const produtosPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    ProdutosService.getProdutos().then((res) => {
      setProdutos(res.data.content);
    });
  }, []);

  if (produtos.length === 0) return "Carregando...";

  const deleteItem = (id) => {
    ProdutosService.deleteProdutoById(id).then(() => {
      setProdutos(produtos.filter((produto) => produto.id !== id));
    });
  };

  const updateItem = (id) => {
    navigate("/atualizar-produto/" + id);
  };

  const indexOfLastProduto = currentPage * produtosPerPage;
  const indexOfFirstProduto = indexOfLastProduto - produtosPerPage;
  const currentProdutos = produtos.slice(
    indexOfFirstProduto,
    indexOfLastProduto
  );

  const totalPages = Math.ceil(produtos.length / produtosPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container p-5">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Título</th>
            <th scope="col">Descrição</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentProdutos.map((produto) => (
            <tr key={produto.id}>
              <th scope="row">{produto.id}</th>
              <td>{produto.titulo}</td>
              <td>{produto.descricao}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => updateItem(produto.id)}
                >
                  Atualizar
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteItem(produto.id)}
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => paginate(currentPage - 1)}
            >
              Anterior
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index}
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              <button className="page-link" onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => paginate(currentPage + 1)}
            >
              Próxima
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Estoque;
