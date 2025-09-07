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
      <div className="px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:gap-10 mb-20">
        <DirectionAwareHoverDemo
          imageUrl="/projects/local-ai.png"
          title="Local AI"
          desc="An offline AI assistant powered by Ollama and Python Flask, featuring a Next.js frontend and custom local integration. Brings LLM to local environments."
          techStack="Next.js, Tailwind CSS, Python (Flask), Ollama"
          repo_link="https://github.com/arushn47/local-ai"
        />
        <DirectionAwareHoverDemo
          imageUrl="/projects/face-recognition-attendance-system.png"
          title="Face Recognition Based Attendance System"
          desc="An automated attendance system utilizing facial recognition technology powered by OpenCV and dlib libraries, with a Python Flask backend."
          techStack="JavaScript, Python, Flask, OpenCV, dlib, HTML, CSS"
          repo_link="https://github.com/arushn47/Face-Detection-Based-Attendance-System"
        />
        <DirectionAwareHoverDemo
          imageUrl="/projects/tree-detection.png"
          title="Tree Detection and Count"
          desc="A YOLOv8-based web application for detecting and counting trees using aerial images, combining computer vision with a Python Flask API."
          techStack="Python, Flask, YOLOv5, PyTorch, OpenCV, HTML, CSS"
          repo_link="https://github.com/arushn47/Tree-Detection-and-Count"
        />
      </div>
    </div>
  );
}