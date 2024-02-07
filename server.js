const express = require('express');
const env =require('dotenv')
//Endpoint
const Auth =require('./endpoints/AuthEndpoint')


//Configurar Enviroment
env.config();

//Almaceno instancia de express
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Mapeo Endpoints
app.use('/api/auth',Auth );


//Levanto el Express
const PORT = process.env.SERVERPORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor Express en ejecución en http://www.localhost:${PORT}`);
});