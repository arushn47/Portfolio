import React from "react";
import { Vortex } from "../ui/vortex";

export function VortexDemo() {
  return (
    <div className="w-full mt-[15%] mb-[-5%] h-full ">
      <Vortex
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Hi, I&apos;m Arush
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Exploring the universe of web development, one line of code at a time.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6" >
          <a href="/projects" className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              &nbsp;&nbsp;My Projects&nbsp;&nbsp;
            </span>
          </a>
          <a href="/resume.pdf" download className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
              &nbsp;&nbsp;Download Resume&nbsp;&nbsp;
            </span>
          </a>
        </div>
      </Vortex>
    </div>
  );
}