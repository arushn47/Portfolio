import { TimelineDemo } from "@components/aceternity/timeline";
import { InverseFocusPhoto } from "@components/aceternity/inverse-focus-card";

export default function AboutPage() {
  return (
    <div className=" min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-6xl font-bold text-center mb-3 text-white relative z-20">
            About Me
          </h1>
          <div className="w-full max-w-xl h-12 relative">
            <div className="absolute left-5 right-5 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
            <div className="absolute left-5 right-5 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
            <div className="absolute left-14 right-14 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/2 blur-sm" />
            <div className="absolute left-14 right-14 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/2" />
          </div>
        </div>
        {/* Text + Image side by side */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-8">
          <p className="text-neutral-700 dark:text-neutral-300 text-base sm:text-lg md:text-3xl w-full md:w-1/2 leading-relaxed text-center md:text-left">
            A student with a strong passion for web development and emerging technologies. Actively learning full-stack development, including Next.js, while exploring the exciting fields of Generative AI, machine learning, and computer vision. Driven by curiosity and creativity, with the goal of turning ideas into intuitive and meaningful digital experiences.
          </p>
          <div className="w-full max-w-full md:max-w-sm lg:max-w-md mx-auto md:mx-0 flex-shrink-0">
            <InverseFocusPhoto />
          </div>
        </div>
        {/* Timeline below */}
        <div className="mt-10">
          <TimelineDemo />
        </div>
      </div>
    </div>
  );
}
