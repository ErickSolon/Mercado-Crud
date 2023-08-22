import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Estoque from './pages/Estoque';
import AtualizarProduto from './pages/AtualizarProduto';
import AddProduto from './pages/AddProduto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/estoque" element={<Estoque />} />
            <Route
              path="/atualizar-produto/:idParam"
              element={<AtualizarProduto />}
            />
            <Route path="/add-produto" element={<AddProduto />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
