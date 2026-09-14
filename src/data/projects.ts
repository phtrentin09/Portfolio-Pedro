export type ProjectCategory = "casas-de-repouso" | "pet-creches" | "ferramentas-internas";

export interface Project {
  slug: string;
  name: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  status: "No ar" | "Em produção" | "Em uso interno";
  description: string;
  challenge: string;
  solution: string;
  result: string;
  technologies: string[];
  image: string;
  url?: string;
  featured: boolean;
}

export const categoryLabels: Record<ProjectCategory, string> = {
  "casas-de-repouso": "Casas de repouso",
  "pet-creches": "Pet creches",
  "ferramentas-internas": "Ferramentas internas",
};

export const projects: Project[] = [
  {
    slug: "laguna-house",
    name: "Laguna House",
    subtitle: "A Casa da Idosa, Jardim Social, Curitiba",
    category: "casas-de-repouso",
    categoryLabel: categoryLabels["casas-de-repouso"],
    year: "2026",
    status: "No ar",
    description:
      "Site institucional de sete páginas para uma casa de repouso conduzida por três enfermeiras, publicado em domínio próprio.",
    challenge:
      "A Laguna House já existia há anos, mas não tinha presença própria na internet. Só um perfil desatualizado em plataforma de terceiros, duas versões de logo circulando sem definição oficial e um domínio impresso no material que nunca chegou a resolver.",
    solution:
      "Levantei referências de outras casas de repouso bem posicionadas, defini a marca oficial entre as versões de logo em circulação e montei um site institucional com sete páginas, usando as fotos reais da casa e depoimentos verdadeiros do Google, cada um linkado para a avaliação original.",
    result:
      "O projeto foi fechado com a casa. O site está no ar em domínio próprio, com certificado SSL válido e indexado no Google Search Console.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Python (build)"],
    image: "/images/projects/laguna.webp",
    url: "https://casaderepousolaguna.com.br",
    featured: true,
  },
  {
    slug: "trato-fino",
    name: "Trato Fino",
    subtitle: "Pet Shop e Creche, Uberaba, Curitiba",
    category: "pet-creches",
    categoryLabel: categoryLabels["pet-creches"],
    year: "2026",
    status: "No ar",
    description:
      "Site institucional com oito páginas e blog para uma creche, pet shop e serviço de banho e tosa.",
    challenge:
      "A Trato Fino tinha presença só no Instagram, sem site, e pouca informação documentada sobre como a creche funcionava de fato no dia a dia.",
    solution:
      "Montei o site inteiro por conta própria, sem o cliente pedir, levantando as informações a partir do Instagram e do perfil no Google. Identidade visual em laranja e verde da marca, formulários que abrem o WhatsApp já preenchido e um blog com conteúdo voltado para tutores de cachorro.",
    result:
      "Site publicado e no ar, e usado depois como modelo de estrutura para os projetos seguintes de creche pet.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Python (build)"],
    image: "/images/projects/tratofino.webp",
    url: "https://tratofino.vercel.app",
    featured: false,
  },
  {
    slug: "park-pet",
    name: "Park Pet",
    subtitle: "Creche e Hotel, Barreirinha, Curitiba",
    category: "pet-creches",
    categoryLabel: categoryLabels["pet-creches"],
    year: "2026",
    status: "No ar",
    description:
      "Site institucional com nove páginas e blog, com avaliações reais do Google e mapa embutido no contato.",
    challenge:
      "A Park Pet reunia cinco anos de história e um reconhecimento da Câmara Municipal de Curitiba, mas as informações de contato estavam divergentes entre Instagram e Google, e o negócio dependia só das redes sociais para ser encontrado.",
    solution:
      "Organizei toda a informação dispersa em um site com nove páginas, cada serviço com sua própria página (creche, hotel, banho e tosa), avaliações reais do Google na página inicial, mapa do Google Maps embutido no contato e identidade em laranja e verde que segue a marca.",
    result: "Site no ar, pronto para ser apresentado à responsável técnica da creche.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Python (build)"],
    image: "/images/projects/parkpet.webp",
    url: "https://site-parkpet.vercel.app",
    featured: true,
  },
  {
    slug: "lista-de-espera",
    name: "Lista de Espera",
    subtitle: "Painel interno para a Morada Barigui",
    category: "ferramentas-internas",
    categoryLabel: categoryLabels["ferramentas-internas"],
    year: "2026",
    status: "Em uso interno",
    description:
      "Painel kanban em nuvem para organizar a fila de espera de famílias interessadas em vaga.",
    challenge:
      "A Morada Barigui recebe muito mais procura do que tem vaga disponível, e a lista de espera de famílias interessadas era controlada de forma manual, sem um jeito organizado de acompanhar quem já foi contatado, quem recusou ou quem está esperando uma vaga surgir.",
    solution:
      "Criei um painel com colunas de status (aguardando, contatado, vaga oferecida, entrou na casa, desistiu ou recusou), cadastro rápido com nome do idoso, responsável, telefone, grau de dependência e prioridade, além de busca e exportação em CSV. A lista fica compartilhada em nuvem e atualiza em qualquer computador.",
    result:
      "Primeiro passo de uma ideia maior: transformar o controle da lista de espera em um mini-CRM que possa ser usado por outras casas de repouso.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: "/images/projects/morada.webp",
    featured: false,
  },
  {
    slug: "animacao",
    name: "Animação",
    subtitle: "Creche Pet e Hotel, Barreirinha, Curitiba",
    category: "pet-creches",
    categoryLabel: categoryLabels["pet-creches"],
    year: "2026",
    status: "No ar",
    description: "O primeiro site de creche pet que desenvolvi, hoje referência de estrutura.",
    challenge:
      "Foi o primeiro site de creche pet que desenvolvi, numa época em que ainda não existia um modelo pronto para esse tipo de negócio.",
    solution:
      "Montei a estrutura do zero: página inicial, sobre, serviços, galeria e um blog com conteúdo para tutores de cachorro, testando o formato que depois viraria a base dos sites da Trato Fino e da Park Pet.",
    result: "Virou a referência de estrutura usada nos dois projetos de creche pet seguintes.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: "/images/projects/animacao.webp",
    url: "https://website-animacao.vercel.app",
    featured: false,
  },
  {
    slug: "beija-flor",
    name: "Beija-Flor",
    subtitle: "Casa de Repouso, Vista Alegre, Curitiba",
    category: "casas-de-repouso",
    categoryLabel: categoryLabels["casas-de-repouso"],
    year: "2026",
    status: "Em produção",
    description: "Site institucional de dez páginas, em validação final com a família responsável.",
    challenge:
      "A casa funciona há quase doze anos no bairro Vista Alegre, mas nunca teve um site próprio, só perfis nas redes sociais e em plataformas de terceiros.",
    solution:
      "Site institucional com dez páginas (início, sobre, estrutura, cuidados, modalidades, galeria, trabalhe conosco, contato, política de privacidade e termos de uso), com fotos reais da casa, depoimentos do Google linkados para a avaliação original, e cuidado especial com a versão para celular.",
    result:
      "Site apresentado ao responsável pela casa, que gostou da proposta na primeira conversa. Aguardando validação final da família para publicar no ar.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Python (build)"],
    image: "/images/projects/beijaflor.webp",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
