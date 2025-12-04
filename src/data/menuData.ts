export interface MenuItem {
  title: string;
  items: string[];
  notes?: string[];
}

export interface Menu {
  id: string;
  title: string;
  sections: MenuItem[];
}

// Cardápios baseados nas instruções do usuário
const BEBIDAS_COMUNS: MenuItem = {
  title: "🍸 Bebidas (Comuns a todos)",
  items: [
    "Coca-Cola comum e zero",
    "Guaraná comum e zero",
    "Sucos naturais",
    "Água mineral e com gás",
  ],
  notes: [
    "Heineken, Original e Amstel sob consulta.",
    "Taxas para vinhos e whisky sob consulta.",
  ],
};

const COQUETEL_BASE: MenuItem = {
  title: "🥗 Coquetel (Base Geral)",
  items: [
    "Até 12 tipos de salgados",
    "Até 7 tipos de doces (5 unid. por pessoa)",
    "1 tipo de bombom",
  ],
  notes: [
    "Bolos (clássicos): Abacaxi c/ coco, Coco, Coco c/ ameixa, Chocolate crocante p/b, Chocolate, Dois amores, Prestígio.",
    "Acréscimo em “Chocolate c/ morango” e “Morango com chantilly”.",
  ],
};

// Versão atualizada do cardápio de coquetel com doces ampliados para menus específicos (infantil, casamento e 15 anos)
const COQUETEL_BASE_ATUALIZADO: MenuItem = {
  title: "🥗 Coquetel (Base Geral)",
  items: [
    "Até 12 tipos de salgados",
    "Doces (Escolha 15 tipos +, 5 unid. por pessoa) – Seleção de 8 doces: Brigadeiro, Beijinho, Cajuzinho, Moranguinho, Olho de Sogra, Mini trufa, Mini torta de limão, Mini torta de maracujá, Mini torta de morango, Mini pudim, Mini mousse de chocolate, Mini mousse de maracujá, Mini mousse de limão.",
    "1 tipo de bombom",
  ],
  notes: [
    "Bolos (clássicos): Abacaxi c/ coco, Coco, Coco c/ ameixa, Chocolate crocante p/b, Chocolate, Dois amores, Prestígio.",
    "Acréscimo em “Chocolate c/ morango” e “Morango com chantilly”.",
  ],
};

const CHURRASCO: MenuItem = {
  title: "🥩 Churrasco",
  items: [
    "Carnes (cliente escolhe): Boi (picanha, fraldinha, alcatra, ancho), Suíno (costelinha, lombo, panceta), Frango (tulipa, coração, espetinho).",
    "Acompanhamentos (a definir com o cliente).",
  ],
  notes: [
    "O cliente escolhe os cortes.",
    "Quantidades por número de convidados.",
  ],
};

const BRUNCH_CAFE: MenuItem = {
  title: "️ Brunch / Café da Manhã",
  items: [
    "Mesas de Café (bolos, pães, frios, mini-sanduíches, salada de frutas, biscoitos salgados/doce, manteiga/geleia/requeijão/granola/mel).",
    "Prato quente (penne 4 queijos, napolitano ou mexidinho).",
  ],
  notes: [
    "Até 6 tipos de salgados.",
    "7 tipos de doces (5 un./pessoa).",
    "1 bombom.",
    "Bolos conforme o coquetel.",
  ],
};

const FESTA_KIDS: MenuItem = {
  title: " Festa Kids",
  items: [
    "Kit lanche: pão de queijo, mini-pizza, pastel carne/queijo, batata frita.",
    "Aparador: sucos, pipoca, chips, pão de queijo, pralinê, casquinha doce.",
  ],
  notes: [
    "Cardápio aplicável a eventos infantis.",
  ],
};

const ALMOCO_JANTAR_BASE: MenuItem = {
  title: " Almoço ou Jantar (Serviço Base)",
  items: [
    "Serviço inclui salgados servidos à vontade.",
    "Reutiliza os mesmos salgados do brunch.",
  ],
  notes: [
    "Três opções de contratação (valores apenas internos, não exibir no site): Massa com 2 molhos (sugo e bechamel), Mexidão ou Strogonoff de frango, Gourmet show de massas ao vivo, Almoço completo com 2 carnes.",
  ],
};

const CARDAPIO_1: MenuItem = {
  title: "️ Cardápio 1",
  items: [
    "Arroz branco, arroz com alho e brócolis",
    "Lombo ao molho de ervas finas",
    "Coq au Vin",
    "Banana à moda holandesa",
    "Batata palha",
    "Salada especial",
  ],
};

const CARDAPIO_2: MenuItem = {
  title: "️ Cardápio 2",
  items: [
    "Arroz branco, arroz com ervas e passas",
    "Medalhão de frango ao maracujá",
    "Filé ao molho madeira",
    "Penne 4 queijos",
    "Salada tropical",
  ],
};

const CARDAPIO_3: MenuItem = {
  title: "️ Cardápio 3",
  items: [
    "Arroz branco, arroz com amêndoas",
    "Medalhão de filé",
    "Coq au Vin",
    "Rondelli de espinafre",
    "Salada gourmet",
  ],
};

const CARDAPIO_4: MenuItem = {
  title: "️ Cardápio 4",
  items: [
    "Arroz branco, arroz com castanhas",
    "Frango à Indiana",
    "Filé ao molho funghi",
    "Penne napolitano",
    "Salada mediterrânea",
  ],
};

// --- NOVOS CARDÁPIOS COMPLETOS ---

const CARDAPIO_ANIVERSARIO_ADULTO_COMPLETO: MenuItem[] = [
  {
    title: "🟫 Entradas simples e gostosas",
    items: [
      "Torradinhas crocantes com patê de frango",
      "Pão de alho artesanal",
      "Mini sanduíches variados (frango, presunto e queijo, vegetariano)",
      "Tábua simples com queijo, presunto e azeitonas",
    ],
  },
  {
    title: "🟫 Salgados Tradicionais + Gourmet Acessíveis",
    items: [
      "Coxinha tradicional",
      "Coxinha com catupiry",
      "Bolinha de queijo",
      "Kibe tradicional",
      "Pastelzinho de carne",
      "Pastelzinho de queijo",
      "Enroladinho de salsicha",
      "Empadinha de frango",
      "Mini pizza",
      "Mini quibe com catupiry",
      "Mini bolinho de mandioca com carne de sol (opcional)",
    ],
  },
  {
    title: "🟫 Finger Foods Acessíveis (opções quentes)",
    items: [
      "Mini escondidinho de frango",
      "Mini escondidinho de carne",
      "Penne ao molho branco",
      "Penne ao molho vermelho",
      "Mini porção de batata com bacon",
      "Mini arroz com frango cremoso (opcional)",
    ],
  },
  {
    title: "🟫 Doces Simples & Acessíveis",
    items: [
      "Brigadeiro tradicional",
      "Brigadeiro de ninho",
      "Beijinho",
      "Cajuzinho",
      "Casadinho",
      "Mini brownie simples",
    ],
  },
  {
    title: "🟫 Bebidas",
    items: [
      "Refrigerantes",
      "Sucos",
      "Água com e sem gás",
      "Drinks fornecidos pelo cliente (opcional), servidos pela equipe",
    ],
  },
  {
    title: "🟫 Serviço",
    items: [
      "Equipe completa",
      "Montagem da mesa",
      "Aquecimento dos itens",
      "Praticidade e atendimento cuidadoso",
    ],
  },
];

const CARDAPIO_CONFRATERNIZACAO_CORPORATIVA_COMPLETO: MenuItem[] = [
  {
    title: "🔶 Entradas",
    items: [
      "Pães variados",
      "Patês simples (alho, frango, ervas)",
      "Tábua básica de frios (queijo + presunto + salame simples)",
      "Mix de amendoins e castanha de caju",
    ],
  },
  {
    title: "🔶 Salgados Corporativos",
    items: [
      "Coxinha",
      "Bolinha de queijo",
      "Kibe",
      "Pastel de carne",
      "Pastel de queijo",
      "Empadinha de frango",
      "Mini quibe com catupiry",
      "Enroladinho de salsicha",
      "Mini pão de queijo (muito bom para eventos de empresa)",
    ],
  },
  {
    title: "🔶 Mini Porções – Corporativo Popular",
    items: [
      "Penne ao molho branco",
      "Penne ao sugo",
      "Escondidinho de frango",
      "Escondidinho de carne",
      "Arroz com frango cremoso",
      "Mini nuggets empanados (para eventos informais)",
    ],
  },
  {
    title: "🔶 Doces Populares",
    items: [
      "Brigadeiro",
      "Beijinho",
      "Mini brownie",
      "Cajuzinho",
      "Trufa simples",
    ],
  },
  {
    title: "🔶 Bebidas",
    items: [
      "Refrigerantes",
      "Água",
      "Sucos",
      "Café (muito comum em eventos empresariais)",
    ],
  },
  {
    title: "🔶 Serviços",
    items: [
      "Atendimento discreto",
      "Reposição constante",
      "Montagem e finalização",
      "Evento simples, bonito e eficiente",
    ],
  },
];

// --- LISTA PRINCIPAL DE CARDÁPIOS ---

export const MENU_DATA: Menu[] = [
  {
    id: "casamento",
    title: "Cardápio Casamento (Coquetel Dark Elegante)",
    sections: [
      BEBIDAS_COMUNS,
      COQUETEL_BASE_ATUALIZADO,
      {
        title: "Observação",
        items: ["Este é um cardápio base de coquetel. Detalhes e personalizações são definidos em conjunto com o cliente."],
      },
    ],
  },
  {
    id: "casamento2",
    title: "Cardápio Casamento 2 (Almoço/Jantar)",
    sections: [
      BEBIDAS_COMUNS,
      ALMOCO_JANTAR_BASE,
      CARDAPIO_1,
      CARDAPIO_2,
      CARDAPIO_3,
      CARDAPIO_4,
    ],
  },
  {
    id: "15anos",
    title: "Cardápio 15 Anos (Coquetel Dark Elegante)",
    sections: [
      BEBIDAS_COMUNS,
      COQUETEL_BASE_ATUALIZADO,
      {
        title: "Observação",
        items: ["Este é um cardápio base de coquetel. Detalhes e personalizações são definidos em conjunto com o cliente."],
      },
    ],
  },
  {
    id: "adulto",
    title: "Cardápio Aniversário Adulto",
    sections: CARDAPIO_ANIVERSARIO_ADULTO_COMPLETO,
  },
  {
    id: "infantil",
    title: "Cardápio Festa Infantil",
    sections: [
      BEBIDAS_COMUNS,
      FESTA_KIDS,
      COQUETEL_BASE_ATUALIZADO,
    ],
  },
  {
    id: "churrasco",
    title: "Cardápio Churrasco",
    sections: [
      BEBIDAS_COMUNS,
      CHURRASCO,
    ],
  },
  {
    id: "boteco",
    title: "Cardápio Comida de Boteco",
    sections: [
      BEBIDAS_COMUNS,
      {
        title: "Salgados (Escolha 12 tipos, servidos à vontade)",
        items: [
          "Seleção de 12 Salgados: Uma seleção especial de 12 opções entre Frios, Assados, Fritos e Petit Gourmet, escolhidas entre as mais de 60 opções do nosso cardápio completo. (Exemplos: Coxinha, Bolinho de Queijo, Mini Quiche, Canapé, Mini Sanduíche, etc.)",
        ],
      },
      {
        title: "Doces (Escolha entre 15 tipos +, 05un por pessoa)",
        items: [
          "Seleção de 4 Doces: Escolha 4 tipos entre as opções mais populares: Brigadeiro, Beijinho, Cajuzinho, Moranguinho, Olho de Sogra, Mini trufa, Mini torta de limão, Mini torta de maracujá, Mini torta de morango, Mini pudim, Mini mousse de chocolate, Mini mousse de maracujá, Mini mousse de limão.",
        ],
      },
      {
        title: "Observação",
        items: [
          "O cardápio de boteco inclui petiscos com apresentação sofisticada. Detalhes são definidos em conjunto com o cliente.",
        ],
      },
    ],
  },
  {
    id: "confraternizacao-corporativa",
    title: "Cardápio Confraternização Corporativa",
    sections: CARDAPIO_CONFRATERNIZACAO_CORPORATIVA_COMPLETO,
  },
  {
    id: "empresas",
    title: "Cardápio Eventos Corporativos",
    sections: [
      BEBIDAS_COMUNS,
      BRUNCH_CAFE,
      ALMOCO_JANTAR_BASE,
      {
        title: "Observação",
        items: ["Oferecemos opções de Coffee Break, Brunch, Almoço e Jantar. O cardápio final é personalizado para o seu evento."],
      },
    ],
  },
  {
    id: "escolar",
    title: "Cardápio Festa Escolar",
    sections: [
      BEBIDAS_COMUNS,
      FESTA_KIDS,
      {
        title: "Observação",
        items: ["Foco em um cardápio infantil equilibrado e seguro."],
      },
    ],
  },
  // Adicionando cardápios de serviço (não de festa) para o MenuModal
  {
    id: "cafedamanha",
    title: "Cardápio Café da Manhã / Brunch",
    sections: [
      BEBIDAS_COMUNS,
      BRUNCH_CAFE,
    ],
  },
  {
    id: "coffeebreak",
    title: "Cardápio Coffee Break",
    sections: [
      BEBIDAS_COMUNS,
      BRUNCH_CAFE,
      {
        title: "Observação",
        items: ["O cardápio de Coffee Break é uma versão simplificada do Brunch, ideal para eventos corporativos curtos."],
      },
    ],
  },
  {
    id: "almoco",
    title: "Cardápio Almoço",
    sections: [
      BEBIDAS_COMUNS,
      ALMOCO_JANTAR_BASE,
      CARDAPIO_1,
      CARDAPIO_2,
      CARDAPIO_3,
      CARDAPIO_4,
    ],
  },
  {
    id: "jantar",
    title: "Cardápio Jantar",
    sections: [
      BEBIDAS_COMUNS,
      ALMOCO_JANTAR_BASE,
      CARDAPIO_1,
      CARDAPIO_2,
      CARDAPIO_3,
      CARDAPIO_4,
    ],
  },
];
