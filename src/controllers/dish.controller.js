import DishModel from "../models/dish.model.js";

class DishController {
  async getAllDishes(req, res) {
    try {
      const dishes = await DishModel.findAll();
      res.json(dishes);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar pratos" });
    }
  }

  async getDishById(req, res) {
    try {
      const { id } = req.params;

      const dish = await DishModel.findById(id);

      if (!dish) {
        return res.status(404).json({ error: "Prato não encontrado" });
      }

      res.json(dish);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar prato" });
    }
  }

  async createDish(req, res) {
    const dishData = req.body;

    try {
      if (!dishData.name || !dishData.price || !dishData.categoryId) {
        return res
          .status(400)
          .json({ error: "Coloque um nome, preço e categoria para o prato" });
      }

      const newDish = await DishModel.create(dishData);

      if (!newDish) {
        return res.status(400).json({ error: "Erro ao criar prato" });
      }

      res.status(201).json(newDish);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar prato" });
    }
  }

  async updateDish(req, res) {
    const { id } = req.params;

    const dishData = req.body;

    try {
      if (!(await DishModel.findById(id))) {
        return res.status(404).json({ error: "prato não encontrado" });
      }

      if (!dishData.name || !dishData.price || !dishData.categoryId) {
        return res
          .status(400)
          .json({ error: "Coloque um nome, preço e categoria para o prato" });
      }

      const updatedDish = await DishModel.update(id, dishData);
      res.json(updatedDish);
    } catch (error) {
      console.error("Erro ao atualizar prato:", error);
      res.status(500).json({ error: "Erro ao atualizar prato" });
    }
  }

  // DELETE /api/dishes/:id
  async deleteDish(req, res) {
    const { id } = req.params;

    try {
      if (!(await DishModel.delete(id))) {
        return res.status(404).json({ error: "prato não encontrado" });
      }

      res.status(200).json({ message: "prato removido com sucesso" });
    } catch (error) {
      console.error("Erro ao remover Dish:", error);
      res.status(500).json({ error: "Erro ao remover Dish" });
    }
  }
}

export default new DishController();
