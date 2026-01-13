"use client";
import React, { useState, useEffect, useMemo } from "react";
import {
  Container,
  Owner,
  Loading,
  BackButton,
  IssuesList,
  PageActions,
} from "./styles";
import { FaArrowLeft } from "react-icons/fa";
import api from "../../services/api";

export default function Repositorio({ params }) {
  const [repositorio, setRepositorio] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  // Memoizar o nome do repo
  const nomeRepo = useMemo(() => {
    if (!params || !params.repositorio) return null;
    return decodeURIComponent(params.repositorio);
  }, [params]);

  useEffect(() => {
    async function load() {
      if (!nomeRepo) return;

      try {
        const [repositorioData, issuesData] = await Promise.all([
          api.get(`/repos/${nomeRepo}`),
          api.get(`/repos/${nomeRepo}/issues`, {
            params: {
              state: "open",
              per_page: 5,
              page,
            },
          }),
        ]);
        setRepositorio(repositorioData.data);
        setIssues(issuesData.data);
      } catch (error) {
        console.error("Repositório não encontrado:", error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [nomeRepo, page]);

  function handlePage(action) {
    setPage(action === "back" ? page - 1 : page + 1);
  }

  if (loading) {
    return (
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
    );
  }
  return (
    <Container>
      <BackButton href="/">
        <FaArrowLeft color="#000" size={30} />
      </BackButton>
      <Owner>
        <img src={repositorio.owner.avatar_url} alt={repositorio.owner.login} />
        <h1>{repositorio.name}</h1>
        <p>{repositorio.description}</p>
      </Owner>

      <IssuesList>
        {issues.map((issue) => (
          <li key={String(issue.id)}>
            <img src={issue.user.avatar_url} alt={issue.user.login}></img>
            <div>
              <strong>
                <a href={issue.html_url}> {issue.title}</a>

                {issue.labels.map((label) => (
                  <span key={String(label.id)}>{label.name}</span>
                ))}
              </strong>
              <p>{issue.user.login}</p>
            </div>
          </li>
        ))}
      </IssuesList>

      <PageActions>
        <button
          type="button"
          onClick={() => handlePage("back")}
          disabled={page < 2}
        >
          Voltar
        </button>

        <button type="button" onClick={() => handlePage("next")}>
          Avançar
        </button>
      </PageActions>
    </Container>
  );
}
