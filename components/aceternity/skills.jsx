"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import {
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandGithub,
  IconBrandVscode,
  IconBrandFigma,
  IconBrandGit,
} from "@tabler/icons-react";

// I've added a few more common icons you might want to use, like Figma and Git.
// Feel free to remove them if they don't apply to you.

export function SkillsTooltip() {
  const sections = [
    {
      id: "languages",
      title: "Languages",
      skills: [
        { id: 1, name: "JavaScript", image: <IconBrandJavascript size={40} className="text-yellow-400" />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { id: 2, name: "TypeScript", image: <IconBrandTypescript size={40} className="text-blue-500" />, link: "https://www.typescriptlang.org/" },
        { id: 3, name: "HTML5", image: <IconBrandHtml5 size={40} className="text-orange-600" />, link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
        { id: 4, name: "CSS3", image: <IconBrandCss3 size={40} className="text-blue-600" />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      ],
    },
    {
      id: "frontend",
      title: "Frontend Frameworks & Libraries",
      skills: [
        { id: 5, name: "React", image: <IconBrandReact size={40} className="text-cyan-400" />, link: "https://react.dev/" },
        { id: 6, name: "Next.js", image: <IconBrandNextjs size={40} className="text-white" />, link: "https://nextjs.org/" }, // usually white or dark
        { id: 7, name: "Tailwind CSS", image: <IconBrandTailwind size={40} className="text-sky-400" />, link: "https://tailwindcss.com/" },
      ],
    },
    {
      id: "backend",
      title: "Backend & Runtimes",
      skills: [
        { id: 8, name: "Node.js", image: <IconBrandNodejs size={40} className="text-green-500" />, link: "https://nodejs.org/" },
      ],
    },
    {
      id: "tools",
      title: "Development Tools & Platforms",
      skills: [
        { id: 9, name: "GitHub", image: <IconBrandGithub size={40} className="text-white" />, link: "https://github.com/" },
        { id: 10, name: "VSCode", image: <IconBrandVscode size={40} className="text-blue-500" />, link: "https://code.visualstudio.com/" },
        { id: 11, name: "Git", image: <IconBrandGit size={40} className="text-orange-500" />, link: "https://git-scm.com/" },
        { id: 12, name: "Figma", image: <IconBrandFigma size={40} className="text-pink-500" />, link: "https://www.figma.com/" },
      ],
    },
  ];

  return (
    <div className="py-10 px-4 w-full max-w-7xl mx-auto">
      {/* Grid container for the cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section) => (
          // Card for each section
          <div
            key={section.id}
            className="bg-neutral-900/60 border border-white/[0.1] rounded-2xl p-6 flex flex-col items-center text-center backdrop-blur-sm"
          >
            {/* Section Title */}
            <h2 className="text-xl md:text-2xl font-bold text-neutral-200 mb-6">
              {section.title}
            </h2>

            {/* Tooltip Icons */}
            <div className="flex flex-row items-center justify-center">
              <AnimatedTooltip items={section.skills} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
