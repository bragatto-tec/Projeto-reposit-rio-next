import Repositorio from "../../pages/Repositorio";

export default async function RepositorioPage(props) {
  const params = await props.params;
  return <Repositorio params={params} />;
}
