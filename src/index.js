require('dotenv').config(); 
//Caso o arquivo .env não esteja na raiz
//É preciso passar um objeto como param do .config()
//{path: 'caminho/relativo/do/.env'}
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', async function (req, res) {
    return res.json('Hello World da minha API!')
})

app.listen(process.env.PORT, () => {
    console.log(`Servidor inicializado na porta ${process.env.PORT}`);
});