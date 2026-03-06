'use client';
import { useEffect, useState } from 'react';

export const Stars = () => {
  const [mounted, setMounted] = useState(false);

  // useEffect solo se ejecuta en el cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  // Si no está montado (está en el servidor), no renderizamos nada
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(250)].map((_, i) => (
        <div
          key={i}
          className="star animate-float"
          style={{
            width: '8px',
            height: '8px',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random()
          }}
        />
      ))}
    </div>
  );
};