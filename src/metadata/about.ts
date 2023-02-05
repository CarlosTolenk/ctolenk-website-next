import { IPropsAbout } from '../intefaces'

export const AboutMeta: IPropsAbout = {
  metadata: {
    title: 'CTolenk - Software Engineer',
    description: 'Que tenemos',
  },
  page: {
    title: 'About Me',
    slogan: 'Always inspired by knowledge',
  },
  content: {
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
        title: '6 Years+ Software Development',
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
