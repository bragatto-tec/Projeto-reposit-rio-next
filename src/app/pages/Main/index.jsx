"use client";

import React, { useState, useCallback, useEffect, use } from "react";
import Link from "next/link";
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from "react-icons/fa";
import { Container, Form, SubmmitButton, List, DeleteButton } from "./styles";
import api from "../../services/api";

export default function Main() {
  const [newRepo, setNewRepo] = useState("");
  const [repositorios, setRepositorios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  //DidUpdate - quando uma variável muda - buscar os repositórios salvos no localstorage
  useEffect(() => {
    const repoStorage = localStorage.getItem("repos");
    if (repoStorage) {
      setRepositorios(JSON.parse(repoStorage));
    }
  }, []);

  //DidMount - quando o componente é exibido em tela - Salvar os repositórios no localstorage
  useEffect(() => {
    localStorage.setItem("repos", JSON.stringify(repositorios));
  }, [repositorios]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      async function submit() {
        setLoading(true);
        setAlert(null);
        try {
          if (newRepo === "") {
            throw new Error("Você precisa indicar um repositório");
          }

          const response = await api.get(`/repos/${newRepo}`);

          const hasRepo = repositorios.find((repo) => repo.name === newRepo);
          if (hasRepo) {
            throw new Error("Repositório duplicado");
          }

          const data = {
            name: response.data.full_name,
          };
          setRepositorios([...repositorios, data]);
          setNewRepo("");
        } catch (error) {
          setAlert(true);
          console.log(error);
        } finally {
          setLoading(false);
        }
      }

      submit();
    },
    [newRepo, repositorios]
  );

  function handleInputChange(e) {
    setNewRepo(e.target.value);
    setAlert(null);
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

      <Form onSubmit={handleSubmit} $error={alert}>
        <input
          type="text"
          placeholder="Adicionar Repositórios"
          value={newRepo}
          onChange={handleInputChange}
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
            <Link href={`/repositorio/${encodeURIComponent(repo.name)}`}>
              Detalhes
              <FaBars size={20} />
            </Link>
          </li>
        ))}
      </List>
    </Container>
  );
}
