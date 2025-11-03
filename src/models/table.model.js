import prisma from "../../prisma/prisma.js";

class TableModel {
  // Buscar todas as mesas
  async findAll() {
    const tables = await prisma.table.findMany({
        orderBy: {
            number: "asc",
        },
    });

    return tables;
  }

  // Buscar uma mesa pelo ID
  async findByNumber(number) {
    const table = await prisma.table.findUnique({
      where: {
        number: Number(number),
      }
    });

    return table;
  }

  // Criar uma nova mesa
  async create(table) {
    const newTable = await prisma.table.create({
      data: table,
    });

    return newTable;
  }

  // Atualizar uma mesa
  async update(number, table) {
    // Busca a mesa que será atualizada
    const updatedTable = await this.findByNumber(number);

    if (!updatedTable) {
      return null;
    }

    // Atualiza a mesa
    await prisma.table.update({
      where: {
        number: Number(number),
      },
      data: table,
    });

    return updatedTable;
  }

  // Remover uma mesa
  async delete(number) {
    // Busca a mesa que será removida
    const table = await this.findByNumber(number);

    if (!table) {
      return null;
    }

    // Remove a mesa
    await prisma.table.delete({
      where: {
        number: Number(number),
      },
    });

    return true;
  }
}

export default new TableModel();
