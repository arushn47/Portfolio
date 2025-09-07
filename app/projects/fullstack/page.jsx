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
      <div className="px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-10 mb-20">
        <DirectionAwareHoverDemo
          imageUrl="/projects/promptopia.png"
          title="Promptopia"
          desc="A modern open-source platform for discovering and sharing high-quality AI prompts. Includes authentication, profiles, and real-time data with MongoDB."
          techStack="Next.js, React, Tailwind CSS, NextAuth.js, MongoDB"
          link="https://promptopia-by-arush.vercel.app"
          repo_link="https://github.com/arushn47/local-ai"
        />
        <DirectionAwareHoverDemo
          imageUrl="/projects/wanderlust.png"
          title="Wander Lust"
          desc="A travel web app for exploring destinations, planning trips, and sharing travel experiences using the powerful Next.js, MongoDB, and NextAuth."
          techStack="Next.js, React, Tailwind CSS, NextAuth.js, MongoDB"
          link="https://wanderlust-by-arush.vercel.app"
          repo_link="https://github.com/arushn47/local-ai"
        />
        <DirectionAwareHoverDemo
          imageUrl="/projects/anmwallet.png"
          title= "ANM Wallet"
          desc= "A personal expense tracker and budgeting tool for students, designed for clarity and ease of use. Built with Next.js, MongoDB, and NextAuth."
          techStack="Next.js, React, Tailwind CSS, NextAuth.js, MongoDB"
          link="https://anm-wallet.vercel.app"
          repo_link="https://github.com/arushn47/expense-tracker"
        />
        <DirectionAwareHoverDemo
          imageUrl="/projects/rushkart.png"
          title= "RushKart"
          desc= "A visually stunning e-commerce marketplace for tech and lifestyle products, featuring distinct seller and customer roles, built with Next.js, MongoDB, and NextAuth."
          techStack="Next.js, React, Tailwind CSS, NextAuth.js, MongoDB"
          link="https://rushkart.vercel.app"
          repo_link="https://github.com/arushn47/rushkart"
        />
      </div>
    </div>
  );
}