import { CardHoverEffectDemo } from "@components/aceternity/card-hover-effect";

export default function Skills() {

  return (
    <div>
      <div className="flex flex-col items-center w-full max-w-5xl">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mt-10 mb-4 text-white relative z-20">
          Skills
        </h1>
        <div className="w-100 h-10 relative">
          <div className="absolute left-5 right-5 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
          <div className="absolute left-5 right-5 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
          <div className="absolute left-10 right-10 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-2/3 blur-sm" />
          <div className="absolute left-10 right-10 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-2/3" />
        </div>
      </div>
      <div>
        <CardHoverEffectDemo />
      </div>
    </div>
  );
}
