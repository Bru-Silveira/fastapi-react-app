import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]); // Estado para armazenar os dados

  // Função para buscar dados de uma API
  const fetchData = (apiUrl) => {
    axios.get(apiUrl)
      .then(res => setData(res.data))
      .catch(err => console.error("Erro na API:", err));
  };

  return (
    <div className="container">
      <h1>Tabelas API's</h1>

      {/* Botões para carregar os dados */}
      <div className="button-group">
        <button onClick={() => fetchData('http://localhost:8000/api01')}>Pessoas</button>
        <button onClick={() => fetchData('http://localhost:8000/api02')}>Cidades</button>
      </div>

      {/* Exibe a tabela se houver dados */}
      {data.length > 0 && (
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              {/* Verifica se os dados são de pessoas ou cidades */}
              {data[0].name && <th>Nome</th>}
              {data[0].age && <th>Idade</th>}
              {data[0].city && <th>Cidade</th>}
              {data[0].state && <th>Estado</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                {/* Renderiza colunas com base no tipo de dado */}
                {item.name && <td>{item.name}</td>}
                {item.age && <td>{item.age} anos</td>}
                {item.city && <td>{item.city}</td>}
                {item.state && <td>{item.state}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
