import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando o seed...");

  await prisma.category.deleteMany({});
  await prisma.table.deleteMany({});
  await prisma.dish.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.order.deleteMany({});

  // Criação de categorias de pratos

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

  console.log("categorias criadas. Inserindo mesas...");

  // Criação de mesas ( tables )
  const mesa_1 = await prisma.table.create({
    data: {
      number: 1,
    },
  });
  const mesa_2 = await prisma.table.create({
    data: {
      number: 2,
    },
  });
  const mesa_3 = await prisma.table.create({
    data: {
      number: 3,
    },
  });
  const mesa_4 = await prisma.table.create({
    data: {
      number: 4,
    },
  });
  const mesa_5 = await prisma.table.create({
    data: {
      number: 5,
    },
  });
  const mesa_6 = await prisma.table.create({
    data: {
      number: 6,
    },
  });
  const mesa_7 = await prisma.table.create({
    data: {
      number: 7,
    },
  });
  const mesa_8 = await prisma.table.create({
    data: {
      number: 8,
    },
  });
  const mesa_9 = await prisma.table.create({
    data: {
      number: 9,
    },
  });
  const mesa_10 = await prisma.table.create({
    data: {
      number: 10,
    },
  });
  const mesa_11 = await prisma.table.create({
    data: {
      number: 11,
    },
  });
  const mesa_12 = await prisma.table.create({
    data: {
      number: 12,
    },
  });
  const mesa_13 = await prisma.table.create({
    data: {
      number: 13,
    },
  });
  const mesa_14 = await prisma.table.create({
    data: {
      number: 14,
    },
  });
  const mesa_15 = await prisma.table.create({
    data: {
      number: 15,
    },
  });
  const mesa_16 = await prisma.table.create({
    data: {
      number: 16,
    },
  });
  const mesa_17 = await prisma.table.create({
    data: {
      number: 17,
    },
  });
  const mesa_18 = await prisma.table.create({
    data: {
      number: 18,
    },
  });
  const mesa_19 = await prisma.table.create({
    data: {
      number: 19,
    },
  });
  const mesa_20 = await prisma.table.create({
    data: {
      number: 20,
    },
  });



  console.log("mesas criadas. Inserindo pratos...");

  // Criação de pratos ( dishes )

  //ENTRADAS
  const Bruschetta = await prisma.dish.create({
    data: {
      name: "Bruschetta Tradicional",
      imageUrl: "",
      description: "Pão italiano torrado com tomate, manjericão e azeite.",
      price: 25.0,
      categoryId: entrada.id,
    },
  });
  const bolinho = await prisma.dish.create({
    data: {
      name: "Bolinho de Bacalhau",
      imageUrl: "",
      description: "Porção com seis bolinhos crocantes de bacalhau desfiado com batata e temperos especiais.",
      price: 30.0,
      categoryId: entrada.id,
    },
  });
  const Carpaccio = await prisma.dish.create({
    data: {
      name: "Carpaccio de Carne",
      imageUrl: "",
      description: "Fatias finas de carne com molho de mostarda e alcaparras.",
      price: 32.0,
      categoryId: entrada.id,
    },
  });
  const frios = await prisma.dish.create({
    data: {
      name: "Tábua de Queijos e Frios",
      imageUrl: "",
      description: "Seleção de queijos, embutidos e frutas secas.",
      price: 38.0,
      categoryId: entrada.id,
    },
  });
  //PRATOS PRINCIPAIS
  const file = await prisma.dish.create({
    data: {
      name: "Filé à Parmegiana",
      imageUrl: "",
      description: "Filé mignon empanado, molho de tomate artesanal e queijo derretido. Acompanha arroz e fritas.",
      price: 58.0,
      categoryId: pratos_principais.id,
    },
  });
  const salmao = await prisma.dish.create({
    data: {
      name: "Salmão Grelhado",
      imageUrl: "",
      description: "Salmão fresco grelhado com azeite e ervas, servido com legumes salteados.",
      price: 64.0,
      categoryId: pratos_principais.id,
    },
  });
  const risoto = await prisma.dish.create({
    data: {
      name: "Risoto de Camarão",
      imageUrl: "",
      description: "Arroz arbório cremoso com camarões salteados e toque de limão siciliano",
      price: 70.0,
      categoryId: pratos_principais.id,
    },
  });
  const penne = await prisma.dish.create({
    data: {
      name: "Penne ao Pesto de Manjericão",
      imageUrl: "",
      description: "Massa penne com molho pesto artesanal, parmesão e pinoli.",
      price: 50.0,
      categoryId: pratos_principais.id,
    },
  });
  //SOBREMESAS
  const petit = await prisma.dish.create({
    data: {
      name: "Petit Gâteau",
      imageUrl: "",
      description: "Bolo de chocolate com recheio cremoso, servido com sorvete de creme.",
      price: 24.0,
      categoryId: sobremesas.id,
    },
  });
  const tiramisu = await prisma.dish.create({
    data: {
      name: "Tiramisù",
      imageUrl: "",
      description: "Clássico italiano com camadas de mascarpone e café expresso.",
      price: 26.0,
      categoryId: sobremesas.id,
    },
  });
  const cheesecake = await prisma.dish.create({
    data: {
      name: "Cheesecake de Frutas Vermelhas",
      imageUrl: "",
      description: "Base crocante de biscoito e cobertura artesanal de frutas vermelhas.",
      price: 25.0,
      categoryId: sobremesas.id,
    },
  });
  const pudim = await prisma.dish.create({
    data: {
      name: "pudim",
      imageUrl: "",
      description: "Tradicional, cremoso e com calda de caramelo artesanal.",
      price: 22.0,
      categoryId: sobremesas.id,
    },
  });
  //BEBIDAS
  const suco = await prisma.dish.create({
    data: {
      name: "Suco Natural de Laranja",
      imageUrl: "",
      description: "Feito com laranjas frescas, sem adição de açúcar.",
      price: 10.0,
      categoryId: bebidas.id,
    },
  });
  const refrigerante = await prisma.dish.create({
    data: {
      name: "Refrigerante",
      imageUrl: "",
      description: "Coca-Cola, Guaraná, Fanta ou Sprite (350ml).",
      price: 7.0,
      categoryId: bebidas.id,
    },
  });
  const agua = await prisma.dish.create({
    data: {
      name: "Àgua Mineral/com Gás",
      imageUrl: "",
      description: "Mineral (500ml).",
      price: 4.0,
      categoryId: bebidas.id,
    },
  });
  const limonada = await prisma.dish.create({
    data: {
      name: "Limonada Suíça",
      imageUrl: "",
      description: "Bebida refrescante feita com limão taiti e leite condensado.",
      price: 12.0,
      categoryId: bebidas.id,
    },
  });
  //DRINKS
  const caipirinha = await prisma.dish.create({
    data: {
      name: "Caipirinha",
      imageUrl: "",
      description: "Cachaça artesanal, limão e açúcar mascavo.",
      price: 18.0,
      categoryId: drinks.id,
    },
  });
  const mojito = await prisma.dish.create({
    data: {
      name: "Mojito",
      imageUrl: "",
      description: "Rum branco, hortelã, limão e água com gás.",
      price: 25.0,
      categoryId: drinks.id,
    },
  });
  const spritz = await prisma.dish.create({
    data: {
      name: "Aperol Spritz",
      imageUrl: "",
      description: "Aperol, espumante e água com gás, servido com fatia de laranja.",
      price: 30.0,
      categoryId: drinks.id,
    },
  });
  const gin = await prisma.dish.create({
    data: {
      name: "Gin Tônica Tropical",
      imageUrl: "",
      description: "Gin, água tônica e frutas tropicais frescas",
      price: 31.0,
      categoryId: drinks.id,
    },
  });

  console.log("pratos criados. Inserindo usuario ...");

  // Criação de usarios

  const vitor_lira = await prisma.user.create({
    data: {
      name: "vitor sampaio",
      type: "garçom",
      accessCode: "12345"
    },
  });
  const pedro_oliveira = await prisma.user.create({
    data: {
      name: "pedro oliveira",
      type: "cozinha",
      accessCode: "12345"
    },
  });
  const vinicius_valverde = await prisma.user.create({
    data: {
      name: "vinicius valverde",
      type: "garçom",
      accessCode: "12345"
    },
  });
  const julia_martins = await prisma.user.create({
    data: {
      name: "julia martins",
      type: "cozinha",
      accessCode: "12345"
    },
  });
  const gabriela_fernanda = await prisma.user.create({
    data: {
      name: "gabriela fernanda",
      type: "caixa",
      accessCode: "12345"
    },
  });
  const giovanni_gomes = await prisma.user.create({
    data: {
      name: "giovanni gomes",
      type: "adiministrador",
      accessCode: "12345"
    },
  });

  // Criação de pedidos ( orders )

  const pedido1 = await prisma.order.create({
    data: {
      tableNumber: 1,
      userId:vinicius_valverde.id,
    },
  });
  const pedido2 = await prisma.order.create({
    data: {
      tableNumber: 2,
      userId:vinicius_valverde.id,
    },
  });
  const pedido3 = await prisma.order.create({
    data: {
      tableNumber: 3,
      userId:vinicius_valverde.id,
    },
  });
  const pedido4 = await prisma.order.create({
    data: {
      tableNumber: 4,
      userId:vinicius_valverde.id,
    },
  });
  const pedido5 = await prisma.order.create({
    data: {
      tableNumber: 5,
      userId:vinicius_valverde.id,
    },
  });
  const pedido6 = await prisma.order.create({
    data: {
      tableNumber: 6,
      userId:vitor_lira.id,
    },
  });
  const pedido7 = await prisma.order.create({
    data: {
      tableNumber: 7,
      userId:vitor_lira.id,
    },
  });
  const pedido8 = await prisma.order.create({
    data: {
      tableNumber: 8,
      userId:vitor_lira.id,
    },
  });
  const pedido9 = await prisma.order.create({
    data: {
      tableNumber: 9,
      userId:vitor_lira.id,
    },
  });
  const pedido10 = await prisma.order.create({
    data: {
      tableNumber: 10,
      userId:vitor_lira.id,
    },
  });

  // criação de itens de pedido ( orderItems )

  

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