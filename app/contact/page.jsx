import { SignupFormDemo } from "@components/aceternity/signup-form";
import { AnimatedTooltipPreview } from "@components/aceternity/animated-tooltip";

export default function ContactPage() {
    return (
        <div>
            <div className="flex flex-col items-center w-full max-w-5xl">
                <h1 className="text-4xl lg:text-6xl font-bold text-center mt-10 mb-4 text-white relative z-20">
                    Contact
                </h1>
                <div className="w-full max-w-2xl h-10 relative">
                    {/* Gradients */}
                    <div className="absolute left-5 right-5 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
                    <div className="absolute left-5 right-5 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
                    <div className="absolute left-10 right-10 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-2/3 blur-sm" />
                    <div className="absolute left-10 right-10 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-2/3" />
                </div>
            </div>
            <SignupFormDemo />
        </div>
    );
}
