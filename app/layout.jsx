import "@app/globals.css";
import Nav from "@components/layout/Nav";

export const metadata = {
  title: "Arush | Portfolio",
  description: "Frontend Developer & Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">{children}</main>
          <div className="fixed bottom-7 left-1/2 transform -translate-x-1/2">
            <Nav />
          </div>
        </div>
      </body>
    </html>
  );
}