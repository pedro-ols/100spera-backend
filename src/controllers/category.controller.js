import CategoryModel from "../models/category.model.js";

class CategoryController {
  async getAllCategories(req, res) {
    try {
      const categories = await CategoryModel.findAll();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar categorias" });
    }
  }

  async getCategoryById(req, res) {
    try {
      const { id } = req.params;

      const category = await CategoryModel.findById(id);

      if (!category) {
        return res.status(404).json({ error: "Categoria não encontrada" });
      }

      res.json(category);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar categoria" });
    }
  }

  async createCategory(req, res) {
    const categoryData = req.body;

    try {
      if (!categoryData.name) {
        return res
          .status(400)
          .json({ error: "Coloque um nome para a categoria" });
          
      }

      const newCategory = await CategoryModel.create(categoryData);

      if (!newCategory) {
        return res.status(400).json({ error: "Erro ao criar categoria" });
      }

      res.status(201).json(newCategory);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar categoria" });
    }
  }

  async updateCategory(req, res) {
    const { id } = req.params;

    const categoryData = req.body;

    try {
      if (!(await CategoryModel.findById(id))) {
        return res.status(404).json({ error: "Categoria não encontrada" });
      }
      if (!categoryData.name) {
        return res
          .status(400)
          .json({ error: "Coloque um nome para a categoria" });
      }
      
      const updatedCategory = await CategoryModel.update(id, categoryData);
      res.json(updatedCategory);
    } catch (error) {
      console.error("Erro ao atualizar categoria:", error);
      res.status(500).json({ error: "Erro ao atualizar categoria" });
    }
  }

  async deleteCategory(req, res) {
    const { id } = req.params;

    try {
      if (!(await CategoryModel.delete(id))) {
        return res.status(404).json({ error: "Categoria não encontrada" });
      }

      res.status(200).json({ message: "Categoria removida com sucesso" });
    } catch (error) {
      console.error("Erro ao remover Category:", error);
      res.status(500).json({ error: "Erro ao remover Category" });
    }
  }
}

export default new CategoryController();
