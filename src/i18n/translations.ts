import { SiteLocale } from './index'

export const uiTranslations: Record<
  SiteLocale,
  {
    nav: { home: string; about: string; resume: string; contact: string }
    locale: { es: string; en: string }
    header: { roles: string[]; rightsReserved: string }
    home: {
      greeting: string
      aboutCta: string
      contactCta: string
      roles: string[]
      metaTitle: string
      metaDescription: string
      metaKeywords: string
      jobTitle: string
    }
    about: {
      metaTitle: string
      metaDescription: string
      metaKeywords: string
      pageTitle: string
      pageSlogan: string
      servicesEyebrow: string
      servicesTitle: string
    }
    resume: {
      metaTitle: string
      metaDescription: string
      metaKeywords: string
      pageTitle: string
      pageSlogan: string
      workEyebrow: string
      workTitle: string
      educationEyebrow: string
      educationTitle: string
      download: string
      hardSkills: string
      languageSkills: string
      softSkills: string
      skillsEyebrow: string
    }
    contact: {
      metaTitle: string
      metaDescription: string
      metaKeywords: string
      pageTitle: string
      pageSlogan: string
      name: string
      email: string
      message: string
      sendMessage: string
      infoEyebrow: string
      infoTitle: string
      country: string
      followMe: string
    }
    portfolio: {
      metaTitle: string
      metaDescription: string
      metaKeywords: string
      pageTitle: string
      pageSlogan: string
      projects: string
    }
    notFound: {
      title: string
      description: string
      heading: string
      copy: string
      goHome: string
    }
    appointments: {
      metaTitle: string
      metaDescription: string
      metaKeywords: string
      pageTitle: string
      pageSlogan: string
      availabilityEyebrow: string
      availabilityTitle: string
      subject: string
      name: string
      email: string
      phone: string
      date: string
      time: string
      message: string
      booking: string
    }
  }
> = {
  es: {
    nav: { home: 'Inicio', about: 'Sobre Mi', resume: 'Resumen', contact: 'Contacto' },
    locale: { es: 'ES', en: 'EN' },
    header: {
      roles: [
        'Desarrollador Full Stack',
        'Desarrollador Front-end',
        'Desarrollador Back-end',
        'Desarrollador Mobile',
      ],
      rightsReserved: 'Todos los derechos reservados.',
    },
    home: {
      greeting: 'Hola, soy Carlos Tolentino',
      aboutCta: 'Sobre Mi',
      contactCta: 'Contactame',
      roles: [
        'Desarrollador Full Stack',
        'Desarrollador Front-end',
        'Desarrollador Back-end',
        'Desarrollador Mobile',
      ],
      metaTitle: 'Carlos Tolentino | Ingeniero de Software Full Stack',
      metaDescription:
        'Ingeniero de Software Full Stack especializado en soluciones web, mobile y cloud. Explora mis servicios, experiencia y vias de contacto.',
      metaKeywords:
        'carlos tolentino, desarrollador full stack, ingeniero de software, react, nextjs, typescript, desarrollador mobile',
      jobTitle: 'Ingeniero de Software Full Stack',
    },
    about: {
      metaTitle: 'Sobre Carlos Tolentino | Ingeniero Full Stack',
      metaDescription:
        'Conoce mi trayectoria en ingenieria de software, experiencia profesional y servicios en desarrollo web y mobile.',
      metaKeywords:
        'sobre carlos tolentino, perfil ingeniero de software, servicios desarrollo web, servicios desarrollo mobile',
      pageTitle: 'Sobre Mi',
      pageSlogan: 'Siempre inspirado por el conocimiento',
      servicesEyebrow: 'Lo que realmente hago',
      servicesTitle: 'Mis Servicios',
    },
    resume: {
      metaTitle: 'Resumen | Carlos Tolentino Ingeniero de Software',
      metaDescription:
        'Experiencia profesional, formacion academica y habilidades tecnicas de Carlos Tolentino como Ingeniero de Software Full Stack.',
      metaKeywords:
        'resumen carlos tolentino, cv ingeniero de software, experiencia full stack, habilidades tecnicas',
      pageTitle: 'RESUMEN',
      pageSlogan: 'Siempre inspirado por el conocimiento',
      workEyebrow: 'Mi Experiencia Profesional',
      workTitle: 'Historial Laboral',
      educationEyebrow: 'Mi Educacion',
      educationTitle: 'Historial Academico',
      download: 'Descargar CV',
      hardSkills: 'Habilidades Tecnicas',
      languageSkills: 'Idiomas',
      softSkills: 'Habilidades Blandas',
      skillsEyebrow: 'Mi Perfil Profesional',
    },
    contact: {
      metaTitle: 'Contacto | Carlos Tolentino',
      metaDescription:
        'Contacta a Carlos Tolentino para servicios de consultoria y desarrollo de software.',
      metaKeywords:
        'contacto ingeniero de software, contratar desarrollador full stack, contacto carlos tolentino',
      pageTitle: 'Contacto',
      pageSlogan: 'Necesitas ayuda?',
      name: 'Nombre:',
      email: 'Correo:',
      message: 'Mensaje:',
      sendMessage: 'Enviar Mensaje',
      infoEyebrow: 'Informacion de Contacto',
      infoTitle: 'Encuentrame aqui',
      country: 'Pais',
      followMe: 'Sigueme:',
    },
    portfolio: {
      metaTitle: 'Portafolio | Carlos Tolentino',
      metaDescription:
        'Proyectos de software y contribuciones de producto desarrolladas por Carlos Tolentino.',
      metaKeywords:
        'portafolio software, proyectos full stack, aplicaciones web, aplicaciones mobile',
      pageTitle: 'Portafolio',
      pageSlogan: 'si haces lo que disfrutas, no es trabajo',
      projects: 'Proyectos',
    },
    notFound: {
      title: 'Pagina no encontrada | Carlos Tolentino',
      description: 'La pagina que buscas no existe.',
      heading: 'Algo salio mal...',
      copy: 'O vuelve a',
      goHome: 'Inicio',
    },
    appointments: {
      metaTitle: 'Citas | Carlos Tolentino',
      metaDescription:
        'Revisa mi disponibilidad semanal y solicita una cita para consultoria de software.',
      metaKeywords:
        'agendar consultoria de software, solicitar cita, disponibilidad ingeniero de software',
      pageTitle: 'CITAS',
      pageSlogan: 'REVISA MI DISPONIBILIDAD Y SOLICITA UNA CITA',
      availabilityEyebrow: 'Mis Citas',
      availabilityTitle: 'Antes de reservar una cita revisa mi disponibilidad',
      subject: 'Asunto',
      name: 'Nombre',
      email: 'Correo',
      phone: 'Telefono',
      date: 'Fecha',
      time: 'Hora',
      message: 'Mensaje',
      booking: 'Reservar cita',
    },
  },
  en: {
    nav: { home: 'Home', about: 'About Me', resume: 'Resume', contact: 'Contact' },
    locale: { es: 'ES', en: 'EN' },
    header: {
      roles: [
        'Full Stack Developer',
        'Front-end Developer',
        'Back-end Developer',
        'Mobile Developer',
      ],
      rightsReserved: 'All rights reserved.',
    },
    home: {
      greeting: 'Hello, I am Carlos Tolentino',
      aboutCta: 'About Me',
      contactCta: 'Contact Me',
      roles: [
        'Full Stack Developer',
        'Front-end Developer',
        'Back-end Developer',
        'Mobile Developer',
      ],
      metaTitle: 'Carlos Tolentino | Full Stack Software Engineer',
      metaDescription:
        'Full Stack Software Engineer specializing in web, mobile, and cloud solutions. Explore my services, experience, and contact channels.',
      metaKeywords:
        'carlos tolentino, full stack developer, software engineer, react, nextjs, typescript, mobile developer',
      jobTitle: 'Full Stack Software Engineer',
    },
    about: {
      metaTitle: 'About Carlos Tolentino | Full Stack Engineer',
      metaDescription:
        'Learn about my software engineering journey, professional background, and services across web and mobile development.',
      metaKeywords:
        'about carlos tolentino, software engineer profile, web development services, mobile development services',
      pageTitle: 'About Me',
      pageSlogan: 'Always inspired by knowledge',
      servicesEyebrow: 'What Actually I Do',
      servicesTitle: 'My Services',
    },
    resume: {
      metaTitle: 'Resume | Carlos Tolentino Software Engineer',
      metaDescription:
        'Professional work history, education, and technical skills of Carlos Tolentino as a Full Stack Software Engineer.',
      metaKeywords:
        'carlos tolentino resume, software engineer cv, full stack experience, technical skills',
      pageTitle: 'RESUME',
      pageSlogan: 'Always inspired by knowledge',
      workEyebrow: 'My Professional',
      workTitle: 'Work History',
      educationEyebrow: 'My Education',
      educationTitle: 'Background History',
      download: 'Download Resume',
      hardSkills: 'Hard Skills',
      languageSkills: 'Language Skills',
      softSkills: 'Soft Skills',
      skillsEyebrow: 'My Professional',
    },
    contact: {
      metaTitle: 'Contact | Carlos Tolentino',
      metaDescription:
        'Get in touch with Carlos Tolentino for software engineering consulting and development services.',
      metaKeywords:
        'contact software engineer, hire full stack developer, carlos tolentino contact',
      pageTitle: 'Contact',
      pageSlogan: 'Need some help?',
      name: 'Name:',
      email: 'Email:',
      message: 'Message:',
      sendMessage: 'Send Message',
      infoEyebrow: 'Contact Information',
      infoTitle: 'Find me here',
      country: 'Country',
      followMe: 'Follow Me:',
    },
    portfolio: {
      metaTitle: 'Portfolio | Carlos Tolentino',
      metaDescription:
        'Selected software projects and product contributions built by Carlos Tolentino.',
      metaKeywords:
        'software portfolio, full stack projects, web applications, mobile applications',
      pageTitle: 'Portfolio',
      pageSlogan: "if you do what you enjoy, it's not a job",
      projects: 'Projects',
    },
    notFound: {
      title: 'Page Not Found | Carlos Tolentino',
      description: 'The page you are looking for does not exist.',
      heading: 'Something Went Wrong...',
      copy: 'Or go to',
      goHome: 'Home',
    },
    appointments: {
      metaTitle: 'Appointments | Carlos Tolentino',
      metaDescription:
        'Check my weekly availability and request an appointment for software consulting.',
      metaKeywords:
        'book software consultation, schedule appointment, software engineer availability',
      pageTitle: 'APPOINTMENTS',
      pageSlogan: 'CHECK MY AVAILABILITY AND REQUEST AN APPOINTMENT',
      availabilityEyebrow: 'My Appointments',
      availabilityTitle: 'Before booking an appointment please check my availability',
      subject: 'Subject',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      date: 'Date',
      time: 'Time',
      message: 'Message',
      booking: 'Booking appointment',
    },
  },
}
