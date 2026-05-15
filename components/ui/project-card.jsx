"use client";

import React, { useMemo } from "react";
import { Github, ArrowUpRight, ExternalLink } from "lucide-react";

export const ProjectCard = ({
  imageUrl,
  title,
  desc,
  techStack,
  category,
  link,
  repo_link,
}) => {
  const techArray = useMemo(
    () => techStack?.split(",").map((tech) => tech.trim()) ?? [],
    [techStack]
  );

  const href = link || repo_link || "#";

  return (
    <div className="group relative flex flex-col w-full overflow-hidden rounded-[20px] bg-[#0e0e0e] border border-white/[0.06] transition-all duration-500 hover:border-white/[0.12] hover:shadow-[0_12px_48px_-16px_rgba(139,92,246,0.3)]">

      {/* ── Image section ── */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/8" }}>
        <img
          src={imageUrl}
          alt={`Screenshot of ${title}`}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* Smear / bleed — image fades into card background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] from-[2%] via-[#0e0e0e]/80 via-[30%] to-transparent" />

        {/* Category badge — top left */}
        {category && (
          <div className="absolute top-4 left-4 z-20">
            <span className="inline-flex items-center rounded-full bg-black/60 backdrop-blur-sm border border-white/15 px-2.5 py-0.25 text-[12px] font-mono font-semibold text-violet-500">
              {category}
            </span>
          </div>
        )}

        {/* Action buttons — top right, appear on hover */}
        <div className="absolute top-3 right-3 flex gap-2 z-20 opacity-0 -translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Live Site"
              className="w-9 h-9 rounded-full bg-violet-600 text-white flex items-center justify-center shadow-lg shadow-violet-500/40 hover:bg-violet-500 transition-colors duration-200"
            >
              <ExternalLink className="w-[16px] h-[16px] text-black" />
            </a>
          )}
          {repo_link && (
            <a
              href={repo_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Source Code"
              className="group/btn w-9 h-9 rounded-full bg-black/80 border border-white/10 text-white flex items-center justify-center shadow-lg transition-colors duration-200 hover:border-violet-500/20"
            >
              <Github className="w-[17px] h-[17px] transition-colors duration-200 group-hover/btn:text-violet-500" />
            </a>
          )}
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col gap-1 px-5 pt-3 pb-5">
        {/* Title + arrow */}
        <div className="flex items-start justify-between ">
          <h3 className="text-[23px] font-bold tracking-tight leading-snug text-white group-hover:text-violet-500 transition-colors duration-300">
            {title}
          </h3>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title}`}
            className="shrink-0 mt-0.5 text-white/50 group-hover:text-violet-500 transition-colors duration-300"
          >
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        {/* Description */}
        <p className="text-[14px] leading-[1.7] text-white/65 line-clamp-2 mb-1.5">
          {desc}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mt-0.5">
          {techArray.map((tech) => (
            <span
              key={tech}
              className="font-mono rounded-full border border-white/[0.04] bg-white/[0.04] px-2.5 py-[2px] text-[11px] font-semibold text-white/75 hover:bg-white/10 hover:border-violet-500/20 transition-colors duration-300 tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
