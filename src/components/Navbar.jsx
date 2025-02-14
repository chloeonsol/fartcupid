import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo a la izquierda */}
        <a href="#" className="navbar-logo">
          <img src="/logotop.png" alt="Logo" />
        </a>

        {/* Botón BUY a la izquierda */}
        

        {/* Iconos a la derecha */}
        <div className="navbar-right">
          <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer" className="social-button">
            <img src="/icons/telegram.svg" alt="" />
          </a>
          <a href="https://x.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-button">
            <img src="/icons/x.svg" alt="" />
          </a>
          <a href="https://dexscreener.com/" target="_blank" rel="noopener noreferrer" className="social-button">
            <img src="/icons/dexscreener.svg" alt="" />
          </a>
          <a href="https://www.dextools.io/" target="_blank" rel="noopener noreferrer" className="social-button">
            <img src="/icons/dextools.svg" alt="" />
          </a>
          <a href="https://www.jup.ag/" target="_blank" rel="noopener noreferrer" className="btn-buy">
          BUY
        </a>
        </div>
      </div>
    </nav>
  );
}
