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
        viewPhoto: "View photo",
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
        feature: "Feature",
        email: "Email",
        translation: "Translation",
        bugfix: "Bugfix",
        statusupdate: "Status Updates",
        billing: "Billing",
      },
      posts: {
        "1": {
          title: "Start & First Tickets",
          dateRange: "Feb 02 - Feb 08",
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
        "2": {
          title: "BCC & Bulk Mail",
          dateRange: "Feb 09 - Feb 15",
          excerpt:
            "Week 2: Info column PR, BCC support in the mail system, and the first steps toward mail-to-all with batching and language defaults.",
          content:
            "My second week started with finishing the Info column improvements and submitting the pull request. I then worked on adding a BCC field to the mail system. The tricky part was allowing a message to be sent when only BCC is filled and the To field is empty, which took some experimentation. Midweek I kept refining the BCC behavior. By the end of the week the BCC option was fully finished and I started the mail-to-all feature for suppliers and customers. To handle large volumes I implemented chunked sending (300 emails per batch). I also added translation defaults so mixed-language recipients still receive a message with the right fallbacks when multiple languages are needed.",
          achievements: [
            "Finalized Info column updates and submitted the PR",
            "Implemented a BCC field in the mail system",
            "Enabled sending when only BCC is filled and To is empty",
            "Refined BCC behavior and edge cases",
            "Started mail-to-all for suppliers and customers",
            "Added chunked sending (300 emails per batch)",
            "Added translation defaults for mixed-language recipients",
          ],
        },
        "3": {
          title: "Mail-to-All Polish & Status Update Fixes",
          dateRange: "Feb 16 - Feb 22",
          excerpt:
            "Week 3: mail-to-all improvements, Christmas theme disabled, and a series of fixes on the status update page.",
          content:
            "The week started with several bugfixes and improvements on mail-to-all: a richer template with banner and logo, and chunk size set to 250 for better performance. I finished the mail-to-all ticket and added a boolean to disable the Christmas theme in the right places. The rest of the week I focused on the status update page: hiding pickup/delivery references via company preferences (initially only for LTC Logistics B.V.), de-duplicating email addresses across multiple trips, providing pickup ETA when no load/unload ETA exists, flagging late drivers when ETA exceeds appointment time, adding my own email in BCC, and adding an import/export column (Load = Export, Unload = Import). I also investigated a bug where sending time sometimes takes too long or fails, and added next-waypoint status (custom and weight status still pending). Finally, I finished the ticket to include customer reference in invoice email titles for single-transport invoices.",
          achievements: [
            "Improved mail-to-all template (banner + logo) and batching (250 per chunk)",
            "Completed mail-to-all ticket",
            "Disabled Christmas theme via a boolean flag",
            "Applied status update fixes: references, deduped emails, ETA logic, late-driver indicator",
            "Added import/export column and BCC self",
            "Investigated long/failed time-sending bug",
            "Added next-waypoint status (custom/weight pending)",
            "Completed invoice email title with customer reference (single transport)",
          ],
        },
        "4": {
          title: "Truck Sorting & Status Update Bundle",
          dateRange: "Feb 23 - Mar 01",
          excerpt:
            "Week 4: fixed truck number sorting and tackled a large bundle of status update changes, plus a new petrol cost ticket.",
          content:
            "I started the week by fixing a sorting bug: truck numbers were sorting only by digits and ignoring trailing letters. Then I worked through a larger status update bundle: hiding pickup/delivery references for LTC Logistics B.V., removing duplicate emails across multiple trips, adding pickup ETA when load/unload ETA is missing, marking late drivers when ETA exceeds appointment time (also in the mail), adding my own email in BCC, adding an import/export column (Load = Export, Unload = Import), improving slow/failed time sending, adding next-waypoint status (custom and weight status still pending), and sending from Trans-IT instead of downloading and opening an email. I wrapped most of this by Thursday. On Friday I picked up a new ticket to add a petrol cost.",
          achievements: [
            "Fixed truck number sorting for letter suffixes",
            "Delivered a large status update bundle (UI + email changes)",
            "Added import/export column and late-driver messaging in mail",
            "Improved slow/failed time sending behavior",
            "Added next-waypoint status (custom/weight pending)",
            "Started petrol cost ticket",
          ],
        },
        "5": {
          title: "Petrol Cost & Billing Exports",
          dateRange: "Mar 02 - Mar 08",
          excerpt:
            "Week 5: finished petrol cost, applied review feedback, added export-to-Excel for billing, and fixed several bugs.",
          content:
            "I completed the petrol cost ticket, then applied changes from the tech review on the status update work. I added a warning when a container number already exists (duplicate), and implemented extra save-transport buttons: save + send to app, and send to app + print. I also handled a larger billing ticket to export invoice overview and invoice transport to Excel in the correct language. On Wednesday I attended the Moving Forward event, spoke with the companies I wanted to meet, and also connected with a few new interesting ones. I closed the week with two small fixes: waiting-time status staying red even when resolved, and chat timestamps switching from 12-hour (AM/PM) to 24-hour format.",
          achievements: [
            "Finished petrol cost ticket",
            "Applied tech review changes to status updates",
            "Added duplicate container-number warning",
            "Added save + send and send + print actions for transport",
            "Enabled billing exports to Excel with correct language",
            "Attended the Moving Forward event and made new connections",
            "Fixed waiting-time status color bug",
            "Switched chat timestamps to 24-hour format",
          ],
        },
        "6": {
          title: "Guardrails & Consistency Fixes",
          dateRange: "Mar 09 - Mar 15",
          excerpt:
            "Week 6: small guardrails and consistency fixes that reduce errors and keep data stable.",
          content:
            "Week 6 was all about guardrails and consistency. I fixed a status mismatch where a green clock looked correct on the order but still appeared red in the search overview. I also made sure orders can’t be edited once a PO or invoice is set to SENT (moving it back to draft unlocks it), and added automatic locking for predefined options so the flow stays consistent. These are small changes on paper, but they remove confusion and prevent accidental edits across the system.",
          achievements: [
            "Fixed status mismatch (green clock vs red in search overview)",
            "Blocked edits when PO/invoice is SENT (draft unlock)",
            "Added auto-locking for predefined options",
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
        viewPhoto: "Bekijk foto",
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
        feature: "Functionaliteit",
        email: "E-mail",
        translation: "Vertaling",
        bugfix: "Bugfix",
        statusupdate: "Statusupdates",
        billing: "Facturatie",
      },
      posts: {
        "1": {
          title: "Start & Eerste Tickets",
          dateRange: "02 feb - 08 feb",
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
        "2": {
          title: "BCC & Mail to All",
          dateRange: "09 feb - 15 feb",
          excerpt:
            "Week 2: Info column PR, BCC-ondersteuning in het mailsysteem en de eerste stappen richting mail-to-all met batching en taal-standaarden.",
          content:
            "Mijn tweede week begon met het afronden van de Info column verbeteringen en het indienen van de pull request. Daarna werkte ik aan een BCC-veld in het mailsysteem. De lastigste case was dat een mail ook verstuurd moet worden wanneer enkel BCC is ingevuld en het To-veld leeg blijft, wat een paar iteraties vergde. Halverwege de week heb ik de BCC-logica verder verfijnd. Tegen het einde van de week was de BCC-optie volledig afgewerkt en ben ik gestart met de mail-to-all functionaliteit voor suppliers en customers. Om grote volumes aan te kunnen heb ik chunked sending toegevoegd (300 mails per batch). Ik heb ook vertaal-standaarden toegevoegd zodat recipients met verschillende talen toch een boodschap krijgen met de juiste fallbacks waar meerdere talen nodig zijn.",
          achievements: [
            "Info column updates afgerond en PR ingediend",
            "BCC-veld toegevoegd aan het mailsysteem",
            "Verzenden mogelijk gemaakt met enkel BCC en leeg To-veld",
            "BCC-logica en edge cases verfijnd",
            "Gestart met mail-to-all voor suppliers en customers",
            "Chunked sending toegevoegd (300 mails per batch)",
            "Vertaal-standaarden toegevoegd voor gemengde talen",
          ],
        },
        "3": {
          title: "Mail-to-All Polish & Statusupdate Fixes",
          dateRange: "16 feb - 22 feb",
          excerpt:
            "Week 3: verbeteringen aan mail-to-all, kerstthema uitgezet en een reeks fixes op de statusupdate pagina.",
          content:
            "De week startte met bugfixes en improvements op mail-to-all: een beter ingevulde template met banner en logo, en de chunk size op 250 gezet voor optimalisatie. Ik rondde het mail-to-all ticket af en zette het kerstthema uit met een boolean op de juiste plaatsen. Daarna werkte ik verder aan de statusupdate pagina: referenties (op- en afhaal ref) weg via bedrijfsvoorkeuren (voorlopig alleen voor LTC Logistics B.V.), dubbele email adressen verwijderen over meerdere ritten, pickup ETA meegeven als er nog geen ETA is voor laden of lossen, duidelijk maken wanneer ETA later is dan het afspraakuur (chauffeur te laat), eigen email in BCC zetten, en een import/export kolom toevoegen (Load = Export, Unload = Import). Ik onderzocht ook een bug waar het doorgeven van uur soms lang duurt of faalt, en ik gaf de status van de volgende waypoint mee (custom en weight status moeten nog toegevoegd worden). Tot slot heb ik het ticket afgewerkt om klantref mee te geven in de titel van de factuurverzending bij 1 transport op 1 factuur.",
          achievements: [
            "Mail-to-all template verbeterd (banner + logo) en chunking op 250",
            "Mail-to-all ticket afgerond",
            "Kerstthema uitgezet via boolean",
            "Statusupdate fixes: referenties, dedupe emails, ETA-logica, te-laat indicator",
            "Import/export kolom toegevoegd en eigen email in BCC",
            "Bug onderzocht: uur meegeven duurt soms lang of faalt",
            "Status van volgende waypoint toegevoegd (custom/weight pending)",
            "Klantref toegevoegd aan factuurverzending titel (1 transport/1 factuur)",
          ],
        },
        "4": {
          title: "Truck Sort & Statusupdate Bundle",
          dateRange: "23 feb - 01 mrt",
          excerpt:
            "Week 4: bugfix voor truck-number sorting, grote statusupdate bundel en start van een petrol cost ticket.",
          content:
            "Ik begon de week met een bug: de sort bij truck numbers sorteerde enkel op nummer en niet op de letters erna. Daarna kreeg ik een groter ticket met meerdere kleinere statusupdate changes: referenties weg via bedrijfsvoorkeuren (voorlopig enkel LTC Logistics B.V.), dubbele email adressen dedupliceren over meerdere ritten, pickup ETA meegeven bij ontbrekende load/unload ETA, aangeven dat de chauffeur te laat is als ETA later is dan afspraakuur (ook in mail), eigen email in BCC zetten, import/export kolom toevoegen (Load = Export, Unload = Import), bugfix voor traag/fail uur meegeven, status van volgende waypoint meegeven (custom en weight status nog toe te voegen), en verzenden vanuit Trans-IT i.p.v. email te downloaden en te openen. Hier was ik tot donderdag mee bezig. Vrijdag heb ik een ticket opgepakt om een nieuwe kost toe te voegen: petrol kost.",
          achievements: [
            "Truck-number sorting gefikst (letters mee gesorteerd)",
            "Statusupdate bundle grotendeels afgewerkt",
            "Late-ETA melding toegevoegd (ook in mail)",
            "Import/export kolom toegevoegd",
            "Verzenden vanuit Trans-IT i.p.v. downloaden",
            "Petrol kost ticket gestart",
          ],
        },
        "5": {
          title: "Petrol Kost & Facturatie Export",
          dateRange: "02 mrt - 08 mrt",
          excerpt:
            "Week 5: petrol kost afgerond, review feedback verwerkt, export naar Excel voor facturatie en meerdere bugfixes.",
          content:
            "Ik werkte het ticket van de petrol kost volledig af. Daarna paste ik wijzigingen toe na de tech review op de statusupdate tickets. Ik kreeg een ticket om een melding te geven wanneer een containernummer al bestaat (dubbel). Ook een ticket om extra knoppen te voorzien in het save transport: opslaan en direct naar de app sturen, en direct naar de app sturen en afprinten. Vervolgens kwam een groter ticket rond facturatie overzicht en facturatie transport: export naar Excel mogelijk maken en dit in de juiste taal. Op woensdag ben ik naar het Moving Forward-event geweest; ik sprak de bedrijven die ik wou spreken en leerde ook enkele nieuwe interessante bedrijven kennen. Tot slot werkte ik twee kleinere bugs af: waiting time bleef rood terwijl het in orde was, en de tijdsweergave in chat stond in 12-uurs formaat en moest naar 24-uurs formaat.",
          achievements: [
            "Petrol kost ticket afgerond",
            "Tech review feedback op statusupdates verwerkt",
            "Melding bij dubbel containernummer toegevoegd",
            "Extra save-transport knoppen toegevoegd",
            "Facturatie export naar Excel met juiste taal",
            "Moving Forward-event bezocht en nieuwe contacten gelegd",
            "Bugfix: waiting time bleef rood",
            "Chat timestamps naar 24-uurs formaat gezet",
          ],
        },
        "6": {
          title: "Guardrails & Consistentie",
          dateRange: "09 mrt - 15 mrt",
          excerpt:
            "Week 6: guardrails en consistentie fixes die fouten voorkomen en data stabiel houden.",
          content:
            "Week 6 draaide volledig om guardrails en consistentie. Ik fixte een status mismatch waarbij een groen klokje in het order klopte, maar in het zoekoverzicht toch rood bleef. Daarnaast blokkeerde ik wijzigingen zodra PO's of facturen op SENT staan (terugzetten naar draft unlockt), en werkte ik aan het automatisch locken van vooraf gedefinieerde opties zodat de flow consistenter blijft. Het zijn kleine ingrepen, maar ze voorkomen fouten en maken de tool betrouwbaarder.",
          achievements: [
            "Bugfix groen klokje vs rood in zoekoverzicht",
            "Wijzigingen geblokkeerd bij PO/factuur op SENT (draft unlock)",
            "Automatisch locken van vooraf gedefinieerde opties",
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
        viewPhoto: "Voir la photo",
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
        feature: "Fonctionnalite",
        email: "Email",
        translation: "Traduction",
        bugfix: "Bugfix",
        statusupdate: "Mises a jour statut",
        billing: "Facturation",
      },
      posts: {
        "1": {
          title: "Demarrage & Premiers Tickets",
          dateRange: "02 fev - 08 fev",
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
        "2": {
          title: "BCC & Envoi en masse",
          dateRange: "09 fev - 15 fev",
          excerpt:
            "Semaine 2: PR Info column, ajout du BCC dans le systeme mail, et debut du mail-to-all avec envoi par lots et defaults de langue.",
          content:
            "Ma deuxieme semaine a commence par la finalisation des ameliorations de la Info column et l'envoi de la pull request. Ensuite j'ai travaille sur l'ajout d'un champ BCC dans le systeme mail. Le point le plus difficile etait de permettre l'envoi quand seul le BCC est rempli et que le champ To reste vide, ce qui a demande plusieurs essais. Au milieu de la semaine, j'ai continue a affiner le comportement du BCC. En fin de semaine, l'option BCC etait terminee et j'ai commence la fonctionnalite mail-to-all pour suppliers et customers. Pour gerer de grands volumes, j'ai mis en place un envoi par lots (300 emails par batch). J'ai aussi ajoute des defaults de traduction pour que des destinataires avec des langues differentes recoivent un message avec les bons fallbacks quand plusieurs langues sont necessaires.",
          achievements: [
            "Ameliorations Info column finalisees et PR envoyee",
            "Champ BCC ajoute au systeme mail",
            "Envoi possible avec seulement BCC et champ To vide",
            "Comportement BCC et cas limites affines",
            "Debut du mail-to-all pour suppliers et customers",
            "Envoi par lots ajoute (300 emails par batch)",
            "Defaults de traduction ajoutes pour langues mixtes",
          ],
        },
        "3": {
          title: "Mail-to-All & Correctifs Status Update",
          dateRange: "16 fev - 22 fev",
          excerpt:
            "Semaine 3: ameliorations mail-to-all, theme de Noel desactive et correctifs sur la page status update.",
          content:
            "La semaine a commence par des correctifs et ameliorations sur mail-to-all: template enrichi (banniere + logo) et taille de batch a 250. J'ai termine le ticket mail-to-all et desactive le theme de Noel via un booleen aux bons endroits. Ensuite, j'ai travaille sur la page status update: suppression des references pickup/delivery via preferences d'entreprise (d'abord pour LTC Logistics B.V.), suppression des emails doubles sur plusieurs trajets, ajout du pickup ETA quand il n'y a pas d'ETA load/unload, indication de retard quand l'ETA depasse l'heure de rendez-vous, ajout de mon email en BCC, et ajout d'une colonne import/export (Load = Export, Unload = Import). J'ai aussi examine un bug ou l'envoi de l'heure est lent ou echoue, et j'ai ajoute le statut du waypoint suivant (custom et weight encore a ajouter). Enfin, j'ai termine le ticket pour inclure la reference client dans le titre d'envoi de facture pour 1 transport sur 1 facture.",
          achievements: [
            "Template mail-to-all ameliore (banniere + logo) et batches de 250",
            "Ticket mail-to-all termine",
            "Theme de Noel desactive via booleen",
            "Correctifs status update: references, dedupe emails, ETA, retard",
            "Ajout colonne import/export et BCC personnel",
            "Investigation bug: envoi de l'heure lent ou en echec",
            "Statut du waypoint suivant ajoute (custom/weight pending)",
            "Reference client ajoutee au titre d'envoi de facture",
          ],
        },
        "4": {
          title: "Tri Camions & Bundle Status Update",
          dateRange: "23 fev - 01 mars",
          excerpt:
            "Semaine 4: correctif du tri des camions et gros bundle de changements sur status update, puis ticket petrol cost.",
          content:
            "J'ai commence la semaine avec un bug de tri: les truck numbers triaient uniquement par chiffres, pas par lettres. Ensuite j'ai pris un grand ticket avec plusieurs changements status update: references pickup/delivery masquees (d'abord pour LTC Logistics B.V.), suppression des emails doubles, ajout du pickup ETA quand l'ETA load/unload manque, indication de retard quand l'ETA depasse l'heure (aussi dans l'email), ajout de mon email en BCC, colonne import/export (Load = Export, Unload = Import), correction du bug d'envoi d'heure lent, statut du waypoint suivant (custom/weight a ajouter), et envoi depuis Trans-IT au lieu de telecharger et ouvrir un email. J'etais dessus jusque jeudi. Vendredi j'ai recu un ticket pour ajouter une nouvelle cout: petrol cost.",
          achievements: [
            "Tri des truck numbers corrige (lettres incluses)",
            "Bundle status update avance",
            "Ajout retard ETA dans l'email",
            "Colonne import/export ajoutee",
            "Envoi depuis Trans-IT",
            "Ticket petrol cost demarre",
          ],
        },
        "5": {
          title: "Petrol Cost & Exports Facturation",
          dateRange: "02 mars - 08 mars",
          excerpt:
            "Semaine 5: petrol cost termine, retours de review integres, exports Excel facturation, et plusieurs correctifs.",
          content:
            "J'ai termine le ticket petrol cost, puis applique les changements apres la tech review sur status update. J'ai ajoute une alerte quand un numero de container existe deja (doublon). J'ai aussi ajoute des boutons pour save transport: enregistrer + envoyer vers l'app, et envoyer vers l'app + imprimer. Ensuite, gros ticket facturation: export Excel du resume de facturation et du transport, avec la bonne langue. Mercredi, j'ai participe a l'evenement Moving Forward, j'ai parle avec les entreprises que je voulais rencontrer et j'ai aussi decouvert de nouvelles entreprises interessantes. Enfin, deux petits bugs: waiting time restait rouge alors que c'etait OK, et l'heure dans le chat passait de 12h (AM/PM) a 24h.",
          achievements: [
            "Ticket petrol cost termine",
            "Changements post-review sur status update integres",
            "Alerte doublon numero de container",
            "Boutons save + send et send + print ajoutes",
            "Exports Excel facturation avec bonne langue",
            "Evenement Moving Forward suivi et nouveaux contacts",
            "Bug waiting time rouge corrige",
            "Horodatage du chat passe en 24h",
          ],
        },
        "6": {
          title: "Garde-fous & Cohérence",
          dateRange: "09 mar - 15 mar",
          excerpt:
            "Semaine 6: garde-fous et correctifs de coherence pour reduire les erreurs.",
          content:
            "Cette semaine etait axee sur les garde-fous et la coherence. J'ai corrige un decalage de statut ou une icone d'horloge etait verte dans l'ordre mais restait rouge dans la recherche. J'ai aussi bloque les modifications quand un PO ou une facture est en SENT (retour a draft pour debloquer) et ajoute le verrouillage automatique des options predefinies pour garder un flux cohérent. Ce sont de petites modifications, mais elles reduisent les erreurs et renforcent la fiabilite.",
          achievements: [
            "Correctif d'indicateur (clock vert/rouge dans la recherche)",
            "Blocage des modifications quand PO/facture en SENT (draft unlock)",
            "Verrouillage automatique de choix predefinis",
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
