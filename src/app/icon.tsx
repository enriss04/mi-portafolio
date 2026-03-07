// src/app/icon.tsx
import { ImageResponse } from 'next/og';

// Configuración del tamaño del icono (32x32 es estándar para favicons)
export const size = {
    width: 20,
    height: 20,
};
export const contentType = 'image/png';

// Función que genera el icono
export default function Icon() {
    return new ImageResponse(
        (
            // Estilos CSS-in-JS para el logo "ESS"
            <div
                style={{
                    fontSize: 12,
                    background: 'black', // Fondo negro (o el color de tu gradiente)
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white', // Texto blanco
                    borderRadius: '20%', // Bordes ligeramente redondeados
                    fontWeight: 1000, // Fuente muy gruesa
                    fontFamily: 'sans-serif',
                }}
            >
                ESS
            </div>
        ),
        // Opciones de ImageResponse
        {
            ...size,
        }
    );
}