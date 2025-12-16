import { ExpertProfile, ImageAsset, Feature } from './types';

export const EXPERT: ExpertProfile = {
  name: "Lorena Medeiros",
  role: "Nutricionista Esportiva e Estética",
  location: "Mooca, SP e Online",
  whatsappLink: "https://api.whatsapp.com/message/3NRTN2CWB7HCG1?autoload=1&app_absent=0",
  instagramLink: "https://www.instagram.com/nutri.lomedeiros/",
  email: "lorenalmvicente@gmail.com",
  lipedemaLink: "https://chk.eduzz.com/39VEN5BKWR"
};

export const LIPEDEMA_COMBO = {
  title: "Combo: Gerenciamento do Lipedema",
  subtitle: "O guia definitivo para pacientes e profissionais",
  description: "Um material completo com mais de 10 arquivos em PDF focados no tratamento, fisiopatologia e qualidade de vida de quem convive com o Lipedema.",
  items: [
    "Ebook Principal: Fisiopatologia, sintomas e tratamento completo",
    "Protocolo Exclusivo de 6 etapas para gerenciamento",
    "Guias de Suplementação e Estratégias Nutricionais",
    "Ebook de Exercícios Físicos recomendados",
    "5 Lâminas de Apoio (Genes, Sintomas, Classificação)",
    "Bônus: Guia 'O que toda paciente deve saber'"
  ],
  cta: "Quero acessar o material completo"
};

export const HERO_IMAGE = "https://i.imgur.com/YSQhrMH.png";
export const ABOUT_IMAGE = "https://i.imgur.com/0N9x6us.png";

export const BEFORE_AFTER_IMAGES: ImageAsset[] = [
  { id: '1', url: 'https://i.imgur.com/34qDs19.png', alt: 'Resultado Antes e Depois 1' },
  { id: '2', url: 'https://i.imgur.com/wAbFGvn.png', alt: 'Resultado Antes e Depois 2' },
  { id: '3', url: 'https://i.imgur.com/SDsqZpr.png', alt: 'Resultado Antes e Depois 3' },
  { id: '4', url: 'https://i.imgur.com/EPz8i6L.png', alt: 'Resultado Antes e Depois 4' },
  { id: '5', url: 'https://i.imgur.com/o6a1fMi.png', alt: 'Resultado Antes e Depois 5' },
  { id: '6', url: 'https://i.imgur.com/BW53dG6.png', alt: 'Resultado Antes e Depois 6' },
  { id: '7', url: 'https://i.imgur.com/W3Zlo9o.png', alt: 'Resultado Antes e Depois 7' },
  { id: '8', url: 'https://i.imgur.com/W5WTsIa.png', alt: 'Resultado Antes e Depois 8' },
  { id: '9', url: 'https://i.imgur.com/tD8yYQ4.png', alt: 'Resultado Antes e Depois 9' },
  { id: '10', url: 'https://i.imgur.com/Ox8cVe0.png', alt: 'Resultado Antes e Depois 10' },
  { id: '11', url: 'https://i.imgur.com/cy9Kl04.png', alt: 'Resultado Antes e Depois 11' },
  { id: '12', url: 'https://i.imgur.com/DvfUXv6.png', alt: 'Resultado Antes e Depois 12' },
  { id: '13', url: 'https://i.imgur.com/bg8NRqN.png', alt: 'Resultado Antes e Depois 13' },
];

export const FEEDBACK_IMAGES: ImageAsset[] = [
  { id: 'f1', url: 'https://i.imgur.com/LcqpZx2.png', alt: 'Feedback Cliente' },
  { id: 'f2', url: 'https://i.imgur.com/HUdDPot.png', alt: 'Feedback Cliente' },
  { id: 'f3', url: 'https://i.imgur.com/P4Z7D4q.png', alt: 'Feedback Cliente' },
  { id: 'f4', url: 'https://i.imgur.com/NBXfgGL.png', alt: 'Feedback Cliente' },
  { id: 'f5', url: 'https://i.imgur.com/h1AnJri.png', alt: 'Feedback Cliente' },
  { id: 'f6', url: 'https://i.imgur.com/fF0c0KI.png', alt: 'Feedback Cliente' },
  { id: 'f7', url: 'https://i.imgur.com/YXub3Al.png', alt: 'Feedback Cliente' },
  { id: 'f8', url: 'https://i.imgur.com/scG6N1D.png', alt: 'Feedback Cliente' },
];

export const FEATURES: Feature[] = [
  {
    id: 'active-listening',
    title: 'Escuta Ativa',
    description: 'Você é parte ATIVA do processo. Te ouvir é a base do meu atendimento.',
    icon: 'Ear'
  },
  {
    id: 'no-restriction',
    title: 'Sem Radicalismo',
    description: 'Nada de cortar tudo o que você gosta. Alimentação real para pessoas reais.',
    icon: 'Heart'
  },
  {
    id: 'routine-focused',
    title: 'Foco na Rotina',
    description: 'Um plano alimentar adaptado ao seu dia a dia, e não o contrário.',
    icon: 'Calendar'
  },
  {
    id: 'expert',
    title: 'Especialista',
    description: 'Pós-graduada em esportiva e estética e Certified Sports Nutritionist CISSN.',
    icon: 'Award'
  }
];

export const STEPS = [
  {
    number: '01',
    title: 'Toque no WhatsApp',
    description: 'Clique no botão para iniciar seu atendimento exclusivo.'
  },
  {
    number: '02',
    title: 'Agendamento',
    description: 'Vamos encontrar o melhor horário para você, presencial ou online.'
  },
  {
    number: '03',
    title: 'Transformação',
    description: 'Iniciamos sua jornada rumo à sua melhor versão.'
  }
];