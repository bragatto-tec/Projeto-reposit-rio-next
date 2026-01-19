📌 Sobre este Repositório
Este projeto é uma aplicação web desenvolvida para interagir com a API pública do GitHub. O usuário pode adicionar repositórios favoritos, salvá-los localmente e visualizar detalhes específicos, como issues abertas e fechadas.

O projeto foi construído utilizando a arquitetura moderna do Next.js (App Router), integrando Styled Components com suporte a Server-Side Rendering (SSR) através de um registry customizado.

🎯 Objetivo
O objetivo deste repositório é:

📚 Praticar e aplicar conceitos do Next.js 16 e React 19.

💅 Demonstrar a integração do Styled Components com o App Router do Next.js.

🔄 Consumir dados externos utilizando Axios e a API do GitHub.

💾 Gerenciar estado local e persistência de dados com localStorage.

🚀 Implementar funcionalidades como paginação e filtragem de issues.

📂 Estrutura
A aplicação utiliza o App Router do Next.js.

src/app/page.jsx: Rota principal que carrega a página Main.

src/app/pages/Main/: Página inicial onde é possível adicionar e listar repositórios.

src/app/pages/Repositorio/: Página dinâmica (/repositorio/[repositorio]) que exibe detalhes e issues.

src/app/services/api.jsx: Configuração do Axios para comunicação com a API do GitHub.

src/app/registry.jsx: Configuração necessária para o Styled Components funcionar corretamente no Next.js (SSR).

src/app/styles/globals.jsx: Estilos globais da aplicação.

🛠️ Tecnologias
Framework: Next.js 16.1.1

Biblioteca UI: React 19.2.3

Estilização: Styled Components

Requisições HTTP: Axios

Ícones: React Icons (Font Awesome)

Ferramentas: Babel Plugin React Compiler

🚀 Como Executar
Clone o repositório:

Bash

git clone https://github.com/bragatto-tec/projeto-reposit-rio-next.git
Instale as dependências:

Bash

npm install
# ou
yarn install
Execute o servidor de desenvolvimento:

Bash

npm run dev
# ou
yarn dev
Acesse http://localhost:3000 no seu navegador.

Desenvolvedor: Guilherme Miyamoto Bragatto

📧 Email: guimbragatto@gmail.com

💼 LinkedIn: Meu perfil

🐙 GitHub: Meu usuário

<div align="center">

Desenvolvido com ⚛️ e 💻

</div>
