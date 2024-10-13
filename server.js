const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const RotasPrivadas = require("./rotas/RotasPrivadas");
const RotasPublicas = require("./rotas/RotasPublicas");

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// HABILITA O RECEBIMENTO DE DADOS PELO BODY
app.use(express.json());
app.use(
  cors({
    // origin: ['url]
  })
);

app.get("/", (request, response) => {
  return response.status(200).send("Hello Backend");
});
app.use(RotasPublicas);
app.use(RotasPrivadas);
// N ROTAS
// FIM DE ROTAS - MIDDLEWARE FINAL
app.use((error, request, response, next) => {
  return response.status(500).json({ error: error.message });
  // FIM DO MIDDLEWARE FINAL
});

// app.listen(PORT, () => {
//     console.log("Servidor executando")
// })

app.listen(PORT, "localhost", () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
