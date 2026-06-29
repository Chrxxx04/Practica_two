//MI NUEVO INDEX DE LA RAMA MIS_EXPERIMENTOS 
const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 4000;

// Middleware experimental para registrar peticiones en la consola
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Petición recibida: ${req.method} en ${req.url}`);
    next();
});

// Ruta principal del experimento
app.get('/', (req, res) => {
    res.send('<h1>¡Hola desde el universo paralelo de la rama Experimentos! 🚀</h1><p>Servidor corriendo con Express de forma fluida.</p>');
});

// Nueva ruta de prueba para simular datos de una API
app.get('/api/prueba', (req, res) => {
    res.json({
        status: "success",
        message: "Datos cargados desde la rama de pruebas",
        backendStudent: true
    });
});


// Ruta nueva para probar el Merge más adelante
app.get('/merge-exitoso', (req, res) => {
    res.send('<h1>Servidor de la Práctica 2: Versión Oficial de Producción 🚀</h1>');
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor experimental corriendo con éxito en: http://localhost:${PORT}`);
});