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
      <Sidebar />
      <main id="top" className="pt-16 lg:ml-[380px] lg:pt-0">
        <About />
        <OpenSource />
        <Experience />
        <PublicationsTalks />
      </main>
      <div className="lg:ml-[380px]">
        <Footer />
      </div>
    </>
  );
}
