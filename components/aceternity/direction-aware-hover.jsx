"use client";

import { DirectionAwareHover } from "../ui/direction-aware-hover";

export function DirectionAwareHoverDemo({ imageUrl, title, techStack, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative z-0 w-full h-64 md:h-80 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <DirectionAwareHover imageUrl={imageUrl}>
          <p className="font-bold text-lg">{title}</p>
          <p className="font-normal text-xs">{techStack}</p>
        </DirectionAwareHover>
      </div>
    </a>
  );
}