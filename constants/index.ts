import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "AI Models",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Documents",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Images",
    image: "figma.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Shield / Security",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Compliance / Lock",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Data Flow",
    image: "ts.png",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const USE_CASES = [
  {
    title: "Secure AI for Enterprises",
    description:
      "Enable teams to safely use tools like ChatGPT, Claude, and other AI systems without exposing sensitive data.",
    image: "/projects/image1.jpg",
    link: "https://example.com",
  },
  {
    title: "Document Intelligence",
    description:
      "Extract insights, summaries, and structured data from documents \u2014 securely and efficiently.",
    image: "/projects/image2.jpg",
    link: "https://example.com",
  },
  {
    title: "AI Governance Layer",
    description:
      "Gain full visibility and control over how AI is used across your organization.",
    image: "/projects/image3.jpg",
    link: "https://example.com",
  },
] as const;

export const FEATURE_CARDS = [
  {
    title: "PII Masking & Data Protection",
    description:
      "Automatically detects and masks sensitive information before it reaches external AI systems.",
  },
  {
    title: "Policy-Based Governance",
    description:
      "Define and enforce rules for how AI is accessed, used, and shared across teams.",
  },
  {
    title: "Secure Access Control",
    description:
      "Ensure only authenticated and authorized users interact with AI workflows.",
  },
  {
    title: "Document & Image Intelligence",
    description:
      "Upload files and extract meaningful insights using AI \u2014 securely.",
  },
  {
    title: "Actionable Outputs",
    description:
      "Convert raw data into structured summaries, insights, and checklists.",
  },
  {
    title: "Compliance & Risk Management",
    description: "Meet regulatory standards while minimizing AI-related risks.",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/_sanidhyy",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Product",
    link: "#product",
  },
  {
    title: "Features",
    link: "#features",
  },
  {
    title: "Use Cases",
    link: "#use-cases",
  },
] as const;

export const LINKS = {
  sourceCode: "https://example.com/security",
};
