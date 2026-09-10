import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import MountOnView from "@/components/MountOnView";

const Testimonios = lazy(() => import("@/components/Testimonios"));
const Services = lazy(() => import("@/components/Services"));
const About = lazy(() => import("@/components/About"));
const FinalCTA = lazy(() => import("@/components/FinalCTA"));
const Contact = lazy(() => import("@/components/Contact"));

const Fallback = ({ h = "600px" }) => <div style={{ minHeight: h }} aria-hidden="true" />;

export default function Home() {
  return (
    <main className="snap-container">
      <Hero />
      
      <div id="proyectos">
        <Projects limit={4} />
      </div>

      <div id="testimonios">
        <MountOnView intrinsicHeight="700px" fallback={<Fallback h="700px" />}>
          <Suspense fallback={<Fallback h="700px" />}><Testimonios /></Suspense>
        </MountOnView>
      </div>

      <div id="servicios">
        <MountOnView intrinsicHeight="1200px" fallback={<Fallback h="1200px" />}>
          <Suspense fallback={<Fallback h="1200px" />}><Services /></Suspense>
        </MountOnView>
      </div>

      <div id="sobre-mi">
        <MountOnView intrinsicHeight="1400px" fallback={<Fallback h="1400px" />}>
          <Suspense fallback={<Fallback h="1400px" />}><About /></Suspense>
        </MountOnView>
      </div>

      <MountOnView intrinsicHeight="500px" fallback={<Fallback h="500px" />}>
        <Suspense fallback={<Fallback h="500px" />}><FinalCTA /></Suspense>
      </MountOnView>

      <div id="contacto">
        <MountOnView intrinsicHeight="900px" fallback={<Fallback h="900px" />}>
          <Suspense fallback={<Fallback h="900px" />}><Contact /></Suspense>
        </MountOnView>
      </div>
    </main>
  );
}