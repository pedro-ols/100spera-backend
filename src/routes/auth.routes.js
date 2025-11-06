import express from "express";
import AuthController from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.get("/", AuthController.getAllUsers);
authRouter.get("/:id", AuthController.getUserById);
authRouter.put("/:id", AuthController.updateUser);
authRouter.delete("/:id", AuthController.deleteUser);

authRouter.post("/register", AuthController.register);
authRouter.post("/login", AuthController.login);

export default authRouter;