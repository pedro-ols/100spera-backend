import express from "express";
import categoryController from "../controllers/category.controller.js";

const categoriesRouter = express.Router();

// Rotas de categorys
// GET /api/categorys - Listar todos os categorys
categoriesRouter.get("/", categoryController.getAllCategories);

// GET /api/categorys/:id - Obter um category pelo ID
categoriesRouter.get("/:id", categoryController.getCategoryById);

// POST /api/categorys - Criar um novo category
categoriesRouter.post("/", categoryController.createCategory);

// PUT /api/categorys/:id - Atualizar um category
categoriesRouter.put("/:id", categoryController.updateCategory);

// DELETE /api/categorys/:id - Remover um category
categoriesRouter.delete("/:id", categoryController.deleteCategory);

export default categoriesRouter;
