const express =require('express');  //declaracion
const app = express(); // constructor de la clase express
//const routes = require('./routes/routes');
const cors = require('cors');

const cliente= require('./routes/cliente')

app.use(cors({origin: '*'}));

app.set('port',process.env.PORT || 3030)

app.use('/api/clientes',cliente);

app.listen(app.get('port'),()=>{
    console.log('Corriendo servidor en el puerto '+app.get('port'))
})