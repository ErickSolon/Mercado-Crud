import { Component } from "react";
import ProdutosService from '../../services/ProdutosService';

class AddProduto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titulo: "",
      descricao: "",
    };
  }

  changeTituloHandler = (event) => {
    this.setState({ titulo: event.target.value });
  };

  changeDescricaoHandler = (event) => {
    this.setState({ descricao: event.target.value });
  };

  saveProduto = () => {
    try {
        const Produto = {
            titulo: this.state.titulo,
            descricao: this.state.descricao,
        }

        ProdutosService.saveProduto(Produto);

        alert("Pessoa salva!");
    } catch(erro) {
        alert("Pessoa não salva pois aconteceu algum erro!");
    }
  }

  render() {
    return (
      <div>
        <div class="container p-5">
          <div class="row">
            <div class="col">
              <div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Produto</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Insira o nome do produto"
                    value={this.state.titulo}
                    onChange={this.changeTituloHandler}
                  />
                  <small id="emailHelp" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Descrição</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Insira a descrição do produto"
                    value={this.state.descricao}
                    onChange={this.changeDescricaoHandler}
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={this.saveProduto}
                >
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProduto;
