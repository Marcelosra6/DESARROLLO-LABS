import { useNavigate } from "react-router-dom";
import { articles } from "../data/articles";

export default function Home() {
  const navigate = useNavigate();

  const handleRandomArticle = () => {
    const randomId = Math.floor(Math.random() * articles.length) + 1;
    navigate(`/articulos/${randomId}`);
  };

  return (
    <div>
      <h1>Bienvenido a mi Blog</h1>
      <p>Explora artículos sobre React, desarrollo web y más.</p>
      <button onClick={handleRandomArticle}>
        Leer un Artículo Aleatorio
      </button>
    </div>
  );
}
