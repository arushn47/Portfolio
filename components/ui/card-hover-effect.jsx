import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { CardSpotlight } from "@components/ui/card-spotlight";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ${className}`}
    >
      {items.map((item, idx) => (
        <a
          href={item.link}
          target="_blank"
          key={item.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <CardSpotlight>
            <div className="relative z-50">
              <div className="p-4 flex flex-col items-center justify-center text-center h-full">
                <div className="w-12 h-12 mb-4 flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-zinc-100 font-bold tracking-wide mt-2">
                  {item.title}
                </h4>
              </div>
            </div>
          </CardSpotlight>
        </a>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => (
  <div
    className={cn(
      "rounded-2xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 flex flex-col justify-center items-center gap-3",
      className
    )}
  >
    {children}
  </div>
);


export const CardTitle = ({ className, children }) => (
  <h4 className={cn("text-zinc-100 font-medium tracking-wide mt-4 text-center", className)}>
    {children}
  </h4>
);
