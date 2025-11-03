import express from "express";
import OrderController from "../controllers/order.controller.js";

const ordersRouter = express.Router();

// Rotas de pedidos
// GET /api/categories - Listar todos os pedidos
ordersRouter.get("/", OrderController.getAllOrders);

// GET /api/categories/:id - Obter um pedido pelo ID
ordersRouter.get("/:id", OrderController.getOrderById);

// POST /api/categories - Criar um novo pedido
ordersRouter.post("/", OrderController.createOrder);

// PUT /api/categories/:id - Atualizar um pedido
ordersRouter.put("/:id", OrderController.updateOrder);

// DELETE /api/categories/:id - Remover um pedido
ordersRouter.delete("/:id", OrderController.deleteOrder);

export default ordersRouter;
