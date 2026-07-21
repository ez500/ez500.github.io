export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  role: string;
  blurb: string;
  bullets: string[];
  tags: string[];
  links: ProjectLink[];
}

/**
 * Projects sourced from Eugene's résumé + LinkedIn "About".
 * Ordered roughly by prominence / recency.
 */
export const projects: Project[] = [
  {
    title: "GreatStudier Rewrite for Web",
    role: "Software Developer · BiGGDev",
    blurb:
      "An educational term & flashcard user interface — a modern web rewrite of the GreatStudier study tool.",
    bullets: [
      "Built an interactive flashcard/term study experience for the web.",
      "Developed as part of BiGGDev, integrating APIs from Discord, YouTube, Google, and more.",
    ],
    tags: ["Web", "Python", "APIs", "EdTech"],
    links: [],
  },
  {
    title: "Gatherpack",
    role: "Team Contributor · Sledgehammer Infosystems",
    blurb:
      "A practical team management and logistics application — a rewrite of a logistics, information, and communications planner for organizations.",
    bullets: [
      "Contributed user features: time sheets, labeled badges, calendar & events, and announcements.",
      "Enhanced and maintained the DBMS and backend components — data validation, tokens, and automated user functionality via scripts, hooks, and shortcuts.",
    ],
    tags: ["Ruby on Rails", "PostgreSQL", "Fullstack"],
    links: [{ label: "gatherpack.com", href: "https://gatherpack.com" }],
  },
  {
    title: "Rowdy — FRC 461 Robot Code",
    role: "Lead Developer & Team Vice President",
    blurb:
      "Legacy robot software across four annual iterations (Rowdy22–25) with 2000+ signed, verified commits, focused on automation and neural-network-based vision tracking.",
    bullets: [
      "Implemented computer vision processing, control automation, kinematics, system optimization, and telemetry in the Java FRC framework.",
      "Built and maintained the team website, database, and an FRC game data miner.",
      "Taught 40+ teammates programming (Java, Python, algorithms); Rowdy23–25 competed at world championships in Houston.",
    ],
    tags: ["Java", "Computer Vision", "Robotics", "Automation"],
    links: [{ label: "github.com/frc461", href: "https://github.com/frc461" }],
  },
  {
    title: "WL Hack Club",
    role: "Treasurer & Executive Officer",
    blurb:
      "A CS-education club bringing software exploration to as many students as possible through workshops and hackathons.",
    bullets: [
      "Planned weekly original workshops (Pygame, JS, Ruby) with fellow executives.",
      "Organized bi-annual all-day hackathons (60+ registrants) and judged tens of project entries.",
      "Raised over $3,500 for club funding, hackathon expenses, and sponsorships.",
    ],
    tags: ["Education", "Community", "Events"],
    links: [{ label: "wl.hackclub.com", href: "https://wl.hackclub.com" }],
  },
  {
    title: "Video-Game Plugins",
    role: "Developer",
    blurb:
      "A collection of video-game plugins — Manhunt, Weaponmaster, and greatbedoverlay — adding custom gameplay modes and overlays.",
    bullets: [
      "Designed custom game modes and mechanics for multiplayer play.",
      "Built and shipped as reusable, installable plugins.",
    ],
    tags: ["Java", "Game Dev", "Plugins"],
    links: [],
  },
  {
    title: "bigfatstudier",
    role: "Developer · BiGGDev",
    blurb:
      "An educational application built into Discord — study tools brought directly into the chat platform students already use.",
    bullets: [
      "Developed an interactive study/learning experience as a Discord application.",
      "Leveraged the Discord API alongside other service integrations.",
    ],
    tags: ["Discord API", "Python", "EdTech"],
    links: [],
  },
];
