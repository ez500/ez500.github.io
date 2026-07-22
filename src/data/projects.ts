export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  date: string;
  role: string;
  blurb: string;
  bullets: string[];
  tags: string[];
  links: ProjectLink[];
}

/**
 * Projects sourced from Eugene's resume + LinkedIn "About".
 * Ordered roughly by prominence / recency.
 */
export const projects: Project[] = [
  {
    title: "abid",
    date: "May 2026",
    role: "Contributor",
    blurb:
      "An efficient Discord-based web application focused on logistical management for Abide Christian Fellowship.",
    bullets: [
      "A bot utilizes Discord messaging API and user interactions to organize events, accomodations, and teams.",
      "A Sinatra-based web application supplements the bot to organize data for convenient viewing.",
    ],
    tags: ["discord.rb", "Ruby", "API", "Sinatra"],
    links: [{ label: "View Source", href: "https://github.com/wobschalli/abid" }],
  },
  {
    title: "Mr. Wutard",
    date: "Jun 2023",
    role: "Software Developer · BiGGDev",
    blurb:
      "A fun educational Discord application with seemingly endless insider easter eggs.",
    bullets: [
      "Users can ask the bot about any FRC programming topic, utilizing retrieval augmented generation (RAG) as a tool for the underlying agentic API.",
      "Commands as part of the Discord bot messaging API contain fun blurbs and info resembling a certain familiar figure.",
    ],
    tags: ["discord.py", "Python", "API"],
    links: [{ label: "View Source", href: "https://github.com/ez500/Wutard" }],
  },
  {
    title: "Gatherpack",
    date: "Jun 2023",
    role: "Contributor · Sledgehammer Infosystems",
    blurb:
      "A practical team management and logistics application — a rewrite of a logistics, information, and communications planner for organizations.",
    bullets: [
      "Contributed user features: time sheets, labeled badges, calendar & events, and announcements.",
      "Enhanced and maintained the DBMS and backend components — data validation, tokens, and automated user functionality via scripts, hooks, and shortcuts.",
    ],
    tags: ["Ruby on Rails", "PostgreSQL", "Fullstack"],
    links: [{ label: "Visit Gatherpack", href: "https://gatherpack.com" }],
  },
  {
    title: "Rowdy — FRC 461 Robot Code",
    date: "Jan 2023-May 2025",
    role: "Software Lead & Team Vice President",
    blurb:
      "Legacy robot software across four annual iterations (Rowdy22–25) with 2000+ signed, verified commits, focused on automation and neural-network-based vision tracking.",
    bullets: [
      "Implemented computer vision processing, control automation, kinematics, system optimization, and telemetry in the Java FRC framework.",
      "Built and maintained the team website, database, and an FRC game data miner.",
      "Taught 40+ teammates programming (Java, Python, algorithms); Rowdy23–25 competed at world championships in Houston.",
    ],
    tags: ["Java", "Computer Vision", "Robotics", "Automation"],
    links: [{ label: "View Org", href: "https://github.com/frc461" }, { label: "Visit Team Website", href: "https://boilerinvasion.org" }],
  },
  {
    title: "GreatStudier Rewrite for Web",
    date: "Jul 2023-Dec 2024",
    role: "Software Developer · BiGGDev",
    blurb:
      "An educational term & flashcard user interface — a modern web rewrite of the GreatStudier study tool.",
    bullets: [
      "Built an interactive flashcard/term study experience for the web.",
      "Developed as part of BiGGDev, integrating APIs from Discord, YouTube, Google, and more.",
    ],
    tags: ["Web", "Python", "APIs", "EdTech"],
    links: [{ label: "Visit Source", href: "https://github.com/BiGGDevOrg/GreatStudier-Rewrite" }],
  },
  {
    title: "bigfatstudier (unfinished)",
    date: "Mar 2023-Aug 2024",
    role: "Software Developer · BiGGDev",
    blurb:
      "An educational application built into Discord — study tools brought directly into the chat platform students already use via bot chat inferface.",
    bullets: [
      "Developed an interactive study/learning experience as a Discord application.",
      "Leveraged the Discord API alongside other service integrations.",
    ],
    tags: ["Discord API", "Python", "EdTech"],
    links: [{ label: "View Source", href: "https://github.com/ez500/bigfatstudier" }],
  },
  {
    title: "Manhunt (unfinished)",
    date: "May 2024",
    role: "Software Developer · BiGGDev",
    blurb:
      "A Spigot plugin meant to recreate the experience for multiplayer Manhunt on a Minecraft server. Remains unfinished and buggy.",
    bullets: [
      "Tested for custom game modes such as contested speedruns and the official manhunt mini-game.",
      "Built and shipped as a reusable, installable, albeit buggy, plugin.",
    ],
    tags: ["Java", "Game Dev", "Plugins"],
    links: [{ label: "View Source", href: "https://github.com/BiGGDevOrg/Manhunt" }],
  },
  {
    title: "greatbedoverlay",
    date: "May 2023",
    role: "Contributor",
    blurb:
      "A terminal based overlay for Bedwars for real-time queue analysis via Hypixel API player lookup.",
    bullets: [
      "Optimized for quick calculations and ultimate player insight.",
      "Highly efficient and accurate metrics presented to make choosing the right queue super easy.",
    ],
    tags: ["Python", "Game Dev", "CLI", "API"],
    links: [{ label: "View Source", href: "https://github.com/Gerseneck/greatbedoverlay" }],
  },
  {
    title: "Weaponmaster",
    date: "May 2022",
    role: "Contributor",
    blurb:
      "A Spigot plugin for Minecraft servers. Highly customizable and adds several new features to the game.",
    bullets: [
      "Designed custom game modes and mechanics for multiplayer play.",
      "Built and shipped as a reusable, installable plugin.",
    ],
    tags: ["Java", "Game Dev", "Plugins"],
    links: [{ label: "View Source", href: "https://github.com/Gerseneck/greatbedoverlay" }],
  },
];
