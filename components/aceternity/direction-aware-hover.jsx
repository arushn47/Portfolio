"use client";

import React, { useMemo } from "react";
import { Github, Link as LinkIcon } from "lucide-react";
import { DirectionAwareHover } from "@components/ui/direction-aware-hover";

export const DirectionAwareHoverDemo = ({ 
  imageUrl, title, desc, techStack, link, repo_link 
}) => {
  const techArray = useMemo(() => techStack?.split(',').map(tech => tech.trim()) ?? [], [techStack]);
  const links = useMemo(() => [
    { href: link, Icon: LinkIcon, title: "View Live Site" },
    { href: repo_link, Icon: Github, title: "View Source Code" },
  ].filter(l => l.href), [link, repo_link]);

  return (
    <div tabIndex={0} className="group relative z-0 h-64 w-full overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-neutral-950 md:h-80">
      <DirectionAwareHover imageUrl={imageUrl} alt={`Screenshot of ${title}`}>
        <div className="flex flex-col gap-2">
          <p className="transform-gpu font-bold text-lg mb-[-5px] ml-1 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:delay-150 group-hover:translate-y-0 translate-y-4">
            {title}
          </p>
          <p className="transform-gpu font-normal text-xs text-neutral-300 ml-1 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:delay-250 group-hover:translate-y-0 translate-y-4">
            {desc}
          </p>
          <div className="transform-gpu flex flex-wrap gap-2 mt-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:delay-350 group-hover:translate-y-0 translate-y-4">
            {techArray.map(tech => (
              <span key={tech} className="rounded-full bg-neutral-900/80 px-3 py-1 text-xs">{tech}</span>
            ))}
          </div>
          {links.length > 0 && (
            <div className="transform-gpu flex items-center gap-4 ml-1 pt-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:delay-450 group-hover:translate-y-0 translate-y-4">
              {links.map(({ href, Icon, title: linkTitle }) => (
                <a key={linkTitle} href={href} target="_blank" rel="noopener noreferrer" title={linkTitle} aria-label={linkTitle} className="text-white">
                  <Icon className="h-5 w-5 transition-transform hover:scale-125" />
                </a>
              ))}
            </div>
          )}
        </div>
      </DirectionAwareHover>
    </div>
  );
};
