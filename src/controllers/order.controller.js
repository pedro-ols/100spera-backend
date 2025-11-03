import OrderModel from "../models/order.model.js";

class OrderController {
  async getAllOrders(req, res) {
    try {
      const orders = await OrderModel.findAll();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar pedidos" });
    }
  }

  async getOrderById(req, res) {
    try {
      const { id } = req.params;

      const order = await OrderModel.findById(id);

      if (!order) {
        return res.status(404).json({ error: "Pedido não encontrado" });
      }

      res.json(order);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar pedido" });
    }
  }

  async createOrder(req, res) {
    const orderData = req.body;
    
    const validStatus = [
      "pendente",
      "em preparo",
      "pronto",
      "entregue",
      "pago",
      "cancelado"
    ];

    try {

      if (orderData.status && validStatus.includes(orderData.status) === false) {
        console.log(orderData);
        return res.status(400).json({ error: "Status de pedido inválido" });
      }
      if (!orderData.tableNumber) {
        return res.status(400).json({ error: "Coloque um número para a mesa" });
      }

      const newOrder = await OrderModel.create(orderData);

      if (!newOrder) {
        return res.status(400).json({ error: "Erro ao criar pedido" });
      }

      res.status(201).json(newOrder);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar pedido" });
    }
  }

  async updateOrder(req, res) {
    const { id } = req.params;

    const orderData = req.body;

    const validStatus = [
      "pendente",
      "em preparo",
      "pronto",
      "entregue",
      "pago",
      "cancelado"
    ];

    try {
      if (!(await OrderModel.findById(id))) {
        return res.status(404).json({ error: "Pedido não encontrado" });
      }


      if (orderData.status && validStatus.includes(orderData.status) === false) {
        console.log(orderData);
        return res.status(400).json({ error: "Status de pedido inválido" });
      }
      if (!orderData.tableNumber) {
        return res.status(400).json({ error: "Coloque um número para a mesa" });
      }

      const updatedOrder = await OrderModel.update(id, orderData);
      res.json(updatedOrder);
    } catch (error) {
      console.error("Erro ao atualizar pedido:", error);
      res.status(500).json({ error: "Erro ao atualizar pedido" });
    }
  }

  // DELETE /api/Orderes/:id
  async deleteOrder(req, res) {
    const { id } = req.params;

    try {
      if (!(await OrderModel.delete(id))) {
        return res.status(404).json({ error: "Pedido não encontrado" });
      }

      res.status(200).json({ message: "Pedido removido com sucesso" });
    } catch (error) {
      console.error("Erro ao remover pedido", error);
      res.status(500).json({ error: "Erro ao remover pedrido" });
    }
  }
}

export default new OrderController();
