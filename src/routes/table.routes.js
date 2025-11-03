import express from "express";
import TableController from "../controllers/table.controller.js";

const tablesRouter = express.Router();

// Rotas de mesas
// GET /api/tables - Listar todos as mesas
tablesRouter.get("/", TableController.getAllTables);

// GET /api/tables/:number - Obter uma mesa pelo número
tablesRouter.get("/:number", TableController.getTableByNumber);

// POST /api/tables - Criar uma nova mesa
tablesRouter.post("/", TableController.createTable);

// PUT /api/tables/:number - Atualizar uma mesa
tablesRouter.put("/:number", TableController.updatetable);

// DELETE /api/tables/:number - Remover uma mesa
tablesRouter.delete("/:number", TableController.deleteTable);

export default tablesRouter;
