import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import MountOnView from "@/components/MountOnView";

const Services = lazy(() => import("@/components/Services"));
const Templates = lazy(() => import("@/components/Templates"));
const Testimonios = lazy(() => import("@/components/Testimonios"));
const About = lazy(() => import("@/components/About"));
const Contact = lazy(() => import("@/components/Contact"));

const SectionFallback = ({ h = "600px" }) => (
  <div style={{ minHeight: h }} aria-hidden="true" />
);

export default function Home() {
  return (
    <main className="snap-container">
      <Hero />
      <MountOnView intrinsicHeight="1200px" fallback={<SectionFallback h="1200px" />}>
        <Suspense fallback={<SectionFallback h="1200px" />}>
          <Services />
        </Suspense>
      </MountOnView>
      <MountOnView intrinsicHeight="900px" fallback={<SectionFallback h="900px" />}>
        <Suspense fallback={<SectionFallback h="900px" />}>
          <Templates />
        </Suspense>
      </MountOnView>
      <MountOnView intrinsicHeight="700px" fallback={<SectionFallback h="700px" />}>
        <Suspense fallback={<SectionFallback h="700px" />}>
          <Testimonios />
        </Suspense>
      </MountOnView>
      <MountOnView intrinsicHeight="1400px" fallback={<SectionFallback h="1400px" />}>
        <Suspense fallback={<SectionFallback h="1400px" />}>
          <About />
        </Suspense>
      </MountOnView>
      <MountOnView intrinsicHeight="900px" fallback={<SectionFallback h="900px" />}>
        <Suspense fallback={<SectionFallback h="900px" />}>
          <Contact />
        </Suspense>
      </MountOnView>
    </main>
  );
}