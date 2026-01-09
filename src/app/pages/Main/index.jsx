import React, { useState } from "react";
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from "react-icons/fa";
import { Container, Form, SubmmitButton, List, DeleteButton } from "./styles";

import api from "../../services/api";

export default function Main() {
  const [newRepo, setNewRepo] = useState("");
  const [repositorios, setRepositorios] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      async function submit() {
        setLoading(true);
        try {
          const response = await api.get(`/repos/${newRepo}`);

          const data = {
            name: response.data.full_name,
          };
          setRepositorios([...repositorios, data]);
          setNewRepo("");
        } catch (error) {
          console.log("Repositório não encontrado");
        } finally {
          setLoading(false);
        }
      }

      submit();
    },
    [newRepo, repositorios]
  );

  function handleinputChange(e) {
    e.preventDefault();

    console.log(newRepo);
  }

  function handleInputChange(e) {
    setNewRepo(e.target.value);
  }

  const handleDelete = useCallback(
    (repo) => {
      const find = repositorios.filter((r) => r.name !== repo);
      setRepositorios(find);
    },
    [repositorios]
  );

  return (
    <Container>
      <FaGithub size={25} />
      <h1> Meus Repositórios </h1>

      <Form onSubmit={() => {}}>
        <input
          type="text"
          placeholder="Adicionar Repositórios"
          value={newRepo}
          onChange={handleinputChange}
        />

        <SubmmitButton loading={loading ? 1 : 0} onClick={handleSubmit}>
          {loading ? (
            <FaSpinner color="#fff" size={14} />
          ) : (
            <FaPlus color="#fff" size={14} />
          )}
        </SubmmitButton>
      </Form>

      <List>
        {repositorios.map((repo) => (
          <li key={repo.name}>
            <span>
              <DeleteButton onClick={() => handleDelete(repo.name)}>
                <FaTrash size={14} />
              </DeleteButton>
              {repo.name}
            </span>
            <a href="">
              Detalhes
              <FaBars size={20} />
            </a>
          </li>
        ))}
      </List>
    </Container>
  );
}
