import React, { useEffect, useState } from "react";
import ProdutosService from "../../services/ProdutosService";
import { useNavigate } from "react-router-dom";

const Estoque = () => {
  const [produtos, setProdutos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const produtosPerPage = 5;
  const navigate = useNavigate();
  const [totalPages, setTotalPages] = useState(0);

  const loadProdutos = (page) => {
    ProdutosService.getProdutos(page, produtosPerPage).then((res) => {
      setProdutos(res.data.content);
      setTotalPages(res.data.totalPages);
    });
  };

  useEffect(() => {
    loadProdutos(currentPage);
  }, [currentPage]);

  const deleteItem = (id) => {
    ProdutosService.deleteProdutoById(id).then(() => {
      if (produtos.length === 1 && currentPage > 0) {
        setCurrentPage(currentPage - 1);
      } else {
        loadProdutos(currentPage);
      }
    });
  };

  const updateItem = (id) => {
    navigate("/atualizar-produto/" + id);
  };

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
          {produtos.map((produto) => (
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
          <li className={`page-item ${currentPage === 0 ? "disabled" : ""}`}>
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
              className={`page-item ${currentPage === index ? "active" : ""}`}
            >
              <button className="page-link" onClick={() => paginate(index)}>
                {index + 1}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages - 1 ? "disabled" : ""
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
