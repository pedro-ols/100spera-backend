import prisma from "../../prisma/prisma.js";

class DishModel {
  // Buscar todas os pratoss
  async findAll() {
    const dishes = await prisma.dish.findMany({
      orderBy: {
        id: "asc",
      },
    });

    return dishes;
  }

  // Buscar um pratos pelo ID
  async findById(id) {
    const dish = await prisma.dish.findUnique({
      where: {
        id: Number(id)
      },
    });

    return dish;
  }

  // Criar um novo prato
  async create(dish) {
    const newDish = await prisma.dish.create({
      data: dish
    });

    return newDish;
  }

  // Atualizar um prato
  async update(id, dish) {
    // Busca o prato que será atualizado
    const updatedDish = await this.findById(id);

    if (!updatedDish) {
      return null;
    }

    // Atualiza o prato
    await prisma.dish.update({
      where: {
        id: Number(id),
      },
      data: dish,
    });

    return updatedDish;
  }

  // Remover um prato
  async delete(id) {
    // Busca o prato que será removido
    const dish = await this.findById(id);

    if (!dish) {
      return null;
    }

    // Remove o prato
    await prisma.dish.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new DishModel();
