import express from "express";
import OrderItemController from "../controllers/orderItem.controller.js";

const orderItemsRouter = express.Router();

// Rotas de item de pedidos
// GET /api/orderItems - Listar todos os item de pedidos
orderItemsRouter.get("/", OrderItemController.getAllOrderItems);

// GET /api/orderItems/:id - Obter um item de pedido pelo ID
orderItemsRouter.get("/:id", OrderItemController.getOrderItemById);

// POST /api/orderItems - Criar um novo item de pedido
orderItemsRouter.post("/", OrderItemController.createOrderItem);

// PUT /api/orderItems/:id - Atualizar um item de pedido
orderItemsRouter.put("/:id", OrderItemController.updateOrderItem);

// DELETE /api/orderItems/:id - Remover um item de pedido
orderItemsRouter.delete("/:id", OrderItemController.deleteOrderItem);

export default orderItemsRouter;
