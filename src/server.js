import express from "express";
import { config } from "dotenv";
import cors from "cors"; // Importa o middleware CORS

import routes from "./routes/index.routes.js"

config(); // Carrega variáveis de ambiente do arquivo .env
const port = process.env.PORT || 4001; 

// Inicializa o Express
const app = express();
app.use(cors()); 

app.use(express.json()); 

app.use("/100spera", routes)

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Desce mais uma na porta ${port}`);
});