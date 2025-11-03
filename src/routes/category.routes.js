import express from "express";
import categoryController from "../controllers/category.controller.js";

const categoriesRouter = express.Router();

// Rotas de categorias
// GET /api/categories - Listar todos as categorias
categoriesRouter.get("/", categoryController.getAllCategories);

// GET /api/categories/:id - Obter uma categoria pelo ID
categoriesRouter.get("/:id", categoryController.getCategoryById);

// POST /api/categories - Criar uma nova categoria
categoriesRouter.post("/", categoryController.createCategory);

// PUT /api/categories/:id - Atualizar uma categoria
categoriesRouter.put("/:id", categoryController.updateCategory);

// DELETE /api/categories/:id - Remover uma categoria
categoriesRouter.delete("/:id", categoryController.deleteCategory);

export default categoriesRouter;
