"use client";

import React from "react";
import { FloatingDock } from "@components/ui/floating-dock";
import {
  IconHome,
  IconUser,
  IconCode,
  IconBulb,
  IconCertificate,
  IconMail
} from "@tabler/icons-react";

export function FloatingDockDemo() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/",
        },

        {
            title: "About",
            icon: (
                <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/about",
        },
        {
            title: "Projects",
            icon: (
                <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/projects",
        },
        {
            title: "Skills",
            icon: (
                <IconBulb className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/skills",
        },
        {
            title: "Certificates",
            icon: (
                <IconCertificate className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/certificates",
        },
        {
            title: "Contact",
            icon: (
                <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/contact",
        },
    ];
    return (
        <div className="flex items-center justify-center w-full z-0">
            <FloatingDock
                // only for demo, remove for production
                mobileClassName="translate-y-20"
                items={links} />
        </div>
    );
}
