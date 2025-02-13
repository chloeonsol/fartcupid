import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo a la izquierda */}
        <a href="#" className="navbar-logo">
          <img src="/logotop.png" alt="Logo" />
        </a>

        {/* Iconos y botón BUY a la derecha */}
        <div className="navbar-right">
          <a href="https://www.jup.ag/" target="_blank" rel="noopener noreferrer" className="btn-buy">
            BUY
          </a>
        </div>
      </div>
    </nav>
  );
}
