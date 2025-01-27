const express = require('express');
const app = express();
const limiter = require('./middleware/rateLimiter');
const urlRoutes = require('./routes/urlRoutes');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());
app.use(limiter); //Limitar las peticiones a la API
app.use('/api', urlRoutes);
app.use(errorHandler); //Manejar errores

app.get('/', (req, res) =>{
    res.send("El backend funciona correctamente");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=> {
    console.log(`Servidor en http://localhost:${PORT}`)
});

