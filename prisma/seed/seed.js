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
      name: "Principal",
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
      name: "Drinks",
    },
  });
  const combos = await prisma.category.create({
    data: {
      name: "Combos",
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
      type: "administrador",
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
      type: "administrador",
    },
  });

  console.log("mesas criadas. Inserindo pratos...");

  // Criação de pratos ( dishes )

  // ENTRADAS
const onionRings = await prisma.dish.create({
  data: {
    name: "Onion Rings Crocantes",
    description: "Anéis de cebola empanados e crocantes, servidos com molho barbecue de mel.",
    price: 22.0,
    categoryId: entrada.id,
  },
});

const batataRustica = await prisma.dish.create({
  data: {
    name: "Batata Rústica Temperada",
    description: "Batatas artesanais assadas com páprica, alecrim e alho, acompanhadas de maionese da casa.",
    price: 20.0,
    categoryId: entrada.id,
  },
});

const buffaloBites = await prisma.dish.create({
  data: {
    name: "Buffalo Chicken Bites",
    description: "Cubinhos de frango empanado ao molho buffalo picante com molho blue cheese.",
    price: 28.0,
    categoryId: entrada.id,
  },
});

const quesadillas = await prisma.dish.create({
  data: {
    name: "Mini Quesadillas Smash",
    description: "Tortillas recheadas com cheddar e carne smash desfiada, acompanhadas de sour cream.",
    price: 26.0,
    categoryId: entrada.id,
  },
});

// PRATOS PRINCIPAIS (HAMBÚRGUERES)
const classicSmash = await prisma.dish.create({
  data: {
    name: "Classic Smash Burger",
    description: "Dois discos smash de 100g com cheddar derretido, picles, cebola e molho especial da casa.",
    price: 38.0,
    categoryId: pratos_principais.id,
  },
});

const texmexFire = await prisma.dish.create({
  data: {
    name: "Tex-Mex Fire Burger",
    description: "Hambúrguer 180g com chili, cheddar, jalapeños, nachos crocantes e maionese spicy.",
    price: 42.0,
    categoryId: pratos_principais.id,
  },
});

const baconDouble = await prisma.dish.create({
  data: {
    name: "Bacon Double Crunch",
    description: "Smash duplo com cheddar, bacon crocante, cebola crispy e molho defumado.",
    price: 44.0,
    categoryId: pratos_principais.id,
  },
});

const veggieGrill = await prisma.dish.create({
  data: {
    name: "Veggie Grill Burger",
    description: "Hambúrguer vegetal grelhado com queijo prato, tomate grelhado, rúcula e maionese de ervas.",
    price: 36.0,
    categoryId: pratos_principais.id,
  },
});

  //SOBREMESAS
  const petit = await prisma.dish.create({
    data: {
      name: "Petit Gâteau",
      description: "Bolo de chocolate com recheio cremoso, servido com sorvete de creme.",
      price: 24.0,
      categoryId: sobremesas.id,
    },
  });
  const tiramisu = await prisma.dish.create({
    data: {
      name: "Tiramisù",
      description: "Clássico italiano com camadas de mascarpone e café expresso.",
      price: 26.0,
      categoryId: sobremesas.id,
    },
  });
  const cheesecake = await prisma.dish.create({
    data: {
      name: "Cheesecake de Frutas Vermelhas",
      description: "Base crocante de biscoito e cobertura artesanal de frutas vermelhas.",
      price: 25.0,
      categoryId: sobremesas.id,
    },
  });
  const pudim = await prisma.dish.create({
    data: {
      name: "pudim",
      description: "Tradicional, cremoso e com calda de caramelo artesanal.",
      price: 22.0,
      categoryId: sobremesas.id,
    },
  });
  //BEBIDAS
  const suco = await prisma.dish.create({
    data: {
      name: "Suco Natural de Laranja",
      description: "Feito com laranjas frescas, sem adição de açúcar.",
      price: 10.0,
      categoryId: bebidas.id,
    },
  });
  const refrigerante = await prisma.dish.create({
    data: {
      name: "Refrigerante",
      description: "Coca-Cola, Guaraná, Fanta ou Sprite (350ml).",
      price: 7.0,
      categoryId: bebidas.id,
    },
  });
  const agua = await prisma.dish.create({
    data: {
      name: "Àgua Mineral/com Gás",
      description: "Mineral (500ml).",
      price: 4.0,
      categoryId: bebidas.id,
    },
  });
  const limonada = await prisma.dish.create({
    data: {
      name: "Limonada Suíça",
      description: "Bebida refrescante feita com limão taiti e leite condensado.",
      price: 12.0,
      categoryId: bebidas.id,
    },
  });
  //DRINKS
  const caipirinha = await prisma.dish.create({
    data: {
      name: "Caipirinha",
      description: "Cachaça artesanal, limão e açúcar mascavo.",
      price: 18.0,
      categoryId: drinks.id,
    },
  });
  const mojito = await prisma.dish.create({
    data: {
      name: "Mojito",
      description: "Rum branco, hortelã, limão e água com gás.",
      price: 25.0,
      categoryId: drinks.id,
    },
  });
  const spritz = await prisma.dish.create({
    data: {
      name: "Aperol Spritz",
      description: "Aperol, espumante e água com gás, servido com fatia de laranja.",
      price: 30.0,
      categoryId: drinks.id,
    },
  });
  const gin = await prisma.dish.create({
    data: {
      name: "Gin Tônica Tropical",
      description: "Gin, água tônica e frutas tropicais frescas",
      price: 31.0,
      categoryId: drinks.id,
    },
  });

  //COMBOS
  const comboClassico = await prisma.dish.create({
    data: {
      name: "Combo Clássico",
      description: "Classic Smash Burger + Batata Rústica + Refrigerante",
      price: 55.0,
      categoryId: combos.id,
    },
  });

  const comboDuploBacon = await prisma.dish.create({
    data: {
      name: "Combo Duplo Bacon",
      description: "Bacon Double Crunch + Batata Rústica + Refrigerante",
      price: 62.0,
      categoryId: combos.id,
    },
  });

  const comboChickenCrispy = await prisma.dish.create({
    data: {
      name: "Combo Chicken Crispy",
      description: "Buffalo Chicken Bites + Batata Rústica + Suco Natural de Laranja",
      price: 50.0,
      categoryId: combos.id,
    },
  });

  const comboVeggie = await prisma.dish.create({
    data: {
      name: "Combo Veggie",
      description: "Veggie Grill Burger + Batata Rústica + Limonada Suíça",
      price: 58.0,
      categoryId: combos.id,
    },
  });

  const comboKids = await prisma.dish.create({
    data: {
      name: "Combo Kids",
      description: "Classic Smash Burger (metade) + Batata Rústica + Suco Natural de Laranja",
      price: 42.0,
      categoryId: combos.id,
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
      dishId: classicSmash.id,
      quantity: 1,
      observations: ""
    },
  });
  const orderItem2 = await prisma.orderItem.create({
    data: {
      orderId: pedido1.id,
      dishId: batataRustica.id,
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
      dishId: baconDouble.id,
      quantity: 1,
      observations: "bem passado"
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
      dishId: texmexFire.id,
      quantity: 3,
      observations: "sem jalapeños"
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
      dishId: veggieGrill.id,
      quantity: 1,
      observations: "sem maionese"
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
      dishId: baconDouble.id,
      quantity: 1,
      observations: "carne no ponto"
    },
  });
  const orderItem17 = await prisma.orderItem.create({
    data: {
      orderId: pedido8.id,
      dishId: onionRings.id,
      quantity: 1,
      observations: "bem crocante"
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
    dishId: buffaloBites.id,
    quantity: 2,
    observations: "bem crocante, por favor",
  },
});

const orderItem22 = await prisma.orderItem.create({
  data: {
    orderId: pedido1.id,
    dishId: classicSmash.id,
    quantity: 1,
    observations: "sem picles",
  },
});

const orderItem23 = await prisma.orderItem.create({
  data: {
    orderId: pedido2.id,
    dishId: quesadillas.id,
    quantity: 1,
    observations: "com extra de queijo",
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
    dishId: batataRustica.id,
    quantity: 1,
    observations: "bem temperada",
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
    dishId: texmexFire.id,
    quantity: 1,
    observations: "extra picante",
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
    dishId: veggieGrill.id,
    quantity: 1,
    observations: "sem queijo",
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
    dishId: onionRings.id,
    quantity: 1,
    observations: "extra crocante",
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
    dishId: buffaloBites.id,
    quantity: 1,
    observations: "sem molho blue cheese",
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
