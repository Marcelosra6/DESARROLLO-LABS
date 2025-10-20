import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ background: "#333", color: "#fff", padding: "10px" }}>
      <Link to="/" style={{ color: "#fff", marginRight: "15px" }}>Inicio</Link>
      <Link to="/articulos" style={{ color: "#fff" }}>Artículos</Link>
    </nav>
  );
}
