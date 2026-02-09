import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About & Internship",
        devlog: "DevLog",
        languageLabel: "Language",
      },
      hero: {
        badge: "System Online: Internship 2026",
        titleMain: "Dev Journey",
        titleSub: "> Start_Logging...",
        description:
          "The portfolio and logbook of my WPL internship. Follow my progress, check out my code snippets, and learn from my mistakes and successes.",
        readDevlog: "Read DevLog",
        aboutCta: "./about_me.sh",
      },
      sections: {
        latestLog: "Latest_Log",
        viewAllLogs: "view_all_logs()",
      },
      labels: {
        company: "COMPANY",
        location: "LOCATION",
        role: "ROLE",
        duration: "DURATION",
        filterByTag: "FILTER BY TAG",
        timeline: "TIMELINE",
        week: "Week {{week}}",
        readMore: "Read more",
        keyAchievements: "KEY ACHIEVEMENTS",
        technologiesUsed: "TECHNOLOGIES USED",
        all: "All",
      },
      footer: {
        rights: "All rights reserved.",
        buildStatusLabel: "Build Status",
        buildStatusValue: "Passing",
        versionLabel: "Version",
      },
      about: {
        heading: "About_Me",
        profileRole: "Full Stack Student",
        techStack: "Tech Stack",
        description:
          "I am a passionate programming student who is always looking for the 'why' behind the code. During my studies I developed a love for clean code and intuitive user interfaces. This internship is my chance to turn theory into production-ready software.",
        stageTitle: "Internship Details",
        objectivesTitle: "Learning Objectives",
        roleValue: "Intern",
        durationValue: "Feb '26 - Jun '26",
        objectives: [
          "Gain in-depth knowledge of React and TypeScript",
          "Build experience with AWS cloud services",
        ],
      },
      blog: {
        titlePrefix: "Building",
        titleHighlight: "Experience",
        titleSuffix: "at Trans-IT.",
        subtitle:
          "A 15-week journey through frontend development, backend integration, and professional software engineering. From first analysis to production deployment.",
        roleValue: "Intern",
        durationValue: "15 Weeks",
      },
      tags: {
        onboarding: "Onboarding",
        setup: "Setup",
        analysis: "Analysis",
      },
      posts: {
        "1": {
          title: "Start & First Tickets",
          dateRange: "Feb 02 - Feb 09",
          excerpt:
            "Week 1: installations, sprint/scrum meetings, codebase exploration, and the first frontend tickets.",
          content:
            "My internship at the company officially started and the first week was all about a smooth start and immediately joining in. After finishing the installations and attending the sprint and scrum meetings, I explored the codebase with my internship mentor Ismat and picked up two front-end tickets right away (container line code display in the transport overview and the ToDo check column). I completed the container line code ticket, opened a pull request for the ToDo check, and then received a new ticket to expand the goods info with waste transport. Later in the week I fixed the translation of the Info column and tightened the functionality. For waypoints I added an option so you can add an extra transport for all orders at once via a button, with a selected type shown in a popover. Challenges: the codebase is large, so it still takes time to navigate smoothly. The first impression remains positive: lots of context to absorb, but also direct contributions with concrete tasks.",
          achievements: [
            "Completed installations and environment setup",
            "Attended sprint meeting and scrum meeting",
            "Explored the codebase with internship mentor Ismat",
            "Resolved multiple front-end tickets",
            "Finished the container line code ticket",
            "Opened a PR for the ToDo check ticket",
            "Improved Info column translation and functionality",
            "Added waypoint option for extra transport (popover)",
            "Received new ticket: expand goods info with waste transport",
          ],
        },
      },
    },
  },
  nl: {
    translation: {
      nav: {
        home: "Home",
        about: "Over & Stage",
        devlog: "DevLog",
        languageLabel: "Taal",
      },
      hero: {
        badge: "System Online: Stage 2026",
        titleMain: "Dev Journey",
        titleSub: "> Start_Logging...",
        description:
          "Het portfolio en logboek van mijn WPL-stage. Volg mijn voortgang, bekijk mijn code snippets en leer mee van mijn fouten en successen.",
        readDevlog: "Lees DevLog",
        aboutCta: "./over_mij.sh",
      },
      sections: {
        latestLog: "Laatste_Log",
        viewAllLogs: "bekijk_alle_logs()",
      },
      labels: {
        company: "BEDRIJF",
        location: "LOCATIE",
        role: "ROL",
        duration: "DUUR",
        filterByTag: "FILTER OP TAG",
        timeline: "TIJDLIJN",
        week: "Week {{week}}",
        readMore: "Lees meer",
        keyAchievements: "BELANGRIJKSTE PRESTATIES",
        technologiesUsed: "GEBRUIKTE TECHNOLOGIEEN",
        all: "Alles",
      },
      footer: {
        rights: "Alle rechten voorbehouden.",
        buildStatusLabel: "Build Status",
        buildStatusValue: "In orde",
        versionLabel: "Versie",
      },
      about: {
        heading: "Over_Mij",
        profileRole: "Full Stack Student",
        techStack: "Tech Stack",
        description:
          "Ik ben een gepassioneerde student programmeren die altijd op zoek is naar de 'waarom' achter de code. Tijdens mijn studie heb ik een liefde ontwikkeld voor clean code en intuitieve user interfaces. Deze stage is voor mij de kans om de theorie om te zetten naar productie-klare software.",
        stageTitle: "Stage Details",
        objectivesTitle: "Leerdoelen",
        roleValue: "Stagiair",
        durationValue: "Feb '26 - Jun '26",
        objectives: [
          "Diepgaande kennis van React en TypeScript opdoen",
          "Ervaring met AWS cloud services verzamelen",
        ],
      },
      blog: {
        titlePrefix: "Bouwen aan",
        titleHighlight: "Ervaring",
        titleSuffix: "bij Trans-IT.",
        subtitle:
          "Een 15-weken durende reis door frontend development, backend integratie en professionele software engineering. Van eerste analyse tot productie deployment.",
        roleValue: "Stagiair",
        durationValue: "15 Weken",
      },
      tags: {
        onboarding: "Onboarding",
        setup: "Setup",
        analysis: "Analyse",
      },
      posts: {
        "1": {
          title: "Start & Eerste Tickets",
          dateRange: "02 feb - 09 feb",
          excerpt:
            "Week 1: installaties, sprint/scrum meetings, codebase verkenning en de eerste frontend tickets.",
          content:
            "Mijn stage bij het bedrijf is officieel begonnen en de eerste week stond in het teken van een vlotte start en meteen meedraaien. Na het afronden van de installaties en het bijwonen van de sprint- en scrummeetings heb ik samen met mijn stagementor Ismat de codebase verkend en meteen twee front-end tickets opgepakt (container line code display in de transport overview en de ToDo check column). Ik rondde het container line code ticket af, diende een pull request in voor de ToDo-check en kreeg aansluitend een nieuw ticket om de goods info uit te breiden met afval transport. Later in de week heb ik de vertaling van de Info column gefikst en de functionaliteit aangescherpt. Bij waypoints voegde ik een optie toe zodat je via een knop een extra transport kan toevoegen tegelijk bij al je orders, met een gekozen type dat verschijnt via een popover. Moeilijkheden: de codebase is groot, dus het kost me nog wat tijd om vlot te navigeren. De eerste indruk blijft positief: veel context oppikken, maar ook direct bijdragen met concrete taken.",
          achievements: [
            "Installaties en environment setup afgerond",
            "Sprint meeting en scrum meeting bijgewoond",
            "Codebase verkend met stagementor Ismat",
            "Meerdere front-end tickets opgelost",
            "Container line code ticket afgerond",
            "PR ingediend voor ToDo check ticket",
            "Info column vertaling en functionaliteit verbeterd",
            "Waypoint optie toegevoegd voor extra transport (popover)",
            "Nieuw ticket ontvangen: goods info uitbreiden met afval transport",
          ],
        },
      },
    },
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        about: "A propos & Stage",
        devlog: "DevLog",
        languageLabel: "Langue",
      },
      hero: {
        badge: "System Online: Stage 2026",
        titleMain: "Dev Journey",
        titleSub: "> Start_Logging...",
        description:
          "Le portfolio et le journal de mon stage WPL. Suivez mes progres, voyez mes extraits de code, et apprenez de mes erreurs et reussites.",
        readDevlog: "Lire DevLog",
        aboutCta: "./a_propos_de_moi.sh",
      },
      sections: {
        latestLog: "Dernier_Log",
        viewAllLogs: "voir_tous_les_logs()",
      },
      labels: {
        company: "ENTREPRISE",
        location: "LIEU",
        role: "ROLE",
        duration: "DUREE",
        filterByTag: "FILTRER PAR TAG",
        timeline: "CHRONOLOGIE",
        week: "Semaine {{week}}",
        readMore: "Lire la suite",
        keyAchievements: "PRINCIPALES REALISATIONS",
        technologiesUsed: "TECHNOLOGIES UTILISEES",
        all: "Tout",
      },
      footer: {
        rights: "Tous droits reserves.",
        buildStatusLabel: "Build Status",
        buildStatusValue: "OK",
        versionLabel: "Version",
      },
      about: {
        heading: "A_Propos",
        profileRole: "Full Stack Student",
        techStack: "Tech Stack",
        description:
          "Je suis un etudiant en programmation passionne, toujours a la recherche du 'pourquoi' derriere le code. Pendant mes etudes, j'ai developpe un gout pour le clean code et les interfaces utilisateur intuitives. Ce stage est pour moi l'occasion de transformer la theorie en logiciel pret pour la production.",
        stageTitle: "Details du Stage",
        objectivesTitle: "Objectifs d'apprentissage",
        roleValue: "Stagiaire",
        durationValue: "Feb '26 - Jun '26",
        objectives: [
          "Approfondir la connaissance de React et TypeScript",
          "Gagner de l'experience avec les services cloud AWS",
        ],
      },
      blog: {
        titlePrefix: "Construire",
        titleHighlight: "Experience",
        titleSuffix: "chez Trans-IT.",
        subtitle:
          "Un parcours de 15 semaines en frontend development, integration backend et ingenierie logicielle professionnelle. De la premiere analyse au deploiement en production.",
        roleValue: "Stagiaire",
        durationValue: "15 Semaines",
      },
      tags: {
        onboarding: "Onboarding",
        setup: "Setup",
        analysis: "Analyse",
      },
      posts: {
        "1": {
          title: "Demarrage & Premiers Tickets",
          dateRange: "02 fev - 09 fev",
          excerpt:
            "Semaine 1: installations, reunions sprint/scrum, exploration de la codebase et premiers tickets frontend.",
          content:
            "Mon stage dans l'entreprise a officiellement commence et la premiere semaine etait axee sur un bon demarrage et une integration immediate. Apres avoir termine les installations et assiste aux reunions sprint et scrum, j'ai explore la codebase avec mon mentor de stage Ismat et j'ai tout de suite pris deux tickets front-end (affichage du container line code dans la transport overview et la colonne ToDo check). J'ai termine le ticket container line code, ouvert une pull request pour le ToDo check, puis j'ai recu un nouveau ticket pour etendre les goods info avec le transport de dechets. Plus tard dans la semaine, j'ai corrige la traduction de la Info column et affine la fonctionnalite. Pour les waypoints, j'ai ajoute une option pour ajouter un transport supplementaire pour toutes les commandes via un bouton, avec un type choisi affiche dans un popover. Difficultes: la codebase est grande, donc il me faut encore du temps pour naviguer facilement. La premiere impression reste positive: beaucoup de contexte a absorber, mais aussi des contributions directes avec des taches concretes.",
          achievements: [
            "Installations et environment setup termines",
            "Participation aux reunions sprint et scrum",
            "Exploration de la codebase avec le mentor Ismat",
            "Resolution de plusieurs tickets front-end",
            "Ticket container line code termine",
            "PR ouverte pour le ticket ToDo check",
            "Traduction et fonctionnalite de Info column ameliorees",
            "Option waypoint ajoutee pour un transport supplementaire (popover)",
            "Nouveau ticket: etendre les goods info avec transport de dechets",
          ],
        },
      },
    },
  },
};

const supportedLanguages = ["en", "nl", "fr"];
const savedLanguage =
  typeof window !== "undefined" ? window.localStorage.getItem("lang") : null;
const initialLanguage =
  savedLanguage && supportedLanguages.includes(savedLanguage)
    ? savedLanguage
    : "en";

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: "en",
  supportedLngs: supportedLanguages,
  nonExplicitSupportedLngs: true,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

if (typeof document !== "undefined") {
  document.documentElement.lang = initialLanguage;
  i18n.on("languageChanged", (lng) => {
    document.documentElement.lang = lng;
  });
}

export default i18n;
