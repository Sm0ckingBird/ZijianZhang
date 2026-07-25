import { Header } from "@/components/Header";
import { LeftRail, RightRail } from "@/components/SocialRail";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { OpenSource } from "@/components/OpenSource";
import { Experience } from "@/components/Experience";
import { PublicationsTalks } from "@/components/PublicationsTalks";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <LeftRail />
      <RightRail />
      <main>
        <Hero />
        <About />
        <OpenSource />
        <Experience />
        <PublicationsTalks />
      </main>
      <Footer />
    </>
  );
}
