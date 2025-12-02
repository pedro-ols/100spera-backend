import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const saltRounds = 10;

async function main() {
  console.log("Iniciando o seed...");

  await prisma.category.deleteMany({});
  await prisma.table.deleteMany({});
  await prisma.dish.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.order.deleteMany({});
  await prisma.orderItem.deleteMany({});

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

 // Criação de usuários ( users )
  const gabriela_fernanda =  await prisma.user.create({
    data: {
      name: "gabriela_fernanda",
      accessCode: await bcrypt.hash('admin123', saltRounds),
      type: "admin",
    },
  });

  const giovanni_goncalves =  await prisma.user.create({
    data: {
      name: "giovanni_gonçalves",
      accessCode: await bcrypt.hash('caixa123', saltRounds),
      type: "caixa",
    },
  });

  const julia_martins =  await prisma.user.create({
    data: {
      name: "julia_martins",
      accessCode: await bcrypt.hash('cozinha123', saltRounds),
      type: "cozinha",
    },
  });

  const pedro_oliveira =  await prisma.user.create({
    data: {
      name: "pedro_oliveira",
      accessCode: await bcrypt.hash('cozinha123', saltRounds),
      type: "cozinha",
    },
  });

  const vitor_lira =  await prisma.user.create({
    data: {
      name: "vitor_lira",
      accessCode: await bcrypt.hash('garcom123', saltRounds),
      type: "garcom",
    },
  });

  const vinicius_valverde =  await prisma.user.create({
    data: {
      name: "vinicius_valverde",
      accessCode: await bcrypt.hash('admin456', saltRounds),
      type: "admin",
    },
  });

  console.log("mesas criadas. Inserindo pratos...");

  // Criação de pratos ( dishes )

  //ENTRADAS
  const Bruschetta = await prisma.dish.create({
    data: {
      name: "Bruschetta Tradicional",
      imageUrl: "https://i.imgur.com/DH1IKZi.jpeg",
      description: "Pão italiano torrado com tomate, manjericão e azeite.",
      price: 25.0,
      categoryId: entrada.id,
    },
  });
  const bolinho = await prisma.dish.create({
    data: {
      name: "Bolinho de Bacalhau",
      imageUrl: "https://i.imgur.com/5stwFwf.jpeg",
      description: "Porção com seis bolinhos crocantes de bacalhau desfiado com batata e temperos especiais.",
      price: 30.0,
      categoryId: entrada.id,
    },
  });
  const Carpaccio = await prisma.dish.create({
    data: {
      name: "Carpaccio de Carne",
      imageUrl: "https://i.imgur.com/VW8oM6D.jpeg",
      description: "Fatias finas de carne com molho de mostarda e alcaparras.",
      price: 32.0,
      categoryId: entrada.id,
    },
  });
  const frios = await prisma.dish.create({
    data: {
      name: "Tábua de Queijos e Frios",
      imageUrl: "https://i.imgur.com/Hm9W1nb.jpeg",
      description: "Seleção de queijos, embutidos e frutas secas.",
      price: 38.0,
      categoryId: entrada.id,
    },
  });
  //PRATOS PRINCIPAIS
  const file = await prisma.dish.create({
    data: {
      name: "Filé à Parmegiana",
      imageUrl: "https://i.imgur.com/y8lsQyk.jpeg",
      description: "Filé mignon empanado, molho de tomate artesanal e queijo derretido. Acompanha arroz e fritas.",
      price: 58.0,
      categoryId: pratos_principais.id,
    },
  });
  const salmao = await prisma.dish.create({
    data: {
      name: "Salmão Grelhado",
      imageUrl: "https://i.imgur.com/fwiB7Ay.jpeg",
      description: "Salmão fresco grelhado com azeite e ervas, servido com legumes salteados.",
      price: 64.0,
      categoryId: pratos_principais.id,
    },
  });
  const risoto = await prisma.dish.create({
    data: {
      name: "Risoto de Camarão",
      imageUrl: "https://i.imgur.com/dfdcAb4.jpeg",
      description: "Arroz arbório cremoso com camarões salteados e toque de limão siciliano",
      price: 70.0,
      categoryId: pratos_principais.id,
    },
  });
  const penne = await prisma.dish.create({
    data: {
      name: "Penne ao Pesto de Manjericão",
      imageUrl: "https://i.imgur.com/E8yjktO.jpeg",
      description: "Massa penne com molho pesto artesanal, parmesão e pinoli.",
      price: 50.0,
      categoryId: pratos_principais.id,
    },
  });
  //SOBREMESAS
  const petit = await prisma.dish.create({
    data: {
      name: "Petit Gâteau",
      imageUrl: "https://i.imgur.com/VdaiC1B.jpeg",
      description: "Bolo de chocolate com recheio cremoso, servido com sorvete de creme.",
      price: 24.0,
      categoryId: sobremesas.id,
    },
  });
  const tiramisu = await prisma.dish.create({
    data: {
      name: "Tiramisù",
      imageUrl: "https://i.imgur.com/GlfBlvE.jpeg",
      description: "Clássico italiano com camadas de mascarpone e café expresso.",
      price: 26.0,
      categoryId: sobremesas.id,
    },
  });
  const cheesecake = await prisma.dish.create({
    data: {
      name: "Cheesecake de Frutas Vermelhas",
      imageUrl: "https://i.imgur.com/RVRNcoM.jpeg",
      description: "Base crocante de biscoito e cobertura artesanal de frutas vermelhas.",
      price: 25.0,
      categoryId: sobremesas.id,
    },
  });
  const pudim = await prisma.dish.create({
    data: {
      name: "pudim",
      imageUrl: "https://i.imgur.com/zKF5tzF.jpeg",
      description: "Tradicional, cremoso e com calda de caramelo artesanal.",
      price: 22.0,
      categoryId: sobremesas.id,
    },
  });
  //BEBIDAS
  const suco = await prisma.dish.create({
    data: {
      name: "Suco Natural de Laranja",
      imageUrl: "https://i.imgur.com/xrB8NcJ.jpeg",
      description: "Feito com laranjas frescas, sem adição de açúcar.",
      price: 10.0,
      categoryId: bebidas.id,
    },
  });
  const refrigerante = await prisma.dish.create({
    data: {
      name: "Refrigerante",
      imageUrl: "https://i.imgur.com/fPlwbZ8.jpeg",
      description: "Coca-Cola, Guaraná, Fanta ou Sprite (350ml).",
      price: 7.0,
      categoryId: bebidas.id,
    },
  });
  const agua = await prisma.dish.create({
    data: {
      name: "Àgua Mineral/com Gás",
      imageUrl: "https://i.imgur.com/2JIe3lO.jpeg",
      description: "Mineral (500ml).",
      price: 4.0,
      categoryId: bebidas.id,
    },
  });
  const limonada = await prisma.dish.create({
    data: {
      name: "Limonada Suíça",
      imageUrl: "https://i.imgur.com/hKdkX2m.jpeg",
      description: "Bebida refrescante feita com limão taiti e leite condensado.",
      price: 12.0,
      categoryId: bebidas.id,
    },
  });
  //DRINKS
  const caipirinha = await prisma.dish.create({
    data: {
      name: "Caipirinha",
      imageUrl: "https://i.imgur.com/gauFRdy.jpeg",
      description: "Cachaça artesanal, limão e açúcar mascavo.",
      price: 18.0,
      categoryId: drinks.id,
    },
  });
  const mojito = await prisma.dish.create({
    data: {
      name: "Mojito",
      imageUrl: "https://i.imgur.com/Xbv7guA.jpeg",
      description: "Rum branco, hortelã, limão e água com gás.",
      price: 25.0,
      categoryId: drinks.id,
    },
  });
  const spritz = await prisma.dish.create({
    data: {
      name: "Aperol Spritz",
      imageUrl: "https://i.imgur.com/ZuZXXBP.jpeg",
      description: "Aperol, espumante e água com gás, servido com fatia de laranja.",
      price: 30.0,
      categoryId: drinks.id,
    },
  });
  const gin = await prisma.dish.create({
    data: {
      name: "Gin Tônica Tropical",
      imageUrl: "https://i.imgur.com/NbpTr0F.jpeg",
      description: "Gin, água tônica e frutas tropicais frescas",
      price: 31.0,
      categoryId: drinks.id,
    },
  });

  console.log("pratos criados. Inserindo usuario ...");

  // Criação de pedidos ( orders )

  const pedido1 = await prisma.order.create({
    data: {
      tableNumber: 1,
      userId: vinicius_valverde.id,
    },
  });
  const pedido2 = await prisma.order.create({
    data: {
      tableNumber: 2,
      userId: vinicius_valverde.id,
    },
  });
  const pedido3 = await prisma.order.create({
    data: {
      tableNumber: 3,
      userId: vinicius_valverde.id,
    },
  });
  const pedido4 = await prisma.order.create({
    data: {
      tableNumber: 4,
      userId: vinicius_valverde.id,
    },
  });
  const pedido5 = await prisma.order.create({
    data: {
      tableNumber: 5,
      userId: vinicius_valverde.id,
    },
  });
  const pedido6 = await prisma.order.create({
    data: {
      tableNumber: 6,
      userId: vitor_lira.id,
    },
  });
  const pedido7 = await prisma.order.create({
    data: {
      tableNumber: 7,
      userId: vitor_lira.id,
    },
  });
  const pedido8 = await prisma.order.create({
    data: {
      tableNumber: 8,
      userId: vitor_lira.id,
    },
  });
  const pedido9 = await prisma.order.create({
    data: {
      tableNumber: 9,
      userId: vitor_lira.id,
    },
  });
  const pedido10 = await prisma.order.create({
    data: {
      tableNumber: 10,
      userId: vitor_lira.id,
    },
  });

  // criação de itens de pedido ( orderItems )

  const orderItem1 = await prisma.orderItem.create({
    data: {
      orderId: pedido1.id,
      dishId: frios.id,
      quantity: 1,
      observations: ""
    },
  });
  const orderItem2 = await prisma.orderItem.create({
    data: {
      orderId: pedido1.id,
      dishId: risoto.id,
      quantity: 2,
      observations: ""
    },
  });
  const orderItem3 = await prisma.orderItem.create({
    data: {
      orderId: pedido1.id,
      dishId: agua.id,
      quantity: 1,
      observations: ""
    },
  });
  const orderItem4 = await prisma.orderItem.create({
    data: {
      orderId: pedido2.id,
      dishId: caipirinha.id,
      quantity: 1,
      observations: ""
    },
  });
  const orderItem5 = await prisma.orderItem.create({
    data: {
      orderId: pedido2.id,
      dishId: file.id,
      quantity: 1,
      observations: "carne mal passada"
    },
  });
  const orderItem6 = await prisma.orderItem.create({
    data: {
      orderId: pedido2.id,
      dishId: cheesecake.id,
      quantity: 1,
      observations: ""
    },
  });
  const orderItem7 = await prisma.orderItem.create({
    data: {
      orderId: pedido3.id,
      dishId: salmao.id,
      quantity: 3,
      observations: "mais assado"
    },
  });
  const orderItem8 = await prisma.orderItem.create({
    data: {
      orderId: pedido3.id,
      dishId: limonada.id,
      quantity: 3,
      observations: "sem leite condensado"
    },
  });
  const orderItem9 = await prisma.orderItem.create({
    data: {
      orderId: pedido3.id,
      dishId: tiramisu.id,
      quantity: 4,
      observations: ""
    },
  });
  const orderItem10 = await prisma.orderItem.create({
    data: {
      orderId: pedido4.id,
      dishId: penne.id,
      quantity: 1,
      observations: "sem molho de tomate"
    },
  });
  const orderItem11 = await prisma.orderItem.create({
    data: {
      orderId: pedido4.id,
      dishId: pudim.id,
      quantity: 1,
      observations: ""
    },
  });
  const orderItem12 = await prisma.orderItem.create({
    data: {
      orderId: pedido4.id,
      dishId: refrigerante.id,
      quantity: 2,
      observations: ""
    },
  });
  const orderItem13 = await prisma.orderItem.create({
    data: {
      orderId: pedido5.id,
      dishId: mojito.id,
      quantity: 2,
      observations: ""
    },
  });
  const orderItem14 = await prisma.orderItem.create({
    data: {
      orderId: pedido6.id,
      dishId: spritz.id,
      quantity: 3,
      observations: ""
    },
  });
  const orderItem15 = await prisma.orderItem.create({
    data: {
      orderId: pedido7.id,
      dishId: agua.id,
      quantity: 1,
      observations: ""
    },
  });
  const orderItem16 = await prisma.orderItem.create({
    data: {
      orderId: pedido7.id,
      dishId: file.id,
      quantity: 1,
      observations: "carne no ponto "
    },
  });
  const orderItem17 = await prisma.orderItem.create({
    data: {
      orderId: pedido8.id,
      dishId: frios.id,
      quantity: 1,
      observations: "sem azeitonas"
    },
  });
  const orderItem18 = await prisma.orderItem.create({
    data: {
      orderId: pedido8.id,
      dishId: gin.id,
      quantity: 1,
      observations: "mais frutas"
    },
  });
  const orderItem19 = await prisma.orderItem.create({
    data: {
      orderId: pedido9.id,
      dishId: caipirinha.id,
      quantity: 2,
      observations: "sem gelo por favor"
    },
  });
  const orderItem20 = await prisma.orderItem.create({
    data: {
      orderId: pedido10.id,
      dishId: petit.id,
      quantity: 1,
      observations: "bolo mais quente"
    },
  });
  const orderItem21 = await prisma.orderItem.create({
  data: {
    orderId: pedido1.id,
    dishId: bolinho.id,
    quantity: 2,
    observations: "bem crocante, por favor",
  },
});

const orderItem22 = await prisma.orderItem.create({
  data: {
    orderId: pedido1.id,
    dishId: salmao.id,
    quantity: 1,
    observations: "sem legumes, substituir por purê de batata",
  },
});

const orderItem23 = await prisma.orderItem.create({
  data: {
    orderId: pedido2.id,
    dishId: risoto.id,
    quantity: 1,
    observations: "com camarões extras",
  },
});

const orderItem24 = await prisma.orderItem.create({
  data: {
    orderId: pedido2.id,
    dishId: refrigerante.id,
    quantity: 2,
    observations: "Coca-Cola zero",
  },
});

const orderItem25 = await prisma.orderItem.create({
  data: {
    orderId: pedido3.id,
    dishId: Carpaccio.id,
    quantity: 1,
    observations: "sem alcaparras",
  },
});

const orderItem26 = await prisma.orderItem.create({
  data: {
    orderId: pedido3.id,
    dishId: gin.id,
    quantity: 1,
    observations: "com mais frutas tropicais",
  },
});

const orderItem27 = await prisma.orderItem.create({
  data: {
    orderId: pedido4.id,
    dishId: file.id,
    quantity: 1,
    observations: "com arroz integral e molho separado",
  },
});

const orderItem28 = await prisma.orderItem.create({
  data: {
    orderId: pedido4.id,
    dishId: suco.id,
    quantity: 1,
    observations: "sem gelo",
  },
});

const orderItem29 = await prisma.orderItem.create({
  data: {
    orderId: pedido5.id,
    dishId: penne.id,
    quantity: 1,
    observations: "adicionar frango grelhado",
  },
});

const orderItem30 = await prisma.orderItem.create({
  data: {
    orderId: pedido5.id,
    dishId: caipirinha.id,
    quantity: 1,
    observations: "com açúcar normal, não mascavo",
  },
});

const orderItem31 = await prisma.orderItem.create({
  data: {
    orderId: pedido6.id,
    dishId: cheesecake.id,
    quantity: 1,
    observations: "sem calda, servir puro",
  },
});

const orderItem32 = await prisma.orderItem.create({
  data: {
    orderId: pedido6.id,
    dishId: limonada.id,
    quantity: 1,
    observations: "bem gelada",
  },
});

const orderItem33 = await prisma.orderItem.create({
  data: {
    orderId: pedido7.id,
    dishId: frios.id,
    quantity: 1,
    observations: "acrescentar presunto cru",
  },
});

const orderItem34 = await prisma.orderItem.create({
  data: {
    orderId: pedido7.id,
    dishId: pudim.id,
    quantity: 1,
    observations: "com calda extra",
  },
});

const orderItem35 = await prisma.orderItem.create({
  data: {
    orderId: pedido8.id,
    dishId: tiramisu.id,
    quantity: 1,
    observations: "com cacau extra por cima",
  },
});

const orderItem36 = await prisma.orderItem.create({
  data: {
    orderId: pedido8.id,
    dishId: spritz.id,
    quantity: 1,
    observations: "sem gelo, mais espumante",
  },
});

const orderItem37 = await prisma.orderItem.create({
  data: {
    orderId: pedido9.id,
    dishId: Bruschetta.id,
    quantity: 1,
    observations: "sem alho",
  },
});

const orderItem38 = await prisma.orderItem.create({
  data: {
    orderId: pedido9.id,
    dishId: agua.id,
    quantity: 1,
    observations: "com gás",
  },
});


  console.log(
    `Seed concluído! ${await prisma.category.count()} categorias, ${await prisma.table.count()} mesas, ${await prisma.dish.count()} pratos, ${await prisma.order.count()} pedidos, ${await prisma.user.count()} usuarios, ${await prisma.orderItem.count()} itens de pedido.`
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