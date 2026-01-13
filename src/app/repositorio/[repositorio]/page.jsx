"use client";
import { useParams } from "next/navigation";
import Repositorio from "../../pages/Repositorio";

export default function RepositorioPage() {
  const params = useParams();
  return <Repositorio params={params} />;
}
