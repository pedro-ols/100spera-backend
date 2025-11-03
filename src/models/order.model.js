import prisma from "../../prisma/prisma.js";

class OrderModel {
  // Buscar todas os pedidoss
  async findAll() {
    const orders = await prisma.order.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return orders;
  }

  // Buscar um pedidos pelo ID
  async findById(id) {
    const order = await prisma.order.findUnique({
      where: {
        id: Number(id)
      },
    });

    return order;
  }

  // Criar um novo pedido
  async create(order) {
    const newOrder = await prisma.order.create({
      data: order
    });

    return newOrder;
  }

  // Atualizar um pedido
  async update(id, order) {
    // Busca o pedido que será atualizado
    const updatedOrder = await this.findById(id);

    if (!updatedOrder) {
      return null;
    }

    // Atualiza o pedido
    await prisma.order.update({
      where: {
        id: Number(id),
      },
      data: order,
    });

    return updatedOrder;
  }

  // Remover um pedido
  async delete(id) {
    // Busca o pedido que será removido
    const order = await this.findById(id);

    if (!order) {
      return null;
    }

    // Remove o pedido
    await prisma.order.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new OrderModel();
