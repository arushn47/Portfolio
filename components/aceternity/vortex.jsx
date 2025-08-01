import React from "react";
import { Vortex } from "../ui/vortex";

export function VortexDemo() {
  return (
    <div className="bg-neutral-950 w-full min-h-screen flex items-center justify-center">
      <Vortex className="flex flex-col items-center justify-center w-full max-w-3xl px-4 md:px-10 py-8 rounded-xl">
        <h2 className="text-white text-xl sm:text-3xl md:text-6xl font-bold text-center">
          Hi, I&apos;m Arush
        </h2>
        <p className="text-white text-base sm:text-lg md:text-2xl max-w-xl mt-4 sm:mt-6 text-center">
          Exploring the universe of web development, one line of code at a time.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full justify-center">
          <a
            href="/projects"
            className="relative inline-flex h-11 sm:h-12 overflow-hidden rounded-full p-[1.5px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-5 py-1.5 text-sm font-medium text-white backdrop-blur-3xl">
              My Projects
            </span>
          </a>
          <a
            href="/resume.pdf"
            download
            className="relative inline-flex h-11 sm:h-12 overflow-hidden rounded-full p-[1.5px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-gray-100 px-5 py-1.5 text-sm font-medium text-black backdrop-blur-3xl">
              Download Resume
            </span>
          </a>
        </div>
      </Vortex>
    </div>
  );
}
