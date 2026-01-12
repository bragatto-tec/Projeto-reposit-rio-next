import ClientLayout from "./client-layout";

export const metadata = {
  title: "Meus Repositórios",
  description: "App para gerenciar repositórios GitHub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
