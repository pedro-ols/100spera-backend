import TableModel from "../models/table.model.js";

class TableController {
  async getAllTables(req, res) {
    try {
      const tables = await TableModel.findAll();
      res.json(tables);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar mesas" });
    }
  }

  async getTableByNumber(req, res) {
    try {
      const { number } = req.params;

      const table = await TableModel.findByNumber(number);

      if (!table) {
        return res.status(404).json({ error: "Mesa não encontrada" });
      }

      res.json(table);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar mesa" });
    }
  }

  async createTable(req, res) {
    const tableData = req.body;

    try {
      const newTable = await TableModel.create(tableData);

      if (!newTable) {
        return res.status(400).json({ error: "Erro ao criar mesa" });
      }
      if (!tableData.number) {
        return res
          .status(400)
          .json({ error: "Coloque um número para a mesa" });
      }

      res.status(201).json(newTable);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar mesa" });
    }
  }

  async updatetable(req, res) {
    const { number } = req.params;

    const tableData = req.body;

    try {
      if (!(await TableModel.findByNumber(number))) {
        return res.status(404).json({ error: "Mesa não encontrada" });
      }

      const updatedTable = await TableModel.update(number, tableData);
      res.json(updatedTable);
    } catch (error) {
      console.error("Erro ao atualizar mesa:", error);
      res.status(500).json({ error: "Erro ao atualizar mesa" });
    }
  }

  async deleteTable(req, res) {
    const { number } = req.params;

    try {
      if (!(await TableModel.delete(number))) {
        return res.status(404).json({ error: "Mesa não encontrada" });
      }

      res.status(200).json({ message: "Mesa removida com sucesso" });
    } catch (error) {
      console.error("Erro ao remover table:", error);
      res.status(500).json({ error: "Erro ao remover table" });
    }
  }
}

export default new TableController();
