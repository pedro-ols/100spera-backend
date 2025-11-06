import prisma from "../../prisma/prisma.js"
import bcrypt from 'bcryptjs';

class UserModel {
    async findAll() {
        const users = await prisma.user.findMany({
            orderBy: {
                id: "asc"
            }
        });

        return users;
    }

    async findById(id) {
        const user = await prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        });

        return user;
    }

    async findByAccessCode(accessCode) {
        
        const users = await prisma.user.findMany();

        for (const user of users) {
            const isMatch = await bcrypt.compare(accessCode, user.accessCode);
            if (isMatch) {
                return user;
            }
        }

        return null;
    }

    async accessCodeExists(accessCode) {
        const users = await prisma.user.findMany();

        for (const user of users) {
            const isMatch = await bcrypt.compare(accessCode, user.accessCode);
            if (isMatch) {
                return true;
            }
        }

        return false;
    }

    async create(data) {
        const user = await prisma.user.create({
            data,
        });

        return user;
    }

    async update(id, data) {
        const user = await prisma.user.update({
            where: {
                id: Number(id)
            },
            data
        });

        return user;
    }

    async delete(id) {
        await prisma.user.delete({
            where: {
                id: Number(id)
            }
        });

        return true;
    }
}

export default new UserModel()