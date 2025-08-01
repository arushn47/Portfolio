"use client";

import React from "react";
import { FloatingDockDemo } from "@components/ui/floating-dock";
import {
  IconHome,
  IconUser,
  IconCode,
  IconBulb,
  IconCertificate,
  IconMail,
} from "@tabler/icons-react";

export function FloatingDockFinal() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/",
    },
    {
      title: "About",
      icon: <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/about",
    },
    {
      title: "Projects",
      icon: <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/projects",
    },
    {
      title: "Skills",
      icon: <IconBulb className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/skills",
    },
    {
      title: "Certificates",
      icon: <IconCertificate className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/certificates",
    },
    {
      title: "Contact",
      icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/contact",
    },
  ];

  return (
    <>
      <div className="fixed left-1/2 z-100 -translate-x-1/2 flex">
        <FloatingDockDemo items={links} />
      </div>
    </>
  );
}
