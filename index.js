// 1. Importamos las librerías necesarias
const express = require('express');
require('dotenv').config(); // Esto permite leer el archivo .env

// 2. Inicializamos la aplicación de Express
const app = express();

// 3. Traemos el puerto desde nuestro archivo .env (y si no existe, usa el 4000 por defecto)
const PORT = process.env.PORT || 4000;

// 4. Creamos una ruta de prueba para verificar que funcione
app.get('/', (req, res) => {
    res.send('<h1>¡Servidor de la Práctica 2 funcionando de forma manual! 💻🔥</h1>');
});

// 5. Ponemos al servidor a escuchar las peticiones
app.listen(PORT, () => {
    console.log(`Servidor manual corriendo con éxito en: http://localhost:${PORT}`);
});