import { DirectionAwareHoverDemo } from "@components/aceternity/direction-aware-hover";

export default function ProjectsPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-10">
      <div className="flex flex-col items-center w-full max-w-5xl">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mb-4 text-white relative z-20">
          Projects
        </h1>
        <div className="w-full max-w-2xl h-14 relative">
          {/* Gradients */}
          <div className="absolute left-5 right-5 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
          <div className="absolute left-5 right-5 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
          <div className="absolute left-10 right-10 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-2/3 blur-sm" />
          <div className="absolute left-10 right-10 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-2/3" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:gap-10">
        <DirectionAwareHoverDemo
          imageUrl="/projects/local-ai.png"
          title="Local AI"
          techStack="Next.js, Tailwind CSS, Python (Flask), Ollama"
          link="https://github.com/arushn47/local-ai"
        />
        <DirectionAwareHoverDemo
          imageUrl="/projects/promptopia.png"
          title="Promptopia"
          techStack="Next.js, React, Tailwind CSS, NextAuth.js, MongoDB, Node.js"
          link="https://promptopia-by-arush.vercel.app"
        />
        <DirectionAwareHoverDemo
          imageUrl="/projects/wanderlust.png"
          title="Wander Lust"
          techStack="MERN Stack, JavaScript, Git, AWS"
          link="https://github.com/arushn47"
        />
        <DirectionAwareHoverDemo
          imageUrl="/projects/face-recognition-attendance-system.png"
          title="Face Recognition Based Attendance System"
          techStack="HTML, CSS, JavaScript, Python, Flask, OpenCV, dlib"
          link="https://github.com/arushn47/Face-Detection-Based-Attendance-System"
        />
        <DirectionAwareHoverDemo
          imageUrl="/projects/tree-detection.png"
          title="Tree Detection and Count"
          techStack="HTML, CSS, Python (Flask), YOLOv8"
          link="https://github.com/arushn47/Tree-Detection-and-Count"
        />
        <DirectionAwareHoverDemo
          imageUrl="/projects/evclub.png"
          title="EV Club Website"
          techStack="HTML, CSS, JavaScript, GSAP"
          link="https://evclub.vercel.app"
        />
      </div>
    </div>
  );
}