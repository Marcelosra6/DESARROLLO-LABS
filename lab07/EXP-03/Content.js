import { useTheme } from '../context/ThemeContext'; // Importamos el hook para obtener el tema

const Content = () => {
  const { theme } = useTheme(); // Obtener el tema

  // Estilos que cambian dinámicamente según el tema
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
    background: theme === 'light' ? '#eeeeee' : '#222222', // Fondo cambia con el tema
    color: theme === 'light' ? '#222222' : '#eeeeee', // Color del texto
    transition: 'all 0.3s ease', // Transición suave entre los temas
  };

  return (
    <div style={styles}>
      <h1>El tema actual es {theme}</h1>
    </div>
  );
};

export default Content; 
