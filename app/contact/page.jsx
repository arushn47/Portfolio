import { SignupFormDemo } from "@components/aceternity/signup-form";
import { AnimatedTooltipPreview } from "@components/aceternity/animated-tooltip";

export default function ContactPage() {
    return (
        <div className="relative flex items-center justify-around min-h-screen">
            <div>
                <SignupFormDemo />
            </div>
            <div className="hidden md:block fixed left-1/2 top-1/2 h-full w-[40%] -translate-x-1/2 z-[-1]">
                <div className="rotate-90 absolute h-[1.5px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
            </div>
            <div className="mr-10">
                <AnimatedTooltipPreview />
            </div>

        </div>
    );
}
