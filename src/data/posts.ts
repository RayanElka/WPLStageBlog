import type { Post } from "../types";

export const posts: Post[] = [
  {
    id: "1",
    week: 1,
    title: "Start & Eerste Tickets",
    dateRange: "02 feb - 09 feb",
    excerpt:
      "Week 1: installaties, sprint/scrum meetings, codebase verkenning en de eerste frontend tickets.",
    content:
      "Mijn stage bij het bedrijf is officieel begonnen. De eerste week stond in het teken van een vlotte start en meteen meedraaien.\n\nDag 1: installaties afgerond en de eerste sprint meeting + scrum meeting bijgewoond.\nDag 2: samen de codebase bekeken en twee front-end tickets opgepakt: (1) container line code display in de transport overview, (2) ToDo check column.\n\nDe eerste indruk: veel context oppikken, maar ook direct bijdragen met concrete taken.",
    achievements: [
      "Installaties en environment setup afgerond",
      "Sprint meeting en scrum meeting bijgewoond",
      "Codebase samen verkend",
      "2 front-end tickets opgepakt",
    ],
    technologies: ["React", "TypeScript", "Git", "Figma"],
    tags: ["onboarding", "setup", "analyse"],
    imageUrl: "",
  },
  {
    id: "2",
    week: 2,
    title: "Component Library & Design System",
    dateRange: "09 feb - 16 feb",
    excerpt:
      "Deep dive in het design system en het bouwen van herbruikbare componenten.",
    content:
      "Deze week stond in het teken van het design system. Ik heb geleerd hoe belangrijk consistentie is in een grote applicatie, en hoe een goed design system dit mogelijk maakt.\n\nIk heb verschillende componenten gebouwd zoals buttons, inputs en cards, allemaal volgens de design tokens van het bedrijf. Het was interessant om te zien hoe accessibility en responsive design hierbij een rol spelen.\n\nDaarnaast heb ik mijn eerste code review gehad. Spannend maar leerzaam! De feedback was constructief en ik heb veel geleerd over best practices.",
    achievements: [
      "10+ herbruikbare componenten gebouwd",
      "Storybook setup voor component library",
      "Eerste code review doorlopen",
      "Accessibility guidelines toegepast",
    ],
    technologies: ["React", "TypeScript", "Storybook", "CSS Modules", "Figma"],
    tags: ["frontend", "components", "design"],
    imageUrl: "",
  },
  {
    id: "3",
    week: 3,
    title: "API Integration & State Management",
    dateRange: "16 feb - 23 feb",
    excerpt:
      "Verbinden van de frontend met de backend API en het opzetten van state management.",
    content:
      "Week drie was technisch uitdagend maar zeer leerzaam. Ik ben begonnen met het integreren van de REST API in de frontend applicatie.\n\nHet opzetten van React Query voor data fetching was een eye-opener. Het maakt caching en synchronisatie van server state zoveel makkelijker. Ik heb ook geleerd over optimistic updates en error handling.\n\nDaaropvolgend ben ik een hardnekkige bug tegengekomen met race conditions. Na uren debuggen en sparren met mijn mentor, heb ik het opgelost door gebruik te maken van AbortController.",
    achievements: [
      "REST API volledig geïntegreerd",
      "React Query setup met caching",
      "Race condition bug opgelost",
      "Error boundaries geïmplementeerd",
    ],
    technologies: ["React Query", "Axios", "TypeScript", "REST API", "Zustand"],
    tags: ["backend", "api", "debugging"],
    imageUrl: "",
  },
  {
    id: "4",
    week: 4,
    title: "Testing & Code Quality",
    dateRange: "23 feb - 02 mrt",
    excerpt: "Unit tests schrijven, E2E testing en code quality verbeteren.",
    content:
      "Deze week draaide alles om kwaliteit. Ik heb geleerd hoe belangrijk tests zijn voor de maintainability van een project.\n\nIk ben begonnen met unit tests voor mijn componenten met Jest en React Testing Library. Het schrijven van goede tests blijkt een kunst op zich te zijn. Je moet nadenken over edge cases en user behavior.\n\nDaarnaast heb ik mijn eerste Cypress E2E tests geschreven. Het is fascinerend om te zien hoe de applicatie automatisch getest wordt alsof een echte gebruiker ermee werkt.",
    achievements: [
      "50+ unit tests geschreven",
      "E2E test suite opgezet",
      "Code coverage naar 80% gebracht",
      "ESLint & Prettier geconfigureerd",
    ],
    technologies: [
      "Jest",
      "React Testing Library",
      "Cypress",
      "ESLint",
      "Prettier",
    ],
    tags: ["testing", "quality", "automation"],
    imageUrl: "",
  },
  {
    id: "5",
    week: 5,
    title: "Teambuilding & Retrospective",
    dateRange: "02 mrt - 09 mrt",
    excerpt:
      "Een week van samenwerking, teambuilding en reflectie op de voortgang.",
    content:
      "Deze week was anders dan de vorige weken. We hadden een teambuilding event waarbij het hele development team ging bowlen en daarna uit eten ging.\n\nHet was goed om iedereen eens in een andere setting te leren kennen. Je merkt dat zo'n event echt de teamspirit versterkt. We hebben veel gelachen en verhalen gedeeld.\n\nDaarnaast hadden we ook een retrospective waarin we de afgelopen weken bespraken. Ik heb waardevolle feedback gekregen op mijn werk en geleerd waar ik me de komende weken op moet focussen.",
    achievements: [
      "Team bonding versterkt",
      "Retrospective feedback verwerkt",
      "Persoonlijke ontwikkelplan gemaakt",
      "Nieuwe leerdoelen gesteld",
    ],
    technologies: ["Scrum", "Agile", "Retrospective", "Teamwork"],
    tags: ["teambuilding", "reflection", "soft-skills"],
    imageUrl: "",
  },
];
