import "@app/globals.css";
import { FloatingDockFinal } from "@components/aceternity/floating-dock";

export const metadata = {
  title: "Arush | Portfolio",
  description: "Frontend Developer & Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white font-sans antialiased">
        <div className="min-h-screen flex flex-col items-center overflow-hidden">
          <main className="flex-grow">{children}</main>
          <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 z-100">
            <FloatingDockFinal />
          </div>
        </div>
      </body>
    </html>
  );
}