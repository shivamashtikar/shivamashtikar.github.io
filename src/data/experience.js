export const experiences = [
  {
    company: 'Juspay',
    companyUrl: 'https://juspay.io/in',
    location: 'India',
    overview: '7+ years across AI Infrastructure, Full-Stack Platforms, and Payments',
    roles: [
      {
        title: 'SDE II',
        period: 'Mar 2023 – Present',
        isCurrent: true,
        teams: [
          {
            name: 'Xyne - AI Infrastructure',
            period: '2025 – Present',
            focus: 'LLM Inference & MLOps',
            achievements: [
              {
                text: 'Spearheaded AI Infrastructure team deploying open-weight LLMs on 8x H200 GPU nodes with vLLM and SGLang',
                highlight: '8x H200 GPU nodes',
              },
              {
                text: 'Patched vLLM for Kimi K2.5 compatibility, achieving production deployment within one week of release',
                highlight: 'Production in 1 week',
              },
              {
                text: 'Led cross-functional teams (Frontend, Backend, QA) to deliver the open-source Xyne platform',
                highlight: 'open-source Xyne platform',
              },
            ],
            technologies: ['vLLM', 'SGLang', 'LiteLLM', 'VespaDB', 'Ray', 'H200 GPUs'],
          },
          {
            name: 'Euler Dashboard',
            period: '2023 – 2025',
            focus: 'Full-Stack Platform Leadership',
            achievements: [
              {
                text: 'Led Backend and Frontend teams, mentoring engineers and driving technical excellence',
                highlight: null,
              },
              {
                text: 'Reduced production bugs by 90% through Canary deployment strategy',
                highlight: '90% bug reduction',
              },
              {
                text: 'Integrated enterprise features: Slack API, OAuth 2.0, Passkey, and Google SSO',
                highlight: null,
              },
            ],
            technologies: ['Haskell', 'ReScript', 'React', 'Jenkins', 'Kubernetes'],
          },
        ],
      },
      {
        title: 'SDE I',
        period: 'Jun 2021 – Mar 2023',
        isCurrent: false,
        summary:
          'Led Payment Page engineering team. Reduced PureScript compile time by 6× through strategic refactoring. Built DevTools application for payment flow verification.',
        keyHighlight: '6× faster compile times',
        technologies: ['PureScript', 'React', 'Jenkins', 'Katalon'],
      },
      {
        title: 'Associate SDE',
        period: 'Jul 2019 – Jun 2021',
        isCurrent: false,
        summary:
          'Full-stack payments development. Improved Android render time by 66% with pre-rendering. Migrated data pipeline from Python to Haskell using Streamly.',
        keyHighlight: '66% render improvement',
        technologies: ['Android', 'Python', 'Haskell', 'Streamly', 'Kubernetes'],
      },
      {
        title: 'FP Developer Intern',
        period: 'Dec 2018 – Feb 2019',
        isCurrent: false,
        summary:
          'Enhanced cross-platform framework performance by 10% through JS-Java bridge optimization.',
        keyHighlight: '10% performance gain',
        technologies: ['JavaScript', 'Java', 'Android'],
      },
    ],
  },
];

export default { experiences };
