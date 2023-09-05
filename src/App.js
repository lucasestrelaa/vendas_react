import React, { useState } from 'react';

function App() {
  const [produto, setProduto] = useState('');
  const [preco, setPreco] = useState('');

  const [vendas, setVendas] = useState([]);

  const adicionarVenda = () => {
    if (produto && preco) {
      const novaVenda = { produto, preco };
      setVendas([...vendas, novaVenda]);
      setProduto('');
      setPreco('');
    }
  };

  return (
    <div className="App">
      <h1 className='text-4xl font-bold underline'>Sistema de Vendas</h1>

      <div>
        <input className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          type="text"
          placeholder="Produto"
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
        />
        <input
          type="text"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />
        <button onClick={adicionarVenda}>Adicionar Venda</button>
      </div>

      <h2 className='text-2xl font-bold underline'>Vendas Registradas:</h2>
      <ul>
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