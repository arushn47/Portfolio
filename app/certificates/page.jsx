import { FocusCardsDemo } from "@components/aceternity/focus-cards";

export default function CertificatesPage() {
  return (
    <div className="mb-30">
      <div className="flex flex-col items-center w-full max-w-7xl">
        <h1 className="text-3xl lg:text-5xl font-bold text-center mt-10 mb-4 text-white relative z-20">
          Certifications
        </h1>
        <div className="w-full max-w-2xl h-10 relative">
          {/* Gradients */}
          <div className="absolute left-5 right-5 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
          <div className="absolute left-5 right-5 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
          <div className="absolute left-10 right-10 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-2/3 blur-sm" />
          <div className="absolute left-10 right-10 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-2/3" />
        </div>
      </div>
      <div className="w-sm lg:w-7xl mt-5">
      <FocusCardsDemo />
    </div>
    </div>
  );
}