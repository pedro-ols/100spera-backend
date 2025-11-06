import UserModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class AuthController {
    async getAllUsers(req, res) {
        try {
            const users = await UserModel.findAll();
            res.json(users);
        } catch (error) {
            console.error("Erro ao listar usuários:", error);
            res.status(500).json({ error: "Erro ao listar usuários" });
        }
    }

    async getUserById(req, res) {
        try {
            const { id } = req.params;
            const user = await UserModel.findById(id);

            if (!user) {
                return res.status(404).json({ error: "Usuário não encontrado" });
            }
            res.json(user);
        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
            res.status(500).json({ error: "Erro ao buscar usuário" });
        }
    }

    async register(req, res) {
        try {
            const { name, type, accessCode } = req.body;

            if (!name || !type || !accessCode) {
                return res.status(400).json({
                    error: "Os campos de nome, tipo e código de acesso são obrigatórios",
                });
            }

            const userExists = await UserModel.accessCodeExists(accessCode);
            if (userExists) {
                return res
                    .status(400)
                    .json({ error: "Código de acesso já está cadastrado" });
            }

            const hashedAccessCode = await bcrypt.hash(accessCode, 10);

            const data = {
                name,
                type,
                accessCode: hashedAccessCode,
            };

            const user = await UserModel.create(data);
            return res
                .status(201)
                .json({ message: "Usuário cadastrado com sucesso", user });
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
            res.status(500).json({ error: "Erro ao cadastrar usuário" });
        }
    }

    async login(req, res) {
        try {
            const { accessCode } = req.body;


            if (!accessCode) {
                return res
                    .status(400)
                    .json({ error: "O campo de código de acesso é obrigatório" });
            }

            const userExists = await UserModel.findByAccessCode(accessCode);

            if (!userExists) {
                return res.status(401).json({ error: "deu pau aqui Credenciais inválidas" });
            }

            const token = jwt.sign(
                {
                    id: userExists.id,
                    name: userExists.name,
                    type: userExists.type,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "24h",
                }
            );

            return res
                .status(200)
                .json({ message: "Login realizado com sucesso", token, userExists });
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            res.status(500).json({ error: "Erro ao fazer login" });
        }
    }

    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { name, type, accessCode } = req.body;

            if (!name || !type || !accessCode) {
                return res.status(400).json({
                    error: "Os campos de nome, tipo e código de acesso são obrigatórios",
                });
            }

            const userExists = await UserModel.findById(id);
            if (!userExists) {
                return res.status(404).json({ error: "Usuário não encontrado" });
            }

            const hashedAccessCode = await bcrypt.hash(accessCode, 10);

            const data = {
                name,
                type,
                accessCode: hashedAccessCode,
            };

            await UserModel.update(id, data);
            return res
                .status(200)
                .json({ message: "Usuário atualizado com sucesso" });
        } catch (error) {
            console.error("Erro ao atualizar usuário:", error);
            res.status(500).json({ error: "Erro ao atualizar usuário" });
        }
    }

    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            const userExists = await UserModel.findById(id);
            if (!userExists) {
                return res.status(404).json({ error: "Usuário não encontrado" });
            }
            await UserModel.delete(id);
            return res.status(200).json({ message: "Usuário removido com sucesso" });
        } catch (error) {
            console.error("Erro ao remover usuário:", error);
            res.status(500).json({ error: "Erro ao remover usuário" });
        }
    }
}

export default new AuthController();
