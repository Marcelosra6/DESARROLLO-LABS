import { useParams } from "react-router-dom";
import { articles } from "../data/articles";

export default function Author() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) return <p>Autor no encontrado</p>;

  return (
    <div style={{ marginTop: "1rem", borderTop: "1px solid #ccc", paddingTop: "1rem" }}>
      <h3>Autor: {article.author.name}</h3>
      <p>{article.author.bio}</p>
    </div>
  );
}
