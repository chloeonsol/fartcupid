import chloeImage from '/logo.png';
import './Hero.css';
import './HeroMobile.css';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVibrating, setIsVibrating] = useState(false);
  const [logoPosition, setLogoPosition] = useState({ top: '10px', left: '23%' });

  const sounds = ['/fart1.wav', '/fart2.wav', '/fart3.wav'];

  const copyToClipboard = () => {
    const address = '7DdHyxLZQuudndfrX3ZDDqgK6zPFbm17wGwKJqgjpump';
    navigator.clipboard.writeText(address).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    });
  };

  const handleLogoClick = () => {
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    const audio = new Audio(randomSound);
    audio.play();
    
    setIsVibrating(true);
    setTimeout(() => setIsVibrating(false), 300);

    // Movimiento aleatorio dentro de la pantalla
    const maxX = window.innerWidth - 150; // Ajuste para evitar que se salga de la pantalla
    const maxY = window.innerHeight - 150;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    setLogoPosition({ top: `${randomY}px`, left: `${randomX}px` });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="hero" className={isMobile ? "hero-container-mobile-version" : "hero-container"}>
      <div className="hero-content">
        <img src={chloeImage} alt="CHLOE" className={isMobile ? "hero-title-mobile-version" : "hero-title"} />
        <p className={isMobile ? "hero-text-mobile-version" : "hero-text"}>
          <span className="white-text">Love is in the Air..</span>
          <span className="purple-text">Literally!💘💨</span>
        </p>

        <div className={isMobile ? "address-button-container-mobile" : "address-button-container"}>
          <button className={isMobile ? "address-button-mobile" : "address-button"}>
            <span className="address-text">CA: 7DdHy...pump</span>
            <button className={`copy-button ${isCopied ? 'copied' : ''}`} onClick={copyToClipboard}>
              {isCopied ? (
                <span>
                  COPIED! <span className="check-icon">✔</span>
                </span>
              ) : (
                'Copy'
              )}
            </button>
          </button>
        </div>

        <div className={isMobile ? "social-buttons-container-mobile" : "social-buttons-container"}>
          <a href="https://t.me/fartcupidsol" target="_blank" rel="noopener noreferrer">
            <button className="social-button" style={{ backgroundImage: 'url(/tg.avif)' }}></button>
          </a>
          <a href="https://x.com/fartcupidsol" target="_blank" rel="noopener noreferrer">
            <button className="social-button" style={{ backgroundImage: 'url(/X.jpg)' }}></button>
          </a>
          <a href="https://jup.ag/swap/SOL-7DdHyxLZQuudndfrX3ZDDqgK6zPFbm17wGwKJqgjpump" target="_blank" rel="noopener noreferrer">
            <button className="social-button" style={{ backgroundImage: 'url(/jup.webp)' }}></button>
          </a>
          <a href="https://dexscreener.com/solana/bsabartbatkx4npxhttc7h6dvl4e8phm4xcakbopzcy2" target="_blank" rel="noopener noreferrer">
            <button className="social-button" style={{ backgroundImage: 'url(/dexs.png)' }}></button>
          </a>
          <a href="https://www.dextools.io/app/es/solana/pair-explorer/BsAbARTbAtkx4nPxHttc7H6dvL4e8Phm4xCAkBopzcY2?t=1739275108537" target="_blank" rel="noopener noreferrer">
            <button className="social-button" style={{ backgroundImage: 'url(/dexs.avif)' }}></button>
          </a>
        </div>

        {/* Imagen Cora */}
        <img src="/cora.png" alt="Cora" className="cora-image" />

        {/* Imagen Logo2 */}
        <img 
          src="/logo2.gif" 
          alt="Logo2" 
          className={`logo2-image ${isVibrating ? 'vibrating' : ''}`} 
          onClick={handleLogoClick} 
          style={{ top: logoPosition.top, left: logoPosition.left }}
        />
      </div>
    </div>
  );
};

export default Hero;
