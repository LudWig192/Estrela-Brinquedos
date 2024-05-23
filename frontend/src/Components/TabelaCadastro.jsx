import React, { useState, useEffect } from "react";
import axios from "axios";
//import './TabelaCadastro.css'; // Certifique-se de que o caminho está correto

const TabelaCadastro = () => {
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/cadastros");
        setCadastros(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (idCadastro) => {
    try {
      await axios.delete(`http://localhost:3001/cadastros/${idCadastro}`);
      const { data } = await axios.get("http://localhost:3001/cadastros");
      setCadastros(data);
      console.log("Usuário excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  };

  return (
    <div className="tabela-cadastro-container">
      <table className="tabela-cadastro">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>CPF</th>
            <th>Endereço</th>
            <th>Telefone</th>
            <th>Senha</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {cadastros.map((cadastro) => (
            <tr key={cadastro.idCadastro}>
              <td>{cadastro.idCadastro}</td>
              <td>{cadastro.nome}</td>
              <td>{cadastro.email}</td>
              <td>{cadastro.cpf}</td>
              <td>{cadastro.endereco}</td>
              <td>{cadastro.telefone}</td>
              <td>{cadastro.senha}</td>
              <td>
                <button
                  onClick={() => handleExcluirUsuario(cadastro.idCadastro)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaCadastro;
