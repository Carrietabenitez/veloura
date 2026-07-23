import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Secciones cargadas de forma diferida
const TrustBadges = lazy(() => import("./components/TrustBadges"));
const Benefits = lazy(() => import("./components/Benefits"));
const Ingredients = lazy(() => import("./components/Ingredients"));
const BeforeAfter = lazy(() => import("./components/BeforeAfter"));
const HowToUse = lazy(() => import("./components/HowToUse"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const FAQ = lazy(() => import("./components/FAQ"));
const CTA = lazy(() => import("./components/CTA"));
const OrderForm = lazy(() => import("./components/OrderForm"));
const Footer = lazy(() => import("./components/Footer"));

function LoadingSection() {
  return (
    <div className="flex justify-center py-20">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-lavender-300 border-t-lavender-600"></div>
    </div>
  );
}

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <main>
        {/* Contenido crítico */}
        <Hero />

        {/* Contenido secundario */}
        <Suspense fallback={<LoadingSection />}>
          <TrustBadges />
          <Benefits />
          <Ingredients />
          <BeforeAfter />
          <HowToUse />
          <Testimonials />
          <FAQ />
          <CTA />
          <OrderForm />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}