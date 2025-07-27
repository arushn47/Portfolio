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
        <div>
            <div>
                <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center mb-15 mr-9">
                    Socials
                </h1>
            </div>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={icons} />
            </div>
        </div>
    );
}
