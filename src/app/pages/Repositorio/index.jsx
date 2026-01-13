"use client";
import React, { useState, useEffect, useMemo } from "react";
import {
  Container,
  Owner,
  Loading,
  BackButton,
  IssuesList,
  PageActions,
  FilterList,
} from "./styles";
import { FaArrowLeft } from "react-icons/fa";
import api from "../../services/api";

export default function Repositorio({ params }) {
  const [repositorio, setRepositorio] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState([
    { state: "all", label: "Todas", active: true },
    { state: "open", label: "Abertas", active: false },
    { state: "closed", label: "Fechadas", active: false },
  ]);
  const [filterIndex, setFilterIndex] = useState(0);

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
              state: filters.find((f) => f.active).state,
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

  function handleFilter(index) {
    setFilterIndex(index);
  }
  useEffect(() => {
    async function loadIssues() {
      if (!nomeRepo) return;

      const response = await api.get(`/repos/${nomeRepo}/issues`, {
        params: {
          state: filters[filterIndex].state,
          per_page: 5,
          page,
        },
      });

      setIssues(response.data);
    }
    loadIssues();
  }, [filterIndex, nomeRepo, page, filters]);

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

      <FilterList active={filterIndex}>
        {filters.map((filter, index) => (
          <button
            key={filter.label}
            type="button"
            onClick={() => {
              handleFilter(index);
              setPage(1);
            }}
          >
            {filter.label}
          </button>
        ))}
      </FilterList>

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
