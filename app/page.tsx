import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Ceritficates from "@/components/Ceritficates";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 bg-black-100 overflow-clip">
      <div className="max-w-7xl w-full relative">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />

        <Experience />
        <Approach />
        <Ceritficates />
        <Footer />
      </div>
    </main>
  );
}
