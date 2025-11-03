import express from "express";
import DishController from "../controllers/dish.controller.js";

const dishesRouter = express.Router();

// Rotas de pedidos
// GET /api/categories - Listar todos os pratos
dishesRouter.get("/", DishController.getAllDishes);

// GET /api/categories/:id - Obter um prato pelo ID
dishesRouter.get("/:id", DishController.getDishById);

// POST /api/categories - Criar um novo prato
dishesRouter.post("/", DishController.createDish);

// PUT /api/categories/:id - Atualizar um prato
dishesRouter.put("/:id", DishController.updateDish);

// DELETE /api/categories/:id - Remover um prato
dishesRouter.delete("/:id", DishController.deleteDish);

export default dishesRouter;
