import { IPropsResume } from '../intefaces/pages/IPropsResume'
import { SiteLocale } from '../i18n'
import { uiTranslations } from '../i18n/translations'

const resumeContentByLocale: Record<SiteLocale, IPropsResume['content']> = {
  es: {
    workHistory: [
      {
        imageAtl: 'coderio_logo',
        company: 'Coderio',
        imageURL: '/images/coderio_logo.jpeg',
        title: 'Senior Full Stack Software Engineer',
        timeElapsed: 'Nov 2024 - Actualidad',
        description:
          'Desarrollo una aplicacion mobile B2B orientada a conectar vendedores con clientes y mejorar la eficiencia comercial. Trabajo en nuevas funcionalidades del MVP y en la expansion a nuevos paises para escalar la experiencia del producto.',
      },
      {
        imageAtl: 'passi',
        company: 'Passi',
        imageURL: '/images/ctolenk-c.png',
        title: 'Software Architect & Consultant (Part-time)',
        timeElapsed: '2025 - Actualidad',
        description:
          'Lidero procesos de contratacion tecnica y onboarding, convierto requerimientos de negocio en especificaciones de arquitectura y diseno capacidades de producto. Tambien coordino despliegues cloud en AWS con foco en escalabilidad y buenas practicas.',
      },
      {
        imageAtl: 'acercarseltda_logo',
        company: 'AcercaRSE at Walmart Chile',
        imageURL: '/images/acercarseltda_logo.jpeg',
        title: 'Expert Full Stack Software Engineer / Technical Leader',
        timeElapsed: 'Jun 2023 - Ago 2024',
        description:
          'Participe en el dominio de fulfillment para la app de preparacion de pedidos en tienda. Contribui a una migracion cloud de alto impacto entre plataformas de Walmart y lidere iniciativas de seguridad, evolucion del producto y coordinacion tecnica del equipo.',
      },
      {
        imageAtl: 'the-bridge-social',
        company: 'The Bridge Social at Walmart Chile',
        imageURL: '/images/the-bridge-social.webp',
        title: 'Senior Full Stack Software Engineer',
        timeElapsed: 'Ago 2021 - Jun 2023',
        description:
          'Trabaje en producto de fulfillment para operaciones de tienda, participando en migracion cloud, modernizacion tecnica y evolucion continua de funcionalidades alineadas a objetivos de negocio.',
      },
      {
        imageAtl: 'unit',
        company: 'Unit SRL',
        imageURL: '/images/unit.svg',
        title: 'Senior Software Engineer',
        timeElapsed: 'May 2020 - Oct 2021',
        description:
          'Desarrolle soluciones Front-end con Angular y Angular Elements para un ecosistema de seguros. Colabore en multiples aplicaciones de negocio y mentoree developers para elevar el nivel tecnico y la calidad de entrega.',
      },
      {
        imageAtl: 'atl-software',
        company: 'ATL Software',
        imageURL: '/images/atl-software.png',
        title: 'Mid-Senior Full Stack Software Engineer',
        timeElapsed: 'May 2019 - Mar 2020',
        description:
          'Trabaje en proyectos Full Stack con PHP, CakePHP, Angular, React y WordPress. Participe en la construccion de portales para estudiantes y en soluciones de integracion de pagos configurables para operaciones en varios paises.',
      },
      {
        imageAtl: 'control-diamante',
        company: 'Control Diamante',
        imageURL: '/images/control-diamante.jpeg',
        title: 'Mid-Senior Full Stack Software Engineer',
        timeElapsed: 'May 2017 - May 2019',
        description:
          'Desarrolle una plataforma web SPA y una app mobile para publicacion de planes, eventos y servicios digitales. Implemente integraciones de contenido con WordPress y funcionalidades de notificaciones para mejorar el alcance comercial.',
      },
      {
        imageAtl: '4r-fintech.png',
        company: '4R Prestamos y Finanzas',
        imageURL: '/images/4r-fintech.png',
        title: 'Junior Full Stack Software Engineer',
        timeElapsed: 'Sep 2017 - Dic 2018',
        description:
          'Construi una aplicacion colaborativa con stack MEAN para gestion de tareas, recursos y comunicacion en equipos de trabajo, incluyendo chat general, chat privado y timeline de actividad.',
      },
      {
        imageAtl: 'ctolenk',
        company: 'Freelance',
        imageURL: '/images/ctolenk-c.png',
        title: 'Junior Full Stack Software Engineer',
        timeElapsed: 'Nov 2015 - May 2017',
        description:
          'Etapa de consolidacion profesional desarrollando proyectos reales para clientes, principalmente sitios en WordPress, aplicaciones web y APIs REST como base de mi carrera en software.',
      },
    ],
    educationHistory: [
      {
        imageAtl: 'aws',
        company: 'Amazon Web Services',
        imageURL: '/images/aws.svg',
        title: 'AWS Certified Solutions Architect - Associate',
        timeElapsed: '2025 - 2028',
        description:
          'Certificacion profesional que valida competencias en arquitectura cloud para disenar soluciones seguras, resilientes y optimizadas en costos sobre AWS.',
        subDescriptionTitle: 'Servicios clave',
        subDescription: [
          'IAM: control de acceso y seguridad',
          'Amazon VPC: redes privadas y segmentacion',
          'EC2 Auto Scaling y Application Load Balancer',
          'Amazon ECS/EKS para contenedores',
          'AWS Lambda y arquitecturas serverless',
          'Amazon S3 y CloudFront para contenido estatico',
          'Amazon RDS y DynamoDB para persistencia',
          'CloudWatch + CloudTrail para observabilidad y auditoria',
        ],
      },
      {
        imageAtl: 'udemy',
        company: 'CodelyTV',
        imageURL: '/images/codelytv.png',
        title: 'Arquitectura de Software y Buenas Practicas',
        timeElapsed: 'Ene 2022 - Actualidad',
        description:
          'Programa de estudio continuo orientado a arquitectura limpia, refactorizacion y calidad de codigo con enfoque practico en productos escalables.',
        subDescriptionTitle: 'Contenido clave',
        subDescription: [
          'Principios SOLID aplicados',
          'Domain-Driven Design (DDD)',
          'Event-Driven Architecture',
          'CQRS (Command Query Responsibility Segregation)',
          'Arquitectura Hexagonal',
          'Refactorizacion y Code Smells',
          'TypeScript Avanzado',
        ],
      },
      {
        imageAtl: 'udemy',
        company: 'Udemy',
        imageURL: '/images/udemy-logo.png',
        title: 'Full Stack JavaScript y Mobile Development',
        timeElapsed: 'Ene 2017 - Actualidad',
        description:
          'Formacion enfocada en desarrollo mobile con tecnologias web, cultura DevOps y actualizacion constante para aplicar practicas modernas en proyectos de clientes y productos propios.',
        subDescriptionTitle: 'Contenido clave',
        subDescription: [
          'Angular basico y avanzado',
          'Ionic (Angular)',
          'React.js y React Native',
          'Node.js y MongoDB',
          'BDD (Behavior-Driven Development)',
          'Docker y Kubernetes',
        ],
      },
      {
        imageAtl: 'Platzi',
        company: 'Platzi',
        imageURL: '/images/platzi.png',
        title: 'Especializacion y Refuerzo Profesional',
        timeElapsed: 'Sep 2017 - Ene 2020',
        description:
          'Ruta de aprendizaje para fortalecer fundamentos y ampliar habilidades practicas en desarrollo web, backend y testing orientado a calidad.',
        subDescriptionTitle: 'Contenido clave',
        subDescription: [
          'Ruta profesional de JavaScript',
          'PHP avanzado y Laravel',
          'WordPress para desarrolladores',
          'C# y .NET',
          'TDD (Test-Driven Development)',
        ],
      },
      {
        imageAtl: 'NextU',
        company: 'NextU',
        imageURL: '/images/nextu.png',
        title: 'Full Stack Developer',
        timeElapsed: 'Dic 2016 - Mayo 2017',
        description:
          'Proceso de transicion profesional al desarrollo de software, aplicando bases previas de programacion y consolidando competencias para el mercado laboral tech.',
        subDescriptionTitle: 'Contenido clave',
        subDescription: [
          'Desarrollo Web',
          'JavaScript Profesional',
          'Testing: fundamentos y buenas practicas',
          'PHP y WordPress',
        ],
      },
      {
        imageAtl: 'ITESM',
        company: 'ITESM',
        imageURL: '/images/itesm.svg',
        title: 'Ingenieria en Robotica Digital (cursada)',
        timeElapsed: 'Ene 2013 - Jun 2016',
        description:
          'Formacion universitaria orientada a integrar informatica, matematica, programacion y electronica con enfoque en resolucion de problemas complejos.',
      },
      {
        imageAtl: 'ITLA',
        company: 'ITLA',
        imageURL: '/images/itla.png',
        title: 'Tecnologo en Mecatronica',
        timeElapsed: 'Ene 2012 - Nov 2012',
        description:
          'Formacion tecnica con base en matematica, logica y electronica, que fortalecio el pensamiento analitico aplicado a ingenieria y tecnologia.',
      },
      {
        imageAtl: 'Centenaria',
        company: 'Centenaria',
        imageURL: '/images/centenaria.webp',
        title: 'Certificacion Basica en Informatica',
        timeElapsed: 'Ene 2009 - Nov 2010',
        description:
          'Introduccion formal al mundo tecnologico: programacion orientada a objetos, fundamentos de hardware y mantenimiento de equipos.',
      },
      {
        imageAtl: 'IPISA',
        company: 'IPISA',
        imageURL: '/images/ipisa.png',
        title: 'Bachiller Tecnico en Electronica Industrial',
        timeElapsed: 'Ago 2006 - Jul 2010',
        description:
          'Bachillerato tecnico orientado a electronica industrial, donde inicie mi contacto con la programacion y el trabajo aplicado en tecnologia.',
      },
    ],
    skillSoft: [
      {
        name: 'Comunicacion',
        description: '',
        ranking: 5,
      },
      {
        name: 'Pensamiento critico y resolucion de problemas',
        description: '',
        ranking: 5,
      },
      {
        name: 'Colaboracion y trabajo en equipo',
        description: '',
        ranking: 5,
      },
      {
        name: 'Vision de negocio',
        description: '',
        ranking: 4,
      },
      {
        name: 'Adaptabilidad',
        description: '',
        ranking: 4,
      },
    ],
    skillLanguages: [
      {
        name: 'Espanol',
        description: 'Nativo',
        ranking: 5,
      },
      {
        name: 'Ingles',
        description: 'A2/B1 (en progreso)',
        ranking: 3,
      },
    ],
  },
  en: {
    workHistory: [
      {
        imageAtl: 'coderio_logo',
        company: 'Coderio',
        imageURL: '/images/coderio_logo.jpeg',
        title: 'Senior Full Stack Software Engineer',
        timeElapsed: 'Nov 2024 - Present',
        description:
          'I am building a B2B mobile application that connects sellers with customers to improve sales workflows. I collaborate on MVP feature delivery and multi-country expansion initiatives focused on product scalability and user value.',
      },
      {
        imageAtl: 'passi',
        company: 'Passi',
        imageURL: '/images/ctolenk-c.png',
        title: 'Software Architect & Consultant (Part-time)',
        timeElapsed: '2025 - Present',
        description:
          'I lead technical hiring and onboarding, translate business requirements into architecture decisions, and define product capabilities. I also coordinate AWS cloud deployments following scalability and reliability best practices.',
      },
      {
        imageAtl: 'acercarseltda_logo',
        company: 'AcercaRSE at Walmart Chile',
        imageURL: '/images/acercarseltda_logo.jpeg',
        title: 'Expert Full Stack Software Engineer / Technical Leader',
        timeElapsed: 'Jun 2023 - Aug 2024',
        description:
          'I worked in Walmart Chile fulfillment, contributing to a large cloud migration across Walmart platforms, enforcing security standards, and leading product evolution with cross-functional teams.',
      },
      {
        imageAtl: 'the-bridge-social',
        company: 'The Bridge Social at Walmart Chile',
        imageURL: '/images/the-bridge-social.webp',
        title: 'Senior Full Stack Software Engineer',
        timeElapsed: 'Aug 2021 - Jun 2023',
        description:
          'I contributed to a fulfillment product for store operations, supporting cloud migration, platform modernization, and iterative feature delivery aligned with business goals.',
      },
      {
        imageAtl: 'unit',
        company: 'Unit SRL',
        imageURL: '/images/unit.svg',
        title: 'Senior Software Engineer',
        timeElapsed: 'May 2020 - Oct 2021',
        description:
          'I built Angular and Angular Elements solutions for the insurance domain, delivered multiple business applications, and mentored Front-end developers to raise technical quality and delivery consistency.',
      },
      {
        imageAtl: 'atl-software',
        company: 'ATL Software',
        imageURL: '/images/atl-software.png',
        title: 'Mid-Senior Full Stack Software Engineer',
        timeElapsed: 'May 2019 - Mar 2020',
        description:
          'I worked on Full Stack projects with PHP, CakePHP, Angular, React, and WordPress, including student portals and configurable payment integration models for multi-country operations.',
      },
      {
        imageAtl: 'control-diamante',
        company: 'Control Diamante',
        imageURL: '/images/control-diamante.jpeg',
        title: 'Mid-Senior Full Stack Software Engineer',
        timeElapsed: 'May 2017 - May 2019',
        description:
          'I developed a SPA web platform and a mobile app to manage plans, events, and digital services, integrating WordPress content workflows and notification features for commercial reach.',
      },
      {
        imageAtl: '4r-fintech.png',
        company: '4R Prestamos y Finanzas',
        imageURL: '/images/4r-fintech.png',
        title: 'Junior Full Stack Software Engineer',
        timeElapsed: 'Sep 2017 - Dec 2018',
        description:
          'I built a collaborative MEAN-stack application for task, resource, and communication management, including team chat, private chat, and activity timeline features.',
      },
      {
        imageAtl: 'ctolenk',
        company: 'Freelance',
        imageURL: '/images/ctolenk-c.png',
        title: 'Junior Full Stack Software Engineer',
        timeElapsed: 'Nov 2015 - May 2017',
        description:
          'A foundational stage where I delivered real projects for clients, mainly WordPress sites, web applications, and REST APIs, shaping my professional software career path.',
      },
    ],
    educationHistory: [
      {
        imageAtl: 'aws',
        company: 'Amazon Web Services',
        imageURL: '/images/aws.svg',
        title: 'AWS Certified Solutions Architect - Associate',
        timeElapsed: '2025 - 2028',
        description:
          'Professional certification validating cloud architecture skills to design secure, resilient, and cost-optimized AWS solutions.',
        subDescriptionTitle: 'Key Services',
        subDescription: [
          'IAM for access control and security',
          'Amazon VPC for private networking and segmentation',
          'EC2 Auto Scaling and Application Load Balancer',
          'Amazon ECS/EKS for container orchestration',
          'AWS Lambda for serverless architectures',
          'Amazon S3 and CloudFront for static delivery',
          'Amazon RDS and DynamoDB for data persistence',
          'CloudWatch + CloudTrail for observability and auditability',
        ],
      },
      {
        imageAtl: 'udemy',
        company: 'CodelyTV',
        imageURL: '/images/codelytv.png',
        title: 'Software Architecture and Engineering Practices',
        timeElapsed: 'Jan 2022 - Present',
        description:
          'Continuous learning track focused on clean architecture, refactoring, and high-quality software delivery for scalable products.',
        subDescriptionTitle: 'Key Topics',
        subDescription: [
          'Applied SOLID Principles',
          'Domain-Driven Design (DDD)',
          'Event-Driven Architecture',
          'CQRS (Command Query Responsibility Segregation)',
          'Hexagonal Architecture',
          'Refactoring and Code Smells',
          'Advanced TypeScript',
        ],
      },
      {
        imageAtl: 'udemy',
        company: 'Udemy',
        imageURL: '/images/udemy-logo.png',
        title: 'Full Stack JavaScript and Mobile Development',
        timeElapsed: 'Jan 2017 - Present',
        description:
          'Training focused on mobile development with web technologies, DevOps culture, and continuous upskilling to apply modern practices in client and product projects.',
        subDescriptionTitle: 'Key Topics',
        subDescription: [
          'Angular (Basic and Advanced)',
          'Ionic (Angular)',
          'React.js and React Native',
          'Node.js and MongoDB',
          'BDD (Behavior-Driven Development)',
          'Docker and Kubernetes',
        ],
      },
      {
        imageAtl: 'Platzi',
        company: 'Platzi',
        imageURL: '/images/platzi.png',
        title: 'Professional Skill Reinforcement',
        timeElapsed: 'Sep 2017 - Jan 2020',
        description:
          'Learning path to strengthen technical foundations and expand practical capabilities in web development, backend engineering, and software testing.',
        subDescriptionTitle: 'Key Topics',
        subDescription: [
          'JavaScript Career Path',
          'Advanced PHP and Laravel',
          'WordPress for Developers',
          'C# and .NET',
          'TDD (Test-Driven Development)',
        ],
      },
      {
        imageAtl: 'NextU',
        company: 'NextU',
        imageURL: '/images/nextu.png',
        title: 'Full Stack Developer',
        timeElapsed: 'Dec 2016 - May 2017',
        description:
          'Professional transition program into software development, applying prior technical background and consolidating practical web engineering skills.',
        subDescriptionTitle: 'Key Topics',
        subDescription: [
          'Web Development',
          'Professional JavaScript',
          'Testing: Fundamentals and Best Practices',
          'PHP and WordPress',
        ],
      },
      {
        imageAtl: 'ITESM',
        company: 'ITESM',
        imageURL: '/images/itesm.svg',
        title: 'Digital Robotics Engineering (Coursework)',
        timeElapsed: 'Jan 2013 - Jun 2016',
        description:
          'University coursework integrating computer science, mathematics, programming, and electronics for complex problem-solving.',
      },
      {
        imageAtl: 'ITLA',
        company: 'ITLA',
        imageURL: '/images/itla.png',
        title: 'Mechatronics Technologist',
        timeElapsed: 'Jan 2012 - Nov 2012',
        description:
          'Technical education in mathematics, logic, and electronics that strengthened analytical thinking applied to engineering and technology.',
      },
      {
        imageAtl: 'Centenaria',
        company: 'Centenaria',
        imageURL: '/images/centenaria.webp',
        title: 'Basic Computer Certification',
        timeElapsed: 'Jan 2009 - Nov 2010',
        description:
          'Formal introduction to technology, including object-oriented programming fundamentals, hardware concepts, and computer repair basics.',
      },
      {
        imageAtl: 'IPISA',
        company: 'IPISA',
        imageURL: '/images/ipisa.png',
        title: 'Industrial Electronics Technical High School',
        timeElapsed: 'Aug 2006 - Jul 2010',
        description:
          'Technical high school training in industrial electronics, where I had my first practical exposure to programming and applied technology.',
      },
    ],
    skillSoft: [
      {
        name: 'Communication',
        description: '',
        ranking: 5,
      },
      {
        name: 'Critical Thinking and Problem Solving',
        description: '',
        ranking: 5,
      },
      {
        name: 'Collaboration and Teamwork',
        description: '',
        ranking: 5,
      },
      {
        name: 'Business Mindset',
        description: '',
        ranking: 4,
      },
      {
        name: 'Adaptability',
        description: '',
        ranking: 4,
      },
    ],
    skillLanguages: [
      {
        name: 'Spanish',
        description: 'Native',
        ranking: 5,
      },
      {
        name: 'English',
        description: 'A2/B1 (in progress)',
        ranking: 3,
      },
    ],
  },
}

export const getResumeMeta = (locale: SiteLocale): IPropsResume => {
  const t = uiTranslations[locale]

  return {
    metadata: {
      title: t.resume.metaTitle,
      description: t.resume.metaDescription,
      canonicalPath: '/resume',
      ogImage: '/images/coderio_logo.jpeg',
      keywords: t.resume.metaKeywords,
    },
    page: {
      title: t.resume.pageTitle,
      slogan: t.resume.pageSlogan,
    },
    content: resumeContentByLocale[locale],
  }
}
