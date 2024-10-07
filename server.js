const express = require('express');
const cors = require('cors');
const RotasPrivadas = require('./rotas/RotasPrivadas');
const RotasPublicas = require('./rotas/RotasPublicas');
const app = express();
// HABILITA O RECEBIMENTO DE DADOS PELO BODY
app.use(express.json())
app.use(cors(
    {
        // origin: ['url]
    }
))

app.get('/', (request, response) => {
    return response.status(200).send("Hello Backend")
})
app.use(RotasPublicas)
app.use(RotasPrivadas)
// N ROTAS
// FIM DE ROTAS - MIDDLEWARE FINAL
app.use((error, request, response, next) => {
    return response.status(500).json({ error: error.message })
    // FIM DO MIDDLEWARE FINAL
})
app.listen(3000, 'localhost', () => {
    console.log("Servidor executando em http://localhost:3000")
})