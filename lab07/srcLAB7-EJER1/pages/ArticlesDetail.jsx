import { useParams, Link, Outlet } from "react-router-dom";
import { articles } from "../data/articles";

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) return <p>Artículo no encontrado</p>;

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>

      <Link to="autor">Sobre el Autor</Link>

      <Outlet /> {/* Aquí se renderizará la biografía del autor */}
    </div>
  );
}
