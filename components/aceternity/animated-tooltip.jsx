"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import {
    IconMailFilled,
    IconBrandGithubFilled,
    IconBrandLinkedinFilled,
    IconBrandTwitterFilled,
    IconBrandDiscordFilled,
} from "@tabler/icons-react";

const icons = [
    {
        id: 1,
        name: "Mail",
        image: <IconMailFilled/>,
        link: "mailto:arushn.2005@gmail.com",
    },
    {
        id: 2,
        name: "GitHub",
        image: <IconBrandGithubFilled/>,
        link: "https://github.com/arushn47",
    },
    {
        id: 3,
        name: "LinkedIn",
        image: <IconBrandLinkedinFilled/>,
        link: "https://www.linkedin.com/in/arushn47/",
    },
    {
        id: 4,
        name: "Twitter",
        image:<IconBrandTwitterFilled/>,
        link: "https://x.com/arushn_07",
    },
    {
        id: 5,
        name: "Discord",
        image:<IconBrandDiscordFilled/>,
        link: "https://discord.com/users/685526855767425026",
    },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="w-full px-3 sm:px-6">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-6xl font-bold text-center mb-8">
          Socials
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5 w-full mb-4">
        <AnimatedTooltip items={icons} />
      </div>
    </div>
  );
}
