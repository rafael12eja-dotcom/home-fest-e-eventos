export type BlogPostSummary = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  coverImage: string;
};

export type BlogPost = BlogPostSummary & {
  content: string;
  coverAlt?: string;
};

/**
 * Posts locais estáticos usados quando a API externa não está configurada.
 * Isso garante que o blog nunca fique vazio em produção.
 */
const localPosts: BlogPost[] = [
  {
    slug: "buffet-infantil-em-casa-belo-horizonte",
    title: "Buffet infantil em casa em Belo Horizonte: como funciona na prática",
    excerpt:
      "Entenda como a Home Fest & Eventos leva toda a estrutura de buffet infantil até a sua casa em Belo Horizonte, com cardápio completo, equipe e montagem pensados para espaços reais.",
    date: "2025-11-20",
    readingTime: "5 min de leitura",
    tags: ["Buffet Infantil", "Festa em Casa", "BH"],
    coverImage: "/infantil.webp",
    coverAlt:
      "Buffet infantil da Home Fest & Eventos montado em residência em Belo Horizonte, mesa decorada com doces e bolo.",
    content: `
      <p>
        Organizar um <strong>buffet infantil em casa em Belo Horizonte</strong> é o desejo de muitos pais
        que querem uma festa acolhedora, com a cara da família, mas sem abrir mão de estrutura profissional.
        A Home Fest &amp; Eventos nasce justamente para isso: levar a experiência de um buffet completo para
        dentro da sua casa, salão do prédio ou espaço de convivência.
      </p>

      <h2>O que a Home Fest leva para a sua casa</h2>
      <p>
        Em cada festa, nossa equipe estuda o espaço disponível e monta uma operação enxuta e eficiente,
        incluindo:
      </p>
      <ul>
        <li>Estrutura de atendimento com copeira, garçons e equipe de cozinha;</li>
        <li>Montagem de ilha gastronômica ou mesa principal, de acordo com o layout do ambiente;</li>
        <li>Cardápio pensado para crianças e adultos, com salgados selecionados e doces autorais;</li>
        <li>Equipamentos necessários para aquecimento, fritura e finalização dos pratos;</li>
        <li>Planejamento de fluxo para evitar filas e pontos de aglomeração.</li>
      </ul>

      <h2>Vantagens de fazer a festa em casa com buffet profissional</h2>
      <p>
        A grande diferença está no <strong>conforto dos convidados</strong> e na segurança de ter um time
        experiente conduzindo todo o serviço. Você não precisa se preocupar com a cozinha, com o tempo de forno
        ou com a reposição da mesa — a equipe Home Fest cuida de tudo, do primeiro ao último convidado.
      </p>

      <p>
        Além disso, o cardápio é montado de forma personalizada: é possível ajustar níveis de
        <em>gourmetização</em>, incluir opções mais clássicas ou autorais e harmonizar o serviço com o estilo da
        decoração que você escolheu.
      </p>

      <h2>Para quem o buffet infantil em casa é ideal</h2>
      <p>
        Esse formato é perfeito para famílias que valorizam a sensação de receber em casa, mas querem
        <strong>resultado profissional</strong>. Também é uma excelente opção para quem tem crianças pequenas e
        prefere mantê-las em um ambiente familiar, seguro e controlado.
      </p>

      <p>
        Se você está em Belo Horizonte e região e quer transformar o aniversário do seu filho em uma experiência
        acolhedora, elegante e organizada, a Home Fest &amp; Eventos é a parceira ideal para cuidar do buffet do
        início ao fim.
      </p>
    `,
  },
  {
    slug: "como-organizar-festa-em-casa-sem-estresse",
    title: "Como organizar uma festa em casa sem estresse: guia prático Home Fest",
    excerpt:
      "Checklist completo para organizar uma festa em casa com buffet profissional, desde a escolha do cardápio até o fluxo dos convidados.",
    date: "2025-11-10",
    readingTime: "7 min de leitura",
    tags: ["Festa em Casa", "Organização", "Dicas"],
    coverImage: "/homefest.webp",
    coverAlt:
      "Mesa posta em ambiente residencial com buffet completo Home Fest & Eventos, decoração elegante em tons neutros.",
    content: `
      <p>
        Receber em casa é um gesto de carinho — mas também pode ser uma fonte de ansiedade quando você tenta fazer
        tudo sozinho. A proposta da Home Fest &amp; Eventos é justamente tirar esse peso das suas costas, unindo
        <strong>gastronomia autoral</strong> e <strong>operacional profissional</strong> em um formato pensado para
        casas e apartamentos de Belo Horizonte.
      </p>

      <h2>1. Defina o estilo da festa</h2>
      <p>
        Antes de falar de cardápio, é importante definir o estilo da comemoração: infantil, adulto, 15 anos,
        brunch, churrasco, jantar intimista ou confraternização corporativa em casa. O estilo define o tipo de
        serviço, o tempo de evento e a dinâmica dos convidados.
      </p>

      <h2>2. Planeje o número de convidados com realismo</h2>
      <p>
        Em festas em casa, o espaço físico é determinante. Nossa recomendação é sempre alinhar com o buffet a
        metragem disponível, o tipo de mobiliário e os ambientes que poderão ser usados. Assim conseguimos
        sugerir um limite saudável de convidados, garantindo circulação confortável.
      </p>

      <h2>3. Escolha um cardápio coerente com o horário</h2>
      <p>
        Para almoços e jantares, o foco é em <strong>pratos bem executados</strong>, com proteínas, guarnições e
        saladas equilibradas. Para aniversários infantis, coquetéis e festas à noite, vale trabalhar com cardápios
        de salgados, ilhas temáticas e doces especiais – tudo servido à vontade, com reposição constante.
      </p>

      <h2>4. Delegue a operação para um time profissional</h2>
      <p>
        A diferença entre uma festa tranquila e uma festa estressante está em quem cuida da operação. Na Home Fest,
        nossa equipe assume cozinha, aquecimento, fritura, montagem, circulação de bandejas e fechamento.
        Você aproveita o momento com seus convidados, sem se preocupar com o bastidor.
      </p>

      <p>
        Com planejamento, cardápio certo e uma equipe especializada, é totalmente possível fazer uma festa em casa,
        elegante e memorável, sem nenhum estresse.
      </p>
    `,
  },
  {
    slug: "cardapio-almoco-jantar-eventos-bh",
    title: "Cardápio de almoço e jantar para eventos em BH: o padrão Essenzia & Home Fest",
    excerpt:
      "Conheça a filosofia por trás dos cardápios de almoço e jantar da Essenzia Eventos, base dos serviços de buffet em domicílio da Home Fest.",
    date: "2025-11-05",
    readingTime: "6 min de leitura",
    tags: ["Almoço e Jantar", "Cardápio", "Gastronomia"],
    coverImage: "/almoco-jantar.webp",
    coverAlt:
      "Pratos de almoço e jantar sofisticados montados em buffet, com saladas, carnes e guarnições em porcelanas brancas.",
    content: `
      <p>
        Os <strong>cardápios de almoço e jantar</strong> da Essenzia Eventos, que também servem como base para a
        Home Fest &amp; Eventos, foram pensados para unir elegância, sabor e fluidez de serviço. São composições
        completas, com arroz, guarnições, duas proteínas e massas selecionadas.
      </p>

      <p>
        A proposta é fugir do trivial, entregando combinações como <em>medalhão de filé</em>, <em>frango ao vinho</em>,
        molhos especiais e saladas ricas em texturas e contrastes, sempre com apresentação impecável na mesa.
      </p>

      <h2>Por que esse formato funciona tão bem em festas em casa</h2>
      <p>
        Em eventos residenciais, o cardápio precisa ser ao mesmo tempo sofisticado e prático. Os pratos são pensados
        para manter qualidade mesmo com tempo de aquecimento e serviço contínuo, sem perder textura ou sabor.
      </p>

      <p>
        Na prática, o convidado sente que está em um <strong>restaurante particular dentro da sua casa</strong>, com
        serviço de buffet organizado, fila fluindo bem e pratos sempre bem apresentados.
      </p>
    `,
  },
  {
    slug: "confraternizacao-empresa-em-casa-bh",
    title: "Confraternização de empresa em casa: quando faz sentido contratar a Home Fest",
    excerpt:
      "Cada vez mais empresas escolhem casas, sítios e ambientes informais para confraternizações. Veja quando o buffet em domicílio é a melhor solução.",
    date: "2025-10-28",
    readingTime: "4 min de leitura",
    tags: ["Corporativo", "Confraternização", "Buffet em domicílio"],
    coverImage: "/portfolio-empresas.webp",
    coverAlt:
      "Confraternização corporativa em ambiente aconchegante com buffet Home Fest & Eventos servido em ilhas.",
    content: `
      <p>
        Pequenas e médias empresas em Belo Horizonte têm buscado formatos mais intimistas para confraternizações:
        casas alugadas, espaços compartilhados, coberturas ou até mesmo a casa de um dos sócios. Nesses casos,
        o <strong>buffet em domicílio</strong> da Home Fest &amp; Eventos resolve dois problemas ao mesmo tempo:
        estrutura gastronômica completa e operação profissional.
      </p>

      <p>
        A equipe cuida de toda a parte de alimentos e bebidas, enquanto a empresa foca no relacionamento com o time.
        É possível trabalhar com cardápios de coquetel, boteco, churrasco ou jantar, de acordo com o perfil da equipe.
      </p>
    `,
  },
];

/**
 * Retorna todos os posts disponíveis (estáticos).
 */
export async function getAllPosts(): Promise<BlogPostSummary[]> {
  return localPosts
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(({ content, coverAlt, ...summary }) => summary);
}

/**
 * Busca um post específico pelo slug.
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!slug) return null;
  const found = localPosts.find((post) => post.slug === slug);
  return found ?? null;
}

/**
 * Mantém compatibilidade com a API anterior usada nas páginas.
 * Pode ser usada normalmente em BlogListPage.
 */
export async function fetchBlogPosts(): Promise<BlogPostSummary[]> {
  return getAllPosts();
}

/**
 * Mantém compatibilidade com a API anterior usada em BlogPostPage.
 */
export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  return getPostBySlug(slug);
}
