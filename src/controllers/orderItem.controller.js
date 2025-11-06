import OrderItemModel from "../models/orderItem.model.js";

class OrderItemController {
  async getAllOrderItems(req, res) {
    try {
      const orderItems = await OrderItemModel.findAll();
      res.json(orderItems);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar itens de pedido" });
    }
  }

  async getOrderItemById(req, res) {
    try {
      const { id } = req.params;

      const orderItem = await OrderItemModel.findById(id);

      if (!orderItem) {
        return res.status(404).json({ error: "Item de pedido não encontrado" });
      }

      res.json(orderItem);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar item de pedido" });
    }
  }

  async createOrderItem(req, res) {
    const orderItemData = req.body;

    try {
      if (!orderItemData.orderId) {
        return res
          .status(400)
          .json({ error: "Coloque um pedido para o item do pedido" });
      }
      if (!orderItemData.dishId) {
        return res
          .status(400)
          .json({ error: "Coloque um prato para o item do pedido" });
      }

      const newOrderItem = await OrderItemModel.create(orderItemData);

      if (!newOrderItem) {
        return res.status(400).json({ error: "Erro ao criar item de pedido" });
      }

      res.status(201).json(newOrderItem);
    } catch (error) {
      console.log(orderItemData)
      console.log(error);
      res.status(500).json({ error: "Erro ao criar item de pedido" });
    }
  }

  async updateOrderItem(req, res) {
    const { id } = req.params;

    const orderItemData = req.body;

    try {
      if (!(await OrderItemModel.findById(id))) {
        return res.status(404).json({ error: "item de pedido não encontrado" });
      }

      if (!orderItemData.orderId) {
        return res
          .status(400)
          .json({ error: "Coloque um pedido para o item do pedido" });
      }
      if (!orderItemData.dishId) {
        return res
          .status(400)
          .json({ error: "Coloque um prato para o item do pedido" });
      }

      const updatedOrderItem = await OrderItemModel.update(id, orderItemData);
      res.json(updatedOrderItem);
    } catch (error) {
      console.error("Erro ao atualizar item de pedido:", error);
      res.status(500).json({ error: "Erro ao atualizar item de pedido" });
    }
  }

  async deleteOrderItem(req, res) {
    const { id } = req.params;

    try {
      if (!(await OrderItemModel.delete(id))) {
        return res.status(404).json({ error: "item de pedido não encontrado" });
      }

      res.status(200).json({ message: "item de pedido removido com sucesso" });
    } catch (error) {
      console.error("Erro ao remover item de pedido", error);
      res.status(500).json({ error: "Erro ao remover pedrido" });
    }
  }
}

export default new OrderItemController();
