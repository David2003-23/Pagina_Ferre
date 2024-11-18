import React, { useEffect } from 'react';
import Timeline from './components/Timeline';
import { Sun } from 'lucide-react';

function App() {
  useEffect(() => {
    const scrollStep = 0.4; // Ajuste velocidad scroll (pixels por paso)
    let animationFrameId: number;
    
    const scroll = () => {
      window.scrollBy(0, scrollStep);
      
      // Check if we've reached the bottom
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight) {
        // Smooth scroll back to top
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
      
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Start scrolling after a short delay
    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(scroll);
    }, 2000);

    // Pause scrolling when hovering over the content
    const container = document.getElementById('root');
    container?.addEventListener('mouseenter', () => {
      cancelAnimationFrame(animationFrameId);
    });

    container?.addEventListener('mouseleave', () => {
      animationFrameId = requestAnimationFrame(scroll);
    });

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
      container?.removeEventListener('mouseenter', () => {});
      container?.removeEventListener('mouseleave', () => {});
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