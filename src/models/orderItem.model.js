import prisma from "../../prisma/prisma.js";

class OrderItemModel {
  // Buscar todos os itens de pedidos
  async findAll() {
    const orderItems = await prisma.orderItem.findMany({
      orderBy: {
        id: "asc",
      },
      include: {
        order: {
          select: {
            tableNumber: true,
            status: true,
          }
        },
        dish: {
          select: {
            name: true,
            price: true,
          }
        },
      },
    });

    return orderItems;
  }

  // Buscar um item de pedidos pelo ID
  async findById(id) {
    const orderItem = await prisma.orderItem.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        order: {
          select: {
            tableNumber: true,
            status: true,
          }
        },
        dish: {
          select: {
            name: true,
            price: true,
          }
        },
      },
    });

    return orderItem;
  }

  // Criar um novo item de pedido
  async create(orderItemData) {
    const newOrderItem = await prisma.orderItem.create({
      data: orderItemData,
    });

    return newOrderItem;
  }

  // Atualizar um item de pedido
  async update(id, orderItemData) {
    // Busca o item de pedido que será atualizado
    const updatedOrderItem = await this.findById(id);

    if (!updatedOrderItem) {
      return null;
    }

    // Atualiza o item de pedido
    await prisma.orderItem.update({
      where: {
        id: Number(id),
      },
      data: orderItemData,
    });

    return updatedOrderItem;
  }

  // Remover um item de pedido
  async delete(id) {
    // Busca o item de pedido que será removido
    const orderItem = await this.findById(id);

    if (!orderItem) {
      return null;
    }

    // Remove o item de pedido
    await prisma.orderItem.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new OrderItemModel();
