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
          <a href="https://t.me/fartcupidsol" target="_blank" rel="noopener noreferrer" className="social-button">
            <img src="/icons/telegram.svg" alt="" />
          </a>
          <a href="https://x.com/fartcupidsol" target="_blank" rel="noopener noreferrer" className="social-button">
            <img src="/icons/x.svg" alt="" />
          </a>
          <a href="https://dexscreener.com/solana/ea6mpzcvkd8yvcbwwj4rhugi8jyy3kvihwxkzfqspysk" target="_blank" rel="noopener noreferrer" className="social-button">
            <img src="/icons/dexscreener.svg" alt="" />
          </a>
          <a href="https://www.dextools.io/app/es/solana/pair-explorer/6D6hWRumqdRA4oeFUj2zaybTSpDqtrKuTjZXoqCbpump?t=1739537463720" target="_blank" rel="noopener noreferrer" className="social-button">
            <img src="/icons/dextools.svg" alt="" />
          </a>
          <a href="https://pump.fun/coin/6D6hWRumqdRA4oeFUj2zaybTSpDqtrKuTjZXoqCbpump" target="_blank" rel="noopener noreferrer" className="btn-buy">
          BUY
        </a>
        </div>
      </div>
    </nav>
  );
}
