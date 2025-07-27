import { DirectionAwareHoverDemo } from "@components/aceternity/direction-aware-hover";

export default function ProjectsPage() {
  return (
    <div className="w-full flex justify-center items-center px-4 md:px-5 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20">
        <DirectionAwareHoverDemo
          imageUrl="/projects/wanderlust.png"
          title="Wander Lust"
          techStack="Next.js, Tailwind CSS, MongoDB"
          link="https://github.com/arushn47"
        />
        <DirectionAwareHoverDemo
          imageUrl="/projects/promptopia.png"
          title="Promptopia"
          techStack="Next.js, Tailwind CSS, MongoDB, NextAuth"
          link="https://promptopia-by-arush.vercel.app"
        />
        <DirectionAwareHoverDemo
          imageUrl="/projects/face-recognition-attendance-system.png"
          title="Face Recognition Based Attendance System"
          techStack="HTML, CSS, JavaScript, Python, Flask, OpenCV"
          link="https://github.com/arushn47/Face-Detection-Based-Attendance-System"
        />
        <DirectionAwareHoverDemo
          imageUrl="/projects/tree-detection.png"
          title="Tree Detection and Count"
          techStack="HTML, CSS"
          link="https://github.com/arushn47/Tree-Detection-and-Count"
        />
        <DirectionAwareHoverDemo
          imageUrl="/projects/evclub.png"
          title="EV Club Website"
          techStack="HTML, CSS, JavaScript"
          link="https://evclub.vercel.app"
        />
      </div>
    </div>
  );
}