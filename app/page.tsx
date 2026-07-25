import { Sidebar } from "@/components/Sidebar";
import { Spotlight } from "@/components/Spotlight";
import { About } from "@/components/About";
import { OpenSource } from "@/components/OpenSource";
import { Experience } from "@/components/Experience";
import { PublicationsTalks } from "@/components/PublicationsTalks";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Spotlight />
      <div className="mx-auto flex max-w-[1440px] lg:items-start">
        <Sidebar />
        <div id="top" className="min-w-0 flex-1 pt-16 lg:pt-0">
          <main>
            <About />
            <OpenSource />
            <Experience />
            <PublicationsTalks />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
