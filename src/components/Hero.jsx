import chloeImage from '/logo.png';
import './Hero.css';
import './HeroMobile.css';
import { useState, useEffect } from 'react';
import { db, ref, onValue, runTransaction } from '../firebaseConfig';

const Hero = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVibrating, setIsVibrating] = useState(false);
  const [logoPosition, setLogoPosition] = useState({ top: '10px', left: '23%' });
  const [gasArray, setGasArray] = useState([]);
  const [fartCount, setFartCount] = useState(0);

  const sounds = ['/fart1.wav', '/fart2.wav', '/fart3.wav'];

  useEffect(() => {
    // 🔥 Obtener el contador de Firebase en tiempo real
    const fartRef = ref(db, 'farts');
    onValue(fartRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setFartCount(data);
      }
    });

    // Detectar si es móvil
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const copyToClipboard = () => {
    const address = '7DdHyxLZQuudndfrX3ZDDqgK6zPFbm17wGwKJqgjpump';
    navigator.clipboard.writeText(address).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    });
  };

  const handleLogoClick = (event) => {
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    const audio = new Audio(randomSound);
    audio.play();
    
    setIsVibrating(true);
    setTimeout(() => setIsVibrating(false), 300);

    // 🔥 ACTUALIZAR EL CONTADOR EN FIREBASE
    const fartRef = ref(db, 'farts');
    runTransaction(fartRef, (currentValue) => {
      return (currentValue || 0) + 1;  // Si es null, empieza en 0 y suma 1
    }).then(() => {
      console.log("🔥 Contador actualizado en Firebase");
    }).catch((error) => {
      console.error("❌ Error actualizando contador:", error);
    });

    // Movimiento aleatorio dentro de la pantalla
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 150;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    setLogoPosition({ top: `${randomY}px`, left: `${randomX}px` });

    // Generar gas
    const logo = event.target;
    const rect = logo.getBoundingClientRect();
    const gasX = rect.left + rect.width / 2;
    const gasY = rect.top + rect.height - 10;

    const newGas = {
      id: Date.now(),
      left: `${gasX}px`,
      top: `${gasY}px`
    };

    setGasArray((prevGas) => [...prevGas, newGas]);

    setTimeout(() => {
      setGasArray((prevGas) => prevGas.filter((g) => g.id !== newGas.id));
    }, 1000);
  };

  return (
    <div id="hero" className={isMobile ? "hero-container-mobile-version" : "hero-container"}>
      <div className="hero-content">
        <img src={chloeImage} alt="CHLOE" className={isMobile ? "hero-title-mobile-version" : "hero-title"} />
        <p className={isMobile ? "hero-text-mobile-version" : "hero-text"}>
          <span className="white-text">Love is in the Air..</span>
          <span className="purple-text">Literally!💘💨</span>
        </p>

        {/* 🔥 Contador de Pedos en Tiempo Real */}
        <h2 className="fart-counter">Total Pedos: {fartCount}</h2>

        <div className={isMobile ? "address-button-container-mobile" : "address-button-container"}>
          <button className={isMobile ? "address-button-mobile" : "address-button"}>
            <span className="address-text">CA: XXXX...pump</span>
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

        {/* Imagen Cupido con contador de pedos */}
        <img 
          src="/logo2.gif" 
          alt="Cupido" 
          className={`logo2-image ${isVibrating ? 'vibrating' : ''}`} 
          onClick={handleLogoClick} 
          style={{ top: logoPosition.top, left: logoPosition.left }}
        />

        {/* Gases de Cupido */}
        {gasArray.map((gas) => (
          <div
            key={gas.id}
            className="gas-effect"
            style={{ left: gas.left, top: gas.top }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
