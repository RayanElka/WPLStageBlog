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
    technologies: ["React", "TypeScript", "Git", "AWS", "Amplify"],
    tags: ["onboarding", "setup", "analyse"],
    imageUrl: "",
  },
];
