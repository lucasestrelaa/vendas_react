import React, { useState } from "react";

function App() {
  const [produto, setProduto] = useState("");
  const [preco, setPreco] = useState("");

  const [vendas, setVendas] = useState([]);

  const adicionarVenda = () => {
    if (produto && preco) {
      const novaVenda = { produto, preco };
      setVendas([...vendas, novaVenda]);
      setProduto("");
      setPreco("");
    }
  };

  return (
    <div className="App">
      <div className="p-4 bg-blue-500">
        <h1 className="text-4xl font-bold text-center">Sistema Financeiro</h1>
      </div>

      <div className="text-center border">

          <p>
            <input
              className="border m-2"
              type="text"
              placeholder="Produto"
              value={produto}
              onChange={(e) => setProduto(e.target.value)}
            />
          </p>
          <p>
            <input
              className="border m-2"
              type="text"
              placeholder="Preço"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
            />
          </p>
          <button
            className="bg-blue-500 p-2 rounded-md"
            onClick={adicionarVenda}
          >
            Adicionar Venda
          </button>

      </div>

      <h2 className="text-2xl text-center">Vendas Registradas:</h2>
      <ul className="text-center">
        {vendas.map((venda, index) => (
          <li key={index}>
            {venda.produto} - R${venda.preco}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
