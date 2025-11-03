const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors()); 
app.use(express.json());

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'publications'
});
// 3. Crear el Endpoint (la ruta de la API)
app.get('/api/customers', async(req, res) => {
 try{
    console.log("Petición recibida en /api/customers");
    // Ejecutamos la consulta en la tabla 'customers'
    const [rows] = await pool.query('SELECT name, isbn FROM customers');
    res.json(rows); // Devolvemos los datos como JSON
 } catch(error) {
 console.error("Error al consultar la base de datos:", error);
 res.status(500).json({ message: "Error en el servidor"});
 }
});
// 4. Iniciar el Servidor
app.listen (PORT, () =>{
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});

