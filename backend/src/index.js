const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333);

/*
Metodo HTTP
Get: buscar uma informação do backend
Post: criar uma informação do backend
Put: alterar uma informação do backend
Delete: delete uma informação do backend
*/ 

/*
Tipos de parametros
Query Params: Parametros nomeados na rota após o "?" e geralmente servem para filtros, paginação
Route Params: Parametros utilizados para identificar recursos
Request Body: Corpo da requisição utilizado para criar ou alterar recursos
*/ 
/*
Driver: SELECT * FROM users
Query Builder: table('users').select('*').where()

*/ 



