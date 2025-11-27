const express = require('express');
const app = express();

// Middleware para leer JSON
app.use(express.json());

// Importar rutas
const userRoutes = require('./routes/users.routes');
app.use('/api/users', userRoutes);

// Puerto
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
