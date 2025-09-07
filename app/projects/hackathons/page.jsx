import { DirectionAwareHoverDemo } from "@components/aceternity/direction-aware-hover";

export default function ProjectsPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-7">
      <div className="flex flex-col items-center w-full max-w-5xl">
        <h1 className="text-3xl lg:text-5xl font-bold text-center mb-4 text-white relative z-20">
          Projects
        </h1>
        <div className="w-full max-w-lg h-14 relative">
          {/* Gradients */}
          <div className="absolute left-5 right-5 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
          <div className="absolute left-5 right-5 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
          <div className="absolute left-10 right-10 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-2/3 blur-sm" />
          <div className="absolute left-10 right-10 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-2/3" />
        </div>
      </div>
      <div className="px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-10 mb-20 ">
        <DirectionAwareHoverDemo
          imageUrl="/projects/health-ease.png"
          title="HealthEase"
          desc="A MERN stack health portal that connects all your healthcare needs in one seamless platform."
          techStack="React, Tailwind CSS, MongoDB, Node.js"
          repo_link="https://github.com/ianshsingh10/Health-Ease"
        />
        <DirectionAwareHoverDemo
          imageUrl="/projects/net-guardians.png"
          title="NetGuardians"
          desc="A Flask-based web tool that detects phishing links with a simple and responsive HTML/CSS interface."
          techStack="Python(Flask), HTML, CSS"
          repo_link="https://github.com/arushn47/net-guardians"
        />
      </div>
    </div>
  );
}