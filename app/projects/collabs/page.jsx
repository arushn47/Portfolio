import { ProjectCard } from "@components/ui/project-card";

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
      <div className="w-full max-w-6xl px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 mb-20">
        <ProjectCard
          imageUrl="/projects/cravit.png"
          title="CraVIT"
          desc="Campus food pre-ordering web app enabling students to browse canteens, pre-order meals, and skip queues with fast, seamless UX."
          techStack="Next.js, Tailwind CSS, MongoDB, Cloudinary, Razorpay"
          link="https://cravit.vercel.app/"
          repo_link="https://github.com/ianshsingh10/cravit"
        />
      </div>
    </div>
  );
}