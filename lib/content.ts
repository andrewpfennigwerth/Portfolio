export type NavLink = { href: string; label: string };

export type Project = {
  title: string;
  logo: string;
  blurb: string;
  tags: string[];
  links: { label: string; href: string }[];
};

export type Experience = {
  role: string;
  company: string;
  location?: string;
  dates: string;
};

export const profile = {
  name: "Andrew Pfennigwerth",
  initials: "AP",
  tagline: "Recent CS grad from CU Boulder",
  location: "NYC | Boulder",
  summary:
    "I enjoy working with technology, products, and the outdoors. I’m always exploring new tools and building with them to understand how they can help us create better solutions.",
  about: [
    "I think meaningful ideas are the root of why we build things. Coding allows me to be creative with a problem, and when I can build something that makes someone's day better, I'm even more motivated.",
    "My recent work includes visualizing GPS jamming and spoofing in real time, a fly-fishing AI tool that fuses live conditions with curated regional knowledge, and a react native app for discovering artists playing around NYC. I'm also interested in LLM tooling and agent design.",
    "I also like to play guitar and be outside - fly fishing, backpacking, skiing, anything to do with mountains.",
  ],
  resumeHref: "/pfennigwerth_resume.pdf",
  email: "andrewpfennigwerth@gmail.com",
  phone: "(914) 536-9805",
  github: "https://github.com/andrewpfennigwerth",
  linkedin: "https://www.linkedin.com/in/andrewpfennigwerth",
};

export const navLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const projects: Project[] = [
  {
    title: "FlyStream",
    logo: "/flystream-logo.svg",
    blurb:
      "AI-assisted fly fishing tool that recommends a focused fly box for a destination. Enter a location, and FlyStream maps it to a known fishing region, pulls local water context, searches a curated fly pattern database, and returns a list of flies likely to be effective in the area.",
    tags: [
      "Python",
      "FastAPI",
      "LangChain",
      "Claude",
      "TavilyAPI",
      "React",
    ],
    links: [
      { label: "Live site", href: "https://fly-stream.vercel.app" },
      {
        label: "GitHub",
        href: "https://github.com/andrewpfennigwerth/flystream",
      },
    ],
  },
  {
    title: "StreetStrings (WIP)",
    logo: "/stringsStandard.svg",
    blurb:
      "StreetStrings is a long-term passion project that aims to create a platform for small artists to share their work and for fans to discover their next live show. There's currently no simple way to discover and stay in the loop with smaller artists playing around NYC. Our real-time map and connection features will provide instant value for both types of users and we're excited to see where it goes. Planned release in 2026.",
    tags: ["React Native", "Expo", "TypeScript", "Better Auth", "Drizzle ORM"],
    links: [],
  },
];

export const experience: Experience[] = [
  {
    role: "Research Software Engineer",
    company: "Colorado Center for Astrodynamics Research",
    location: "Boulder, CO",
    dates: "May 2025 – August 2025",
  },
  {
    role: "Front End Engineer Intern",
    company: "SciQuel",
    location: "Remote",
    dates: "May 2024 – August 2024",
  },
];
