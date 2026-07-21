import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBadges from './components/TrustBadges'
import Benefits from './components/Benefits'
import Ingredients from './components/Ingredients'
import BeforeAfter from './components/BeforeAfter'
import HowToUse from './components/HowToUse'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import OrderForm from './components/OrderForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <Benefits />
        <Ingredients />
        <BeforeAfter />
        <HowToUse />
        <Testimonials />
        <FAQ />
        <CTA />
        <OrderForm />
      </main>
      <Footer />
    </div>
  )
}
