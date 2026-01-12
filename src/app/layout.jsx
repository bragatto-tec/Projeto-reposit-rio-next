import GlobalStyle from "./styles/globals";

export const metadata = {
  title: "Meus Repositórios",
  description: "App para gerenciar repositórios GitHub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <GlobalStyle />
        {children}
      </body>
    </html>
  );
}
