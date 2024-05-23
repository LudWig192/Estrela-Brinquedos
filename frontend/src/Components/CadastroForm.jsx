import React, { useState } from 'react';
import axios from 'axios';
import logo from "../img/LogoEstrela.png";
// import './Cadastro.css'; // Certifique-se de que o caminho está correto

const CadastroForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    telefone: '',
    senha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/cadastros', formData);
      alert('Cadastro criado com sucesso!');
      setFormData({
        nome: '',
        email: '',
        cpf: '',
        endereco: '',
        telefone: '',
        senha: ''
      });
    } catch (error) {
      console.error('Erro ao criar cadastro:', error);
      alert('Erro ao criar cadastro. Verifique o console para mais detalhes.');
    }
  };

  return (
    <div className="cadastro-form-container">
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <img src={logo} alt="Logo Estrela" />
        <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="text" name="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange} />
        <input type="text" name="endereco" placeholder="Endereço" value={formData.endereco} onChange={handleChange} />
        <input type="number" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} />
        <input type="password" name="senha" placeholder="Senha" value={formData.senha} onChange={handleChange} />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};


{/* TABELA */}
<table border={2} cellPadding={5} cellSpacing={5}>
<thead>
  <tr>
    <th>Nome</th>
    <th>telefone</th>
    <th>datanascimento</th>
    <th>cpf</th>
    <th>email</th>
    <th>cep</th>
    {/* Adicione mais colunas, se necessário */}
  </tr>
</thead>
<tbody>
  {clientes.map((cliente) => (
    <tr key={cliente.id}>
      <td>{cliente.nome}</td>
      <td>{cliente.telefone}</td>
      <td>{cliente.datanasciemento}</td>
      <td>{cliente.cpf}</td>
      <td>{cliente.email}</td>
      <td>{cliente.cep}</td>
      <td>
        <button
          variant="danger"
          onClick={() => handleExcluirUsuario(cliente.id)} >
          Excluir
        </button>
      </td>
      {/* Renderizar outras colunas, se necessário */}
    </tr>
  ))}
</tbody>
</table>




export default CadastroForm;
