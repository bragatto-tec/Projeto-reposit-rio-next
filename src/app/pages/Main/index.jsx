import React from "react";
import { FaGithub } from "react-icons/fa";
import { Container, Form, SubmmitButton } from "./styles";

export default function Main() {
  return (
    <Container>
      <FaGithub size={25} />
      <h1> Meus Repositórios </h1>

      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Adicionar Repositórios" />

        <SubmmitButton>
          <FaPlus color="#fff" size={14} />
        </SubmmitButton>
      </Form>
    </Container>
  );
}
