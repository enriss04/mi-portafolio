export const Stars = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Generamos 20 "estrellas" con posiciones aleatorias */}
      {[...Array(200)].map((_, i) => (
        <div
          key={i}
          className="star animate-float"
          style={{
            width: `8px`,
            height: `8px`,
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