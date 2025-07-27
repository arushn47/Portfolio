import Image from "next/image";
import { cn } from "@lib/utils";

export function InverseFocusPhoto() {
  return (
    <div className="relative w-120 h-120 rounded-full overflow-hidden">
      <div className="group w-full h-full">
        <Image
          src="/photo.png"
          alt="Arush"
          fill
          className={cn(
            "object-cover transition duration-500 ease-in-out",
            "blur-sm group-hover:blur-none"
          )}
        />
      </div>
    </div>
  );
}