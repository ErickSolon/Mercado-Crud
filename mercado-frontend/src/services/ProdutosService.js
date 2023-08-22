import axios from "axios";

const baseURL = "http://127.0.0.1:8080/api/mercado/";

class ProdutosService {
  getProdutos() {
    return axios.get(baseURL);
  }

  getProdutoById(id) {
    return axios.get(baseURL + id);
  }

  saveProduto(data) {
    return axios.post(baseURL, data);
  }

  updateProdutoById(id, data) {
    return axios.put(baseURL + id, data);
  }

  deleteProdutoById(id) {
    return axios.delete(baseURL + id);
  }
}

export default new ProdutosService();
