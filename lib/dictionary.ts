export type Lang = "pt" | "en";

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    whyMiami: string;
    services: string;
    gallery: string;
    process: string;
    faq: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string[];
  };
  whyMiami: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    captions: string[];
  };
  process: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: { title: string; description: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    credentials: string[];
    ctaLabel: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { question: string; answer: string }[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    whatsapp: string;
    email: string;
    rights: string;
  };
  whatsapp: {
    floatingLabel: string;
    message: string;
  };
  langSwitch: {
    label: string;
  };
}

export const dictionaries: Record<Lang, Dictionary> = {
  pt: {
    meta: {
      title: "Fernando Alves | Corretor de Imóveis em Miami para Brasileiros",
      description:
        "Assessoria completa em português para brasileiros comprarem imóveis em Miami e na Flórida — da escolha do imóvel ao fechamento. Fernando Alves, Compass.",
    },
    nav: {
      about: "Sobre",
      whyMiami: "Por que Miami",
      services: "Serviços",
      gallery: "Imóveis",
      process: "Como funciona",
      faq: "Perguntas",
      contact: "Contato",
      cta: "Quero comprar",
    },
    hero: {
      eyebrow: "CORRETOR DE IMÓVEIS NOS EUA · COMPASS",
      headline: "Seu imóvel em Miami,",
      headlineAccent: "do jeito certo.",
      subheadline:
        "Assessoria completa para brasileiros comprarem apartamentos e casas na Flórida — em português, do primeiro contato ao fechamento.",
      ctaPrimary: "Quero comprar",
      ctaSecondary: "Como funciona",
      trust: [
        "Atendimento 100% em português",
        "Parceiro Compass",
        "Processo remoto, sem precisar viajar",
      ],
    },
    whyMiami: {
      eyebrow: "POR QUE A FLÓRIDA",
      title: "Um dos destinos mais sólidos para investir fora do Brasil",
      subtitle:
        "Miami segue entre os mercados imobiliários mais procurados por brasileiros — e não por acaso.",
      items: [
        {
          title: "Patrimônio em dólar",
          description:
            "Proteja parte do seu patrimônio em uma moeda forte, em um mercado com histórico de valorização consistente.",
        },
        {
          title: "Sem exigência de visto",
          description:
            "Você não precisa de visto, green card ou cidadania para comprar um imóvel nos Estados Unidos.",
        },
        {
          title: "Processo pode ser remoto",
          description:
            "Com procuração e suporte correto, é possível concluir a compra sem sair do Brasil.",
        },
        {
          title: "Financiamento para estrangeiros",
          description:
            "Existem linhas de crédito específicas para brasileiros, com parceiros que conheço e indico.",
        },
      ],
    },
    services: {
      eyebrow: "COMO EU AJUDO",
      title: "Uma assessoria pensada para quem compra de longe",
      subtitle:
        "Cuido de cada etapa para que a distância e o idioma nunca sejam um obstáculo.",
      items: [
        {
          title: "Seleção sob medida",
          description:
            "Curadoria de imóveis alinhados ao seu objetivo: moradia, renda com aluguel ou valorização.",
        },
        {
          title: "Visitas e negociação",
          description:
            "Visito os imóveis por você, com fotos e vídeos detalhados, e negocio as melhores condições.",
        },
        {
          title: "Financiamento e documentação",
          description:
            "Conexão com bancos e parceiros especializados em compradores estrangeiros.",
        },
        {
          title: "Acompanhamento no fechamento",
          description:
            "Suporte em cada documento até a assinatura final (closing) e entrega das chaves.",
        },
        {
          title: "Gestão pós-compra",
          description:
            "Indicação de parceiros de confiança para administração e locação do seu imóvel.",
        },
        {
          title: "Comunicação em português",
          description:
            "Nada de traduzir contratos sozinho — eu traduzo o processo americano para você.",
        },
      ],
    },
    gallery: {
      eyebrow: "MIAMI À VISTA",
      title: "Um gostinho do que te espera",
      subtitle:
        "Praia, skyline e os condomínios que fazem parte do dia a dia de quem investe na região.",
      captions: [
        "Orla de Miami Beach",
        "Litoral e skyline de Sunny Isles",
        "Área de piscina de um residencial de alto padrão",
        "Piscina e deck com vista para o mar",
      ],
    },
    process: {
      eyebrow: "COMO FUNCIONA",
      title: "Do primeiro contato às chaves na mão",
      subtitle: "Um passo a passo claro, pensado para quem está no Brasil.",
      steps: [
        {
          title: "Conversa inicial",
          description:
            "Entendo seu objetivo, orçamento e perfil de investimento em uma conversa sem compromisso.",
        },
        {
          title: "Seleção de imóveis",
          description:
            "Monto uma curadoria de opções que fazem sentido para você, com vídeos e análise de cada uma.",
        },
        {
          title: "Visita e negociação",
          description:
            "Visitamos presencialmente ou por vídeo, e parto para a negociação da melhor proposta.",
        },
        {
          title: "Contrato e financiamento",
          description:
            "Organizamos documentação, contrato e, se necessário, o financiamento com parceiros.",
        },
        {
          title: "Fechamento (closing)",
          description:
            "Acompanho todo o fechamento até a entrega oficial das chaves do seu imóvel.",
        },
      ],
    },
    about: {
      eyebrow: "QUEM VAI TE ATENDER",
      title: "Fernando Alves",
      paragraphs: [
        "Corretor de imóveis licenciado nos Estados Unidos e parceiro da Compass, uma das maiores redes imobiliárias do país.",
        "Atendo brasileiros que querem comprar um imóvel em Miami com clareza, segurança e um processo todo conduzido em português — do primeiro contato até o fechamento.",
        "Meu trabalho é ser a ponte entre você e o mercado imobiliário americano, para que a distância nunca seja um impeditivo.",
      ],
      credentials: [
        "Broker licenciado · Flórida",
        "Parceiro Compass",
        "Atendimento em português",
      ],
      ctaLabel: "Falar com Fernando",
    },
    faq: {
      eyebrow: "DÚVIDAS FREQUENTES",
      title: "Perguntas que todo brasileiro faz",
      subtitle:
        "Se a sua dúvida não estiver aqui, me chame no WhatsApp — respondo pessoalmente.",
      items: [
        {
          question: "Preciso de visto para comprar um imóvel nos EUA?",
          answer:
            "Não. Qualquer pessoa, de qualquer nacionalidade, pode comprar um imóvel nos Estados Unidos, independentemente do status de visto.",
        },
        {
          question: "Consigo financiar o imóvel sendo estrangeiro?",
          answer:
            "Sim. Existem bancos e instituições que financiam estrangeiros, geralmente com uma entrada maior do que a exigida de cidadãos americanos. Eu indico os parceiros certos para o seu caso.",
        },
        {
          question: "Preciso viajar para os Estados Unidos para comprar?",
          answer:
            "Não necessariamente. Com uma procuração e o suporte correto, boa parte do processo pode ser conduzida remotamente, direto do Brasil.",
        },
        {
          question: "Quais custos além do valor do imóvel devo considerar?",
          answer:
            "Existem custos de fechamento (closing costs), impostos municipais (property tax), e, em condomínios, a taxa de manutenção (HOA). Eu detalho tudo isso com você antes de qualquer decisão.",
        },
        {
          question: "Posso alugar o imóvel depois de comprar?",
          answer:
            "Sim, desde que o condomínio permita locação — informação que verifico com você antes da compra. Posso indicar parceiros de gestão e locação.",
        },
        {
          question: "O que é o 'closing' e como funciona?",
          answer:
            "É a etapa final da compra, quando a documentação e os recursos são formalizados e as chaves são oficialmente transferidas para você. Acompanho esse processo do início ao fim.",
        },
      ],
    },
    finalCta: {
      title: "Vamos dar o primeiro passo?",
      subtitle:
        "Me conte o que você procura e eu te mostro como comprar um imóvel em Miami com segurança.",
      ctaPrimary: "Quero comprar",
      ctaSecondary: "Enviar e-mail",
    },
    footer: {
      tagline: "Assessoria imobiliária em Miami para brasileiros.",
      navTitle: "Navegação",
      contactTitle: "Contato",
      whatsapp: "WhatsApp",
      email: "E-mail",
      rights: "Todos os direitos reservados.",
    },
    whatsapp: {
      floatingLabel: "Falar no WhatsApp",
      message:
        "Olá Fernando! Vim pelo site e quero saber mais sobre como comprar um imóvel em Miami.",
    },
    langSwitch: {
      label: "EN",
    },
  },
  en: {
    meta: {
      title: "Fernando Alves | Miami Real Estate Broker for Brazilians",
      description:
        "Full-service, Portuguese-speaking guidance for Brazilians buying property in Miami and Florida — from property search to closing. Fernando Alves, Compass.",
    },
    nav: {
      about: "About",
      whyMiami: "Why Miami",
      services: "Services",
      gallery: "Properties",
      process: "How it works",
      faq: "FAQ",
      contact: "Contact",
      cta: "I want to buy",
    },
    hero: {
      eyebrow: "U.S. REAL ESTATE BROKER · COMPASS",
      headline: "Your property in Miami,",
      headlineAccent: "done right.",
      subheadline:
        "Full-service guidance for Brazilians buying apartments and homes in Florida — from the first conversation to closing.",
      ctaPrimary: "I want to buy",
      ctaSecondary: "How it works",
      trust: [
        "Portuguese-speaking service",
        "Compass affiliate",
        "Remote process, no travel required",
      ],
    },
    whyMiami: {
      eyebrow: "WHY FLORIDA",
      title: "One of the most solid destinations to invest abroad",
      subtitle:
        "Miami remains one of the most sought-after real estate markets for Brazilians — and for good reason.",
      items: [
        {
          title: "Wealth in U.S. dollars",
          description:
            "Protect part of your wealth in a strong currency, in a market with a track record of consistent appreciation.",
        },
        {
          title: "No visa required",
          description:
            "You don't need a visa, green card or citizenship to buy property in the United States.",
        },
        {
          title: "The process can be remote",
          description:
            "With a power of attorney and the right support, you can complete the purchase without leaving Brazil.",
        },
        {
          title: "Financing for foreign buyers",
          description:
            "Specific credit lines exist for Brazilian buyers, through partners I know and recommend.",
        },
      ],
    },
    services: {
      eyebrow: "HOW I HELP",
      title: "Guidance built for buyers purchasing from abroad",
      subtitle:
        "I handle every step so that distance and language are never an obstacle.",
      items: [
        {
          title: "Tailored property search",
          description:
            "Curated listings aligned with your goal: a home, rental income, or long-term appreciation.",
        },
        {
          title: "Showings and negotiation",
          description:
            "I visit properties on your behalf with detailed photos and video, and negotiate the best terms.",
        },
        {
          title: "Financing and paperwork",
          description:
            "Connections to banks and partners who specialize in foreign buyers.",
        },
        {
          title: "Support through closing",
          description:
            "Guidance through every document, up to final signing (closing) and handover of the keys.",
        },
        {
          title: "Post-purchase management",
          description:
            "Trusted partners for property management and rental once you own.",
        },
        {
          title: "Portuguese-speaking support",
          description:
            "No need to translate contracts on your own — I translate the U.S. process for you.",
        },
      ],
    },
    gallery: {
      eyebrow: "A LOOK AT MIAMI",
      title: "A preview of what's waiting for you",
      subtitle:
        "Beachfront, skyline, and the kind of buildings that make up everyday life for investors in the region.",
      captions: [
        "Miami Beach shoreline",
        "Sunny Isles coastline and skyline",
        "Pool deck at a high-end residence",
        "Pool and deck overlooking the ocean",
      ],
    },
    process: {
      eyebrow: "HOW IT WORKS",
      title: "From the first conversation to the keys in hand",
      subtitle: "A clear, step-by-step process built for buyers in Brazil.",
      steps: [
        {
          title: "Initial conversation",
          description:
            "I learn your goals, budget and investment profile in a no-obligation conversation.",
        },
        {
          title: "Property selection",
          description:
            "I curate a shortlist that fits your profile, with video walkthroughs and analysis of each one.",
        },
        {
          title: "Showing and negotiation",
          description:
            "We tour properties in person or by video, then move into negotiating the best offer.",
        },
        {
          title: "Contract and financing",
          description:
            "We organize the paperwork, contract and, if needed, financing with trusted partners.",
        },
        {
          title: "Closing",
          description:
            "I guide the entire closing process through the official handover of your keys.",
        },
      ],
    },
    about: {
      eyebrow: "WHO YOU'LL WORK WITH",
      title: "Fernando Alves",
      paragraphs: [
        "Licensed real estate broker in the United States and affiliate of Compass, one of the country's largest real estate networks.",
        "I work with Brazilians who want to buy property in Miami with clarity, confidence and a process conducted entirely in Portuguese — from the first conversation to closing.",
        "My job is to be the bridge between you and the U.S. real estate market, so that distance is never a barrier.",
      ],
      credentials: [
        "Licensed broker · Florida",
        "Compass affiliate",
        "Portuguese-speaking service",
      ],
      ctaLabel: "Talk to Fernando",
    },
    faq: {
      eyebrow: "FREQUENTLY ASKED",
      title: "Questions every buyer asks",
      subtitle:
        "If your question isn't here, message me on WhatsApp — I answer personally.",
      items: [
        {
          question: "Do I need a visa to buy property in the U.S.?",
          answer:
            "No. Anyone, of any nationality, can buy property in the United States regardless of visa status.",
        },
        {
          question: "Can I finance the property as a foreign buyer?",
          answer:
            "Yes. Several banks and institutions finance foreign buyers, usually with a larger down payment than required from U.S. citizens. I'll connect you with the right partners for your case.",
        },
        {
          question: "Do I need to travel to the U.S. to buy?",
          answer:
            "Not necessarily. With a power of attorney and the right support, most of the process can be handled remotely from Brazil.",
        },
        {
          question: "What costs should I expect besides the purchase price?",
          answer:
            "Expect closing costs, property taxes, and, for condos, a monthly HOA fee. I walk you through all of it before any decision.",
        },
        {
          question: "Can I rent out the property after buying?",
          answer:
            "Yes, as long as the building allows rentals — something I confirm with you before the purchase. I can also recommend property and rental management partners.",
        },
        {
          question: "What is 'closing' and how does it work?",
          answer:
            "It's the final stage of the purchase, when paperwork and funds are formalized and the keys are officially transferred to you. I guide this process from start to finish.",
        },
      ],
    },
    finalCta: {
      title: "Ready to take the first step?",
      subtitle:
        "Tell me what you're looking for, and I'll show you how to buy property in Miami with confidence.",
      ctaPrimary: "I want to buy",
      ctaSecondary: "Send an email",
    },
    footer: {
      tagline: "Miami real estate guidance for Brazilian buyers.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      whatsapp: "WhatsApp",
      email: "Email",
      rights: "All rights reserved.",
    },
    whatsapp: {
      floatingLabel: "Chat on WhatsApp",
      message:
        "Hi Fernando! I came from your website and would like to learn more about buying property in Miami.",
    },
    langSwitch: {
      label: "PT",
    },
  },
};
