export type Section = {
  title: string;
  items: string[];
};

export type EventType = {
  id: string;           // usado como âncora/hash
  title: string;
  excerpt: string;      // texto curto do card
  image: string;        // arquivo em /public
  intro: string;        // parágrafo inicial do modal
  sections: Section[];  // acordeões
};

// --- NOVOS CARDÁPIOS OFICIAIS ---

// Cardápio Coquetel (Base para Portfólio e alguns Serviços)
export const CARDAPIO_COQUETEL_BASE: Section[] = [
  {
    title: "Salgados (Escolha 12 tipos, servidos à vontade)",
    items: [
      "**Seleção de 12 Salgados:** Uma seleção especial de 12 opções entre Frios, Assados, Fritos e Petit Gourmet, escolhidas entre as mais de 60 opções do nosso cardápio completo. (Exemplos: Coxinha, Bolinho de Queijo, Mini Quiche, Canapé, Mini Sanduíche, etc.)"
    ]
  },
  {
    title: "Doces (Escolha 4 tipos, 3 por pessoa)",
    items: [
      "**Seleção de 4 Doces:** Escolha 4 tipos entre as opções mais populares: Brigadeiro, Beijinho, Cajuzinho, Moranguinho, Olho de Sogra, Mini trufa, Mini torta de limão, Mini torta de maracujá, Mini torta de morango, Mini pudim, Mini mousse de chocolate, Mini mousse de maracujá, Mini mousse de limão."
    ]
  },
  {
    title: "Bebidas (Servidas à vontade)",
    items: [
      "Refrigerantes (Coca cola comum e zero, Guaraná comum e zero)",
      "Água mineral (com e sem gás)",
      "Sucos (laranja, abacaxi, maracujá)"
    ]
  }
];

// Cardápio Coquetel com quantidade ampliada de doces para menus específicos (infantil, 15 anos e casamento)
export const CARDAPIO_COQUETEL_ATUALIZADO: Section[] = [
  {
    title: "Salgados (Escolha 12 tipos, servidos à vontade)",
    items: [
      "**Seleção de 12 Salgados:** Uma seleção especial de 12 opções entre Frios, Assados, Fritos e Petit Gourmet, escolhidas entre as mais de 60 opções do nosso cardápio completo. (Exemplos: Coxinha, Bolinho de Queijo, Mini Quiche, Canapé, Mini Sanduíche, etc.)",
    ],
  },
  {
    title: "Doces (Escolha 15 tipos + , 5un por pessoa)",
    items: [
      "**Seleção de 8 Doces:** Escolha 8 tipos entre as opções mais populares: Brigadeiro, Beijinho, Cajuzinho, Moranguinho, Olho de Sogra, Mini trufa, Mini torta de limão, Mini torta de maracujá, Mini torta de morango, Mini pudim, Mini mousse de chocolate, Mini mousse de maracujá, Mini mousse de limão.",
    ],
  },
  {
    title: "Bebidas (Servidas à vontade)",
    items: [
      "Refrigerantes (Coca cola comum e zero, Guaraná comum e zero)",
      "Água mineral (com e sem gás)",
      "Sucos (laranja, abacaxi, maracujá)",
    ],
  },
];

// Cardápio Comida de Boteco (Específico)
export const CARDAPIO_BOTECO: Section[] = [
  {
    title: "Tira-gostos de Boteco (lista fixa)",
    items: [
      "Mandioquinha frita",
      "Coxinha",
      "Anéis de cebola",
      "Batata frita",
      "Antepasto de berinjela",
      "Torradinha",
      "Torresmo",
      "Calabresa caramelizada",
      "Ovinho de codorna",
      "Pimenta biquinho",
      "Cebola em conserva",
      "Carne de panela",
      "Azeitona",
      "Mini pastéis de carne e queijo",
      "Bolinho de feijoada",
    ],
  },
  {
    title: "Salgados (4 opções)",
    items: [
      "Coxinha",
      "Kibe",
      "Bolinha de queijo",
      "Mini pastéis (carne e queijo)",
    ],
  },
  {
    title: "Doces (opcionais)",
    items: [
      "Moranguinho",
      "Olho de Sogra",
      "Mini trufa",
      "Mini torta de limão",
      "Mini torta de maracujá",
      "Mini pudim",
      "Mini mousse de chocolate",
      "Mini mousse de maracujá",
      "Mini mousse de limão",
    ],
  },
  {
    title: "Bebidas (Servidas à vontade)",
    items: [
      "Refrigerantes (Coca cola comum e zero, Guaraná comum e zero)",
      "Água mineral (com e sem gás)",
      "Sucos (laranja, abacaxi, maracujá)",
      "Cerveja (Heineken 600ml à consultar)",
    ],
  },
];



// Cardápio Festa Escolar (Modelo Padrão)


// Cardápio de Churrasco – Home Fest & Eventos
export const CARDAPIO_CHURRASCO: Section[] = [
  {
    title: " Carnes Principais",
    items: [
      "Picanha bovina (selecionada e fatiada no ponto)",
      "Contrafilé ou alcatra ao alho e sal grosso",
      "Linguiça artesanal (tradicional e toscana)",
      "Coração de frango temperado",
      "Frango grelhado com ervas finas",
      "Lombo suíno ao molho de abacaxi ou ervas",
      "(As carnes podem variar conforme o pacote escolhido e o perfil do evento)"
    ],
  },
  {
    title: "🍚 Acompanhamentos",
    items: [
      "Arroz branco ou arroz com alho e brócolis",
      "Farofa crocante com bacon e banana",
      "Vinagrete clássico",
      "Maionese de batata com cenoura",
      "Pão de alho artesanal",
      "Queijo coalho com orégano",
      "Feijão tropeiro ou feijão carioca (opcional)"
    ],
  },
  {
    title: "🥗 Saladas e Guarnições Frias",
    items: [
      "Salada verde (mix de folhas, tomate-cereja, cenoura ralada e croutons)",
      "Salada de macarrão com legumes",
      "Salpicão de frango defumado",
      "Molhos variados: rosé, ervas finas, alho, chimichurri e vinagrete agridoce"
    ],
  },
  {
    title: " Sobremesas",
    items: [
      "Salada de frutas da estação",
      "Pudim de leite condensado",
      "Mousse de maracujá ou chocolate",
      "Doce de leite com queijo minas (opcional)"
    ],
  },
  {
    title: "🍹 Bebidas",
    items: [
      "Refrigerantes e sucos variados",
      "Água mineral com e sem gás",
      "Opção com cerveja (Skol, Brahma, Original ou Heineken – sob consulta)"
    ],
  },
  {
    title: " Extras e Personalizações",
    items: [
      "Estação de caipirinhas (tradicional, frutas vermelhas e limão siciliano)",
      "Buffet de espetinhos gourmet (queijo coalho, medalhão de frango, legumes grelhados)",
      "Mesa de antepastos ou petiscos de boteco",
      "Decoração temática rústica e floral",
      "Churrasqueiro profissional e equipe de apoio inclusos"
    ],
  },
  {
    title: "⏱️ Duração do evento",
    items: [
      "4 horas de festa (1h de montagem e 1h de desmontagem inclusas)"
    ],
  },
];

export const CARDAPIO_ESCOLAR: Section[] = [
  {
    title: "⏱ Tempo de Festa Escolar (Modelo Padrão)",
    items: [
      "**Duração típica:** 1h a 1h20 (ajustável conforme a escola).",
      "**Festa leve, organizada e com fluxo pensado** para que todas as crianças aproveitem o momento sem atrapalhar a rotina escolar.",
      "**Como funciona:** A equipe chega antes para montar tudo. As crianças brincam, interagem e participam das atividades. Cantamos parabéns, servimos o lanche e finalizamos dentro do horário combinado. Sem bagunça, sem correria, sem atrapalhar aulas.",
      "**Observação:** O tempo pode ser personalizado conforme política e rotina de cada escola. Algumas escolas permitem 45 minutos, outras 1h30 — nós nos adaptamos."
    ]
  },
  {
    title: " Cardápio Padrão – Festa Escolar",
    items: [
      "Pensado para ser leve, prático, rápido de servir e apropriado para crianças dentro do ambiente escolar."
    ]
  },
  {
    title: "Lanche",
    items: [
      "Mini sanduíche (frango cremoso ou presunto e queijo)",
      "Pão de queijo ou bolinha de queijo",
      "Pipoca salgada ou doce (dependendo do perfil da escola)"
    ]
  },
  {
    title: "Doces",
    items: [
      "Brigadeiro + beijinho (2 por criança)",
      "Gelatina no potinho ou frutinha cortada (opção saudável)"
    ]
  },
  {
    title: "Bebidas",
    items: [
      "Suco natural ou néctar infantil",
      "Água mineral"
    ]
  },
  {
    title: "Bolo",
    items: [
      "Bolo verdadeiro (ou cenográfico na mesa + bolo verdadeiro cortado na cozinha, se preferir)"
    ]
  },
  {
    title: "Personalizações Possíveis (Sob Consulta)",
    items: [
      "Mini hot dog",
      "Mini pizza",
      "Salada de frutas",
      "Cupcakes decorados",
      "Lembrancinhas temáticas"
    ]
  },
];

// Cardápio Festa Brunch (Para o Serviço "Café da Manhã")
export const CARDAPIO_BRUNCH: Section[] = [
  {
    title: " Mesa de Café (Aparador)",
    items: [
      "**Bolos (2 tipos):** Bolo de cenoura com cobertura de chocolate, Bolo de laranja.",
      "**Mini Sanduíches (2 tipos)**",
      "**Cesta de Pães**",
      "**Tábua de Frios:** Presunto, peito de peru, salaminho, queijo prato e muçarela.",
      "**Salada de Fruta**",
      "**Biscoitos (2 tipos):** 1 salgado e 1 doce."
    ]
  },
  {
    title: " Bebidas Quentes e Acompanhamentos",
    items: [
      "**Bebidas Quentes:** Café, leite, chá e cappuccino.",
      "**Acompanhamentos:** Manteiga, geleia, requeijão, granola e mel."
    ]
  },
  {
    title: " Prato Quente (Opcional, Escolher 1)",
    items: [
      "Penne ao molho 4 queijos",
      "Penne ao molho Napolitano",
      "Mexidinho"
    ]
  },
  {
    title: " Salgados (Escolha 6 tipos)",
    items: [
      "O cliente poderá escolher 6 tipos entre as opções do buffet (lista completa disponível mediante consulta). Exemplos: coxinha com catupiry, quiche de alho-poró, pastel assado, entre outros."
    ]
  },
  {
    title: " Doces (Escolha 8 tipos - 5 unidades por pessoa)",
    items: [
      "Brigadeiro, beijinho, bombom Ele & Ela, docinho de leite ninho com Nutella, olho de sogra, tortinha de limão, palha italiana de Óreo, copinho de chocolate com mousse de maracujá, entre outros."
    ]
  },
  {
    title: " Bolo (Escolha 1 sabor)",
    items: [
      "**Sabores Inclusos:** Abacaxi com coco, coco, coco com ameixa, chocolate crocante, chocolate crocante branco, chocolate, dois amores (Ele e Ela), prestígio.",
      "**Acréscimo:** Chocolate com morango ou morango com chantilly: R$ 105,00."
    ]
  },
  {
    title: " Buffet Infantil (Incluso no Cardápio Brunch)",
    items: [
      "**Kit Lanche Individual:** Pão de queijo, Mini pizza, Pastel frito de carne e queijo, Batata frita.",
      "**Aparador Infantil:** 2 tipos de sucos, Pipoca, Batata chips, Pão de queijo, 1 guloseima, Pralinê, Casquinha de pastel passada no açúcar e canela."
    ]
  },
  {
    title: " Bebidas (Servidas à vontade)",
    items: [
      "Coca Cola Comum, Coca Cola Zero, Guaraná Comum, Guaraná Zero, Água mineral s/ Gás, Água Mineral c/ Gás.",
      "**Cerveja:** Pode ser levada pelo cliente (sem taxa), Original, Heineken (à consultar).",
      "**Taxas Adicionais:** Serviço de vinhos e espumantes (à consultar), Serviço de Whisky, Gin e bebidas com gelo (à consultar)."
    , "Doces: escolha 15 tipos (5 unidades por pessoa)"]
  }
];

// Cardápio Almoço ou Jantar Oficial (Para os Serviços "Almoço" e "Jantar")
export const CARDAPIO_ALMOCO_JANTAR: Section[] = [
  {
    title: "️ Cardápio 1",
    items: [
      "Arroz branco, Arroz com alho e brócolis, Lombo ao molho de ervas finas, Coq au Vin (peito de frango ao vinho com champignon), Banana à moda holandesa, Batata palha.",
      "**Salada Especial:** 3 tipos de alface, rúcula, abacaxi, tomate seco, castanha e molho cremoso de queijo."
    ]
  },
  {
    title: "️ Cardápio 2",
    items: [
      "Arroz branco, Arroz com ervas e passas ou arroz com alho e brócolis, Medalhão de frango ao molho de maracujá, Filé fatiado ao molho madeira, Penne ao molho quatro queijos.",
      "**Salada Tropical:** 3 tipos de alface, rúcula, kani, manga ou abacaxi, nozes e molho de shoyu e mel."
    ]
  },
  {
    title: "️ Cardápio 3",
    items: [
      "Arroz branco, Arroz com amêndoas ou arroz com alho e brócolis, Medalhão de filé, Coq au Vin (peito de frango ao vinho com champignon), Rondelli de espinafre.",
      "**Salada Gourmet:** 3 tipos de alface, rúcula, figo em calda, damasco, nozes e molho de queijo."
    ]
  },
  {
    title: "️ Cardápio 4",
    items: [
      "Arroz branco, Arroz com castanhas ou arroz com alho e brócolis, Frango à Indiana (iscas de frango com molho cremoso ao curry e aspargos), Filé fatiado ao molho funghi, Penne ao molho napolitano.",
      "**Salada Mediterrânea:** 3 tipos de alface, rúcula, abacaxi, tomate seco, castanha e molho cremoso de queijo."
    ]
  }
];

// --- ESTRUTURA DE DADOS DO PORTFÓLIO (EVENT_TYPES) ---

export const EVENT_TYPES: EventType[] = [
  {
    id: "infantil",
    title: "Buffet Infantil",
    excerpt:
      "Festa temática com decoração inclusa e cardápio infantil que agrada adultos e crianças.",
    image: "portfolio-infantil.jpg",
    intro:
      "O Cardápio Coquetel é a base para o Buffet Infantil, garantindo variedade de salgados, doces e bebidas, além de um kit lanche especial para as crianças.",
    sections: CARDAPIO_COQUETEL_BASE,
  },
  {
    id: "15anos",
    title: "15 Anos",
    excerpt:
      "Produção completa para debutantes com cardápio elegante e serviço impecável.",
    image: "portfolio-15anos.jpg",
    intro:
      "Nosso Cardápio Coquetel oferece a sofisticação e a variedade ideal para uma festa de 15 anos inesquecível, com opções de salgados, doces e bebidas premium.",
    sections: CARDAPIO_COQUETEL_BASE,
  },
  {
    id: "casamento",
    title: "Casamento",
    excerpt:
      "Cardápio autoral com apresentação refinada para cerimônias e recepções.",
    image: "portfolio-casamento.jpg",
    intro:
      "O Cardápio Coquetel é a opção perfeita para a recepção do seu casamento, combinando elegância, sabor e serviço completo para encantar seus convidados.",
    sections: CARDAPIO_COQUETEL_BASE,
  },
  {
    id: "churrasco",
    title: "Churrasco",
    excerpt:
      "Cortes selecionados com guarnições e atendimento contínuo à la rodízio.",
    image: "portfolio-churrasco.jpg",
    intro:
      "Para o Churrasco, o Cardápio Coquetel serve como base para petiscos e bebidas, complementado por carnes e guarnições especiais (sob consulta).",
    sections: CARDAPIO_CHURRASCO,
  },
  {
    id: "boteco",
    title: "Comida de Boteco",
    excerpt:
      "Petiscos com apresentação elegante, tradição e sabor em clima descontraído.",
    image: "portfolio-boteco.jpg",
    intro:
      "O Cardápio Coquetel é ideal para o tema Boteco, com uma vasta seleção de salgados fritos e frios, além de opções de bebidas para um evento descontraído.",
    sections: CARDAPIO_BOTECO,
  },
  {
    id: "empresas",
    title: "Corporativo",
    excerpt:
      "Soluções para eventos de empresa com serviço executivo e cronograma enxuto.",
    image: "portfolio-empresas.jpg",
    intro:
      "Para eventos corporativos, o Cardápio Coquetel oferece a flexibilidade e o requinte necessários para um coquetel volante ou coffee break sofisticado.",
    sections: CARDAPIO_COQUETEL_BASE,
  },
  {
    id: "escolar",
    title: "Festa Escolar",
    excerpt:
      "Opção econômica e organizada para escolas, com cardápio infantil e logística simples.",
    image: "portfolio-escolar.jpg",
    intro:
      "O Cardápio Coquetel, com foco nas opções infantis e lanches, é a escolha perfeita para festas escolares, garantindo diversão e sabor para todos.",
    sections: CARDAPIO_ESCOLAR,
  },
];
