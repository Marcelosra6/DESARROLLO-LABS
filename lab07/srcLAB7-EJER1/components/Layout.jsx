import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "1rem" }}>
        <Outlet /> {/* Aquí se mostrarán las páginas */}
      </main>
      <Footer />
    </div>
  );
}
