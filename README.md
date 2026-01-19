# 📦 Meus Repositórios

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Styled Components](https://img.shields.io/badge/Styled_Components-CV-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Status](https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge)

**Bem-vindo ao repositório da aplicação "Meus Repositórios", uma ferramenta para gerenciar e visualizar repositórios do GitHub!**

</div>

---

## 📌 Sobre este Repositório

Este repositório contém o código-fonte de uma aplicação web desenvolvida para interagir com a API do GitHub. O projeto permite salvar os seus repositórios favoritos, visualizá-los numa lista e aceder a detalhes específicos, como *issues* abertas e fechadas.

O projeto foi construído utilizando a arquitetura moderna do **Next.js (App Router)**, integrando **Styled Components** com suporte a renderização do lado do servidor (SSR) através de um *registry* personalizado.

## 🎯 Objetivo

O objetivo deste repositório é:

- 📚 Praticar e demonstrar competências em **Next.js 16** e **React 19**.
- 💅 Aplicar **Styled Components** num ambiente *Server-Side Rendering* (SSR).
- 🔄 Consumir a API do GitHub utilizando **Axios**.
- 💾 Gerir persistência de dados locais com `localStorage`.
- ✨ Implementar funcionalidades de navegação, paginação e filtros de *issues*.

## 📂 Estrutura

A aplicação utiliza o **App Router** do Next.js e está estruturada da seguinte forma:

- **`src/app/page.jsx`**: Ponto de entrada que renderiza a página principal.
- **`src/app/pages/Main/`**: Página inicial onde o utilizador pode adicionar e listar repositórios.
- **`src/app/pages/Repositorio/`**: Página de detalhes que exibe informações do repositório e as suas *issues*.
- **`src/app/services/api.jsx`**: Configuração do cliente HTTP (Axios) para comunicação com o GitHub.
- **`src/app/styles/globals.jsx`**: Definições de estilos globais.
- **`src/app/registry.jsx`**: Configuração do registo de estilos para compatibilidade do Styled Components com o Next.js.

## 🛠️ Tecnologias

- **Framework**: Next.js 16.1.1
- **Biblioteca UI**: React 19.2.3
- **Estilização**: Styled Components
- **Requisições HTTP**: Axios
- **Ícones**: React Icons
- **Compilador**: Babel Plugin React Compiler

**Desenvolvedor**: Guilherme Miyamoto Bragatto

- 📧 Email: guimbragatto@gmail.com
- 💼 LinkedIn: [Meu perfil](https://www.linkedin.com/in/guilherme-miyamoto-bragatto-2102b4355)
- 🐙 GitHub: [Meu utilizador](https://github.com/bragatto-tec)

---

<div align="center">

*Desenvolvido com ⚛️ e 💻*

</div>
