import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ArticlesList from "./pages/ArticlesList";
import ArticleDetail from "./pages/ArticleDetail";
import Author from "./pages/Author";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="articulos" element={<ArticlesList />} />
        <Route path="articulos/:id" element={<ArticleDetail />}>
          <Route path="autor" element={<Author />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
