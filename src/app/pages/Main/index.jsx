import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Container, Form, SubmmitButton } from "./styles";

import api from "../../services/api";

export default function Main() {
  const [newRepo, setNewRepo] = useState("");
  const [repositorios, setRepositorios] = useState([]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      async function submit() {
        const response = await api.get(`/repos/${newRepo}`);

        const data = {
          name: response.data.full_name,
        };
        setRepositorios([...repositorios, data]);
        setNewRepo("");
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

        <SubmmitButton>
          <FaPlus color="#fff" size={14} />
        </SubmmitButton>
      </Form>
    </Container>
  );
}
