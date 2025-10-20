import { Link } from "react-router-dom";
import { articles } from "../data/articles";

export default function ArticlesList() {
  return (
    <div>
      <h2>Lista de Artículos</h2>
      <ul>
        {articles.map((a) => (
          <li key={a.id}>
            <Link to={`/articulos/${a.id}`}>{a.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
