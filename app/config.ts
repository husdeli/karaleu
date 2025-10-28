export const config = {
  github: 'https://github.com/husdeli',
  linkedin: 'https://www.linkedin.com/in/dzmitry-404-karaleu/',
  email: 'kdv3505381@gmail.com',
  projects: [
    {
      title: 'Map Maker',
      company: 'TomTom',
      position: 'Senior Software Engineer',
      companyLink: 'https://www.tomtom.com/',
      period: 'July 2023 - now',
      description:
        'Led development of a map customization platform serving ~1K monthly active users',
      achievements: [
        'Delivered key product capabilities that enabled the platform to support 1,000+ active users, contributing to growth in enterprise adoption and unlocking multiple new customer use cases.',
        'Designed and implemented the core library enabling multi-version style customization and modular feature expansion, reducing integration effort by 50%.',
        'Coordinated with product, backend, and design teams to translate complex requirements into clear plans and predictable releases, cutting delivery risk by 25%.',
        'Introduced performance improvements that reduced style processing time by 50–60% and boosted UI responsiveness across large datasets.',
      ],
      tech: [
        'React',
        'Node.js',
        'PostgreSQL',
        'Typescript',
        'Python',
        'Maplibre',
        'Azure',
      ],
    },
    {
      title: 'Patent classification platform',
      company: 'European Patent Office',
      position: 'Senior Software Engineer',

      companyLink: 'https://www.epo.org/',
      period: 'July 2021 - June 2023',
      description:
        'Patent classification application for organizing and classifying patent data effectively. The application has been used by patent examiners to quickly and efficiently identify relevant patents and streamline the patent review process.',
      achievements: [
        'Designed and led development of critical data-processing features that accelerated patent analysis workflows by up to 10x.',
        'Improved rendering of massive datasets via virtualization, memoization, and smart caching, reducing UI render time from ~5s to <200ms.',
        'Enhanced accessibility and interaction quality for key user journeys, increasing examiner productivity estimates by 20–25%.',
        'Optimized classification schema handling reducing memory consumption by ~40%.',
      ],
      tech: ['TypeScript', 'React', 'Redux'],
    },
    {
      title: 'Interactive indoor navigation application',
      company: 'SaM Solutions',
      position: 'Senior Software Engineer',
      companyLink: 'https://www.sam-solutions.com/',
      period: 'July 2020 — July 2021',
      description:
        'Interactive map application for shopping malls and warehouses. The application allowed users to navigate through the premises with ease and showcases key points of interest.',
      achievements: [
        'Implemented routing and pathfinding logic that enabled accurate indoor navigation and improved user engagement metrics by ~50%.',
        'Maintained 80%+ automated test coverage across core features, improving developer confidence and lowering regression counts by ~30%.',
        'Bootstrapped the project and grew the frontend team from 1 to 5 engineers, guiding the architectural direction and development practices.',
      ],
      tech: ['React', 'Leaflet.js', 'Node.js', 'PostgreSQL'],
    },
    {
      title: 'Platform for data-driven sales insights',
      company: 'Itransition',
      position: 'Senior Software Engineer',
      companyLink: 'https://www.itransition.com/',
      period: 'June 2019 — July 2020',
      description:
        'Analytics tool for transforming healthcare data into visual sales insights.',
      achievements: [
        'Modernized a monolithic healthcare analytics application into microfrontends, allowing independent deployments and cutting delivery cycles by 40-50%.',
        'Maintained 80%+ automated test coverage across core features, improving developer confidence and lowering regression counts by ~30%.',
        'Bootstrapped the project and grew the frontend team from 1 to 5 engineers, guiding the architectural direction and development practices.',
      ],
      tech: ['Angular', 'RxJS', 'Node.js', 'PostgreSQL'],
    },
  ],
}
