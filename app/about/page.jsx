import { TimelineDemo } from "@components/aceternity/timeline";
import { InverseFocusPhoto } from "@components/aceternity/inverse-focus-card";

export default function AboutPage() {
    return (
        <div className="bg-white dark:bg-neutral-950 min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl mx-auto py-20">
                {/* Heading */}
                <div
                    className=" w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
                    <h1
                        className="md:text-7xl text-3xl lg:text-6xl font-bold text-center mb-3 text-white relative z-20">
                        About Me
                    </h1>
                    <div className="w-[40rem] h-20 relative">
                        {/* Gradients */}
                        <div
                            className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                        <div
                            className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                        <div
                            className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                        <div
                            className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                    </div>
                </div>

                {/* Text + Image side by side */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    <p className="text-neutral-700 dark:text-neutral-300 text-1xl md:text-3xl w-full md:w-1/2 leading-relaxed">
                        A student with a strong passion for web development and emerging technologies. Actively learning full-stack development, including Next.js, while exploring the exciting fields of Generative AI, machine learning, and computer vision. Driven by curiosity and creativity, with the goal of turning ideas into intuitive and meaningful digital experiences.
                    </p>
                    <div className="w-full md:w-[600px] lg:w-[450px]">
                        <InverseFocusPhoto />
                    </div>
                </div>

                {/* Timeline below */}
                <div className="mt-25">
                    <TimelineDemo />
                </div>
            </div>
        </div>
    );
}