import express from "express";
import AuthController from "../controllers/authController.js";

const authRouter = express.Router();

// Rotas específicas devem vir ANTES das rotas com parâmetros
authRouter.post("/register", AuthController.register);
authRouter.post("/login", AuthController.login);
authRouter.post("/reset-code/:id", AuthController.resetAccessCode);

// Rotas com parâmetros genéricos
authRouter.get("/", AuthController.getAllUsers);
authRouter.get("/:id", AuthController.getUserById);
authRouter.put("/:id", AuthController.updateUser);
authRouter.delete("/:id", AuthController.deleteUser);

export default authRouter;