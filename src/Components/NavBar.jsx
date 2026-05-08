import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = function () {
  const [open, setOpen] = useState(false);

  return (
    <aside>
      <nav className="NavBar">
        <Link to="/home">
          <img src="/src/Assets/logo_knowly-removebg-preview.png" alt="logo" />
        </Link>
        <Link to="/Blogs">Blogs</Link>
        <Link to="/Cursos">Cursos</Link>
        <Link to="/Contacto">Nosotros</Link>
        <Link to="/login"className="btn-acceder">Acceder</Link>
        
      </nav>
    </aside>
  );
};

export default NavBar;
