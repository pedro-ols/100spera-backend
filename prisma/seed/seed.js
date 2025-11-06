import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando o seed...");

  await prisma.category.deleteMany({});

  // Criação de casas

  const entrada = await prisma.category.create({
    data: {
      name: "Entrada",
    },
  });
  const pratos_principais = await prisma.category.create({
    data: {
      name: "Pratos Principais",
    },
  });
  const sobremesas = await prisma.category.create({
    data: {
      name: "Sobremesas",
    },
  });
  const bebidas = await prisma.category.create({
    data: {
      name: "Bebidas",
    },
  });
  const drinks = await prisma.category.create({
    data: {
      name: "drinks",
    },
  });

  // Criação de todo o resto do seed aqui

  console.log("dishs criadas. Inserindo personagens...");

  console.log(
    `Seed concluído! ${await prisma.category.count()} categorias, ${await prisma.character.count()} personagens, ${await prisma.actor.count()} atores, ${await prisma.castle.count()} castelos e ${await prisma.book.count()} livros.`
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });