import { IPropsAbout } from '../intefaces'
import { SiteLocale } from '../i18n'
import { uiTranslations } from '../i18n/translations'

const getYearExperience = () => {
  const yearBegin = new Date('2015-01-01')
  const now = new Date()
  return now.getFullYear() - yearBegin.getFullYear()
}

const aboutContentByLocale: Record<SiteLocale, IPropsAbout['content']> = {
  es: {
    about: [
      {
        key: 1,
        paragraph:
          'Desarrollador de aplicaciones web y mobile capaz de cubrir las necesidades de mis clientes para que puedan maximizar sus oportunidades. Ofrezco un servicio de calidad para sus compradores o usuarios potenciales, implementando disenos interactivos, atractivos y enfocados en la experiencia final del consumidor. El mundo de las aplicaciones esta devorando el mundo y debemos evitar que esto afecte negativamente a nuestros negocios.',
      },
      {
        key: 2,
        paragraph:
          'Actualizarse es fundamental en este mundo sumergido por la tecnologia para ofrecer mejores servicios y conectar con el mundo. Me apasiona la tecnologia desde adolescente, me gradue de bachiller tecnico en electronica industrial y obtuve certificacion como tecnologo en informatica. Actualmente sigo estudiando multiples certificaciones en desarrollo web.',
      },
    ],
    features: [
      {
        title: `${getYearExperience()} Anos+ Desarrollo de Software`,
        description: 'Experiencia',
        icon: 'faBriefcase',
      },
      {
        title: '10+ Proyectos Freelance',
        description: 'Completados',
        icon: 'faLayerGroup',
      },
      {
        title: 'Varios Proyectos Migrados',
        description: 'Completados',
        icon: 'faHandshake',
      },
    ],
    services: [
      {
        title: 'Desarrollo Web',
        description: 'Desarrollo de software cloud con tecnologias web',
        icon: 'faCode',
      },
      {
        title: 'Consultoria de Software',
        description:
          'Analisis e implementacion de buenas practicas de desarrollo de software',
        icon: 'faBriefcase',
      },
      {
        title: 'Desarrollo Mobile',
        description:
          'Desarrollo de aplicaciones mobile orientadas a objetivos de negocio',
        icon: 'faMobile',
      },
      {
        title: 'Lider Tecnico',
        description:
          'Liderazgo de equipos de desarrollo para cumplir objetivos de forma eficiente',
        icon: 'faPeopleArrows',
      },
    ],
  },
  en: {
    about: [
      {
        key: 1,
        paragraph:
          'Developer of web and mobile applications capable of meeting\n the needs of my clients. In this way they can maximize their\n field of opportunities. Also, I provide them a quality service\n to their potential buyers or users who will use it. At the\n same time, I implement an interactive design, attractive,\n                  original and focused on the experience of the final consumer.\n                  The world of applications is devouring the world, and we need\n                  to try to do not let this consume our business or company.',
      },
      {
        key: 2,
        paragraph:
          "Upgrading is fundamental in this world submerged by technology\n in order to be able to offer better services to their\n customers and connect to the world. I am passionate about\n technology since I was a teenager, graduated from a technical\n bachelor's degree in Industrial Electronics, I also obtained a\n                  certification as a technologist in the area of computer\n                  science. Currently I am studying multiple certificates in the\n                  area of Web programming.",
      },
    ],
    features: [
      {
        title: `${getYearExperience()} Years+ Software Development`,
        description: 'Experience',
        icon: 'faBriefcase',
      },
      {
        title: '10+ Projects for Freelance',
        description: 'Completed',
        icon: 'faLayerGroup',
      },
      {
        title: 'Several Migrated Projects',
        description: 'Completed',
        icon: 'faHandshake',
      },
    ],
    services: [
      {
        title: 'Web Development',
        description: 'Develop software in the cloud through web technologies',
        icon: 'faCode',
      },
      {
        title: 'Software Consulting',
        description:
          'Analyze and implement correct practices in software development',
        icon: 'faBriefcase',
      },
      {
        title: 'Mobile Development',
        description:
          'Develop mobile applications with a business or service objective',
        icon: 'faMobile',
      },
      {
        title: 'Technical leader',
        description:
          'Being able to lead software development teams in order to meet objectives efficiently',
        icon: 'faPeopleArrows',
      },
    ],
  },
}

export const getAboutMeta = (locale: SiteLocale): IPropsAbout => {
  const t = uiTranslations[locale]

  return {
    metadata: {
      title: t.about.metaTitle,
      description: t.about.metaDescription,
      canonicalPath: '/about',
      ogImage: '/images/me-circle.jpeg',
      keywords: t.about.metaKeywords,
    },
    page: {
      title: t.about.pageTitle,
      slogan: t.about.pageSlogan,
    },
    content: aboutContentByLocale[locale],
  }
}
