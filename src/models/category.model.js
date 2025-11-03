import prisma from "../../prisma/prisma.js";

class CategoryModel {
  // Buscar todas as categorias
  async findAll() {
    const categories = await prisma.category.findMany({
      orderBy: {
       id: "asc",
      },
      include: {
        dishes: {
          select: {
            id: true,
            name: true,
          }
        },
      }
    });

    return categories;
  }

  // Buscar uma categoria pelo ID
  async findById(id) {
    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        dishes: {
          select: {
            id: true,
            name: true,
          }
        },
      }
    });

    return category;
  }

  // Criar uma nova categoria
  async create(category) {
    const newCategory = await prisma.category.create({
      data: category,
    });

    return newCategory;
  }

  // Atualizar uma categoria
  async update(id, category) {
    // Busca a categoria que será atualizada
    const updatedCategory = await this.findById(id);

    if (!updatedCategory) {
      return null;
    }

    // Atualiza a categoria
    await prisma.category.update({
      where: {
        id: Number(id),
      },
      data: category,
    });

    return updatedCategory;
  }

  // Remover uma categoria
  async delete(id) {
    // Busca a categoria que será removida
    const category = await this.findById(id);

    if (!category) {
      return null;
    }

    // Remove a categoria
    await prisma.category.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new CategoryModel();
