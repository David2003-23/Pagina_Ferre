import React, { useEffect } from 'react';
import Timeline from './components/Timeline';
import { Sun } from 'lucide-react';

function App() {
  useEffect(() => {
    // Reset scroll position when page loads
    window.scrollTo(0, 0);
    
    const scrollStep = 1; // Velocidad de scroll ajustada
    let animationFrameId: number;
    let isScrolling = true;
    
    const scroll = () => {
      if (isScrolling) {
        window.scrollBy(0, scrollStep);
        
        // Cuando llegue al final, volver al principio
        if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight) {
          window.scrollTo(0, 0);
        }
      }
      
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Iniciar auto-scroll inmediatamente
    animationFrameId = requestAnimationFrame(scroll);

    // Control de scroll con mouse/touch
    const handleInteraction = (pause: boolean) => {
      isScrolling = !pause;
    };

    // Eventos para PC
    document.addEventListener('mouseenter', () => handleInteraction(true));
    document.addEventListener('mouseleave', () => handleInteraction(false));

    // Eventos para móviles
    document.addEventListener('touchstart', () => handleInteraction(true));
    document.addEventListener('touchend', () => handleInteraction(false));

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('mouseenter', () => handleInteraction(true));
      document.removeEventListener('mouseleave', () => handleInteraction(false));
      document.removeEventListener('touchstart', () => handleInteraction(true));
      document.removeEventListener('touchend', () => handleInteraction(false));
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <Sun className="mr-4 text-yellow-500" size={36} />
            Evolución Energética de Ferretería Alemana
          </h1>
          <p className="text-xl text-gray-600">Un viaje a través del tiempo y la innovación energética</p>
        </div>
        <Timeline />
      </div>
    </div>
  );
}

export default App;
