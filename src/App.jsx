import Header from './assets/components/Header';
import Hero from './assets/components/Hero';
import AboutUs from './assets/components/AboutUs';
import Services from './assets/components/Services';
import BeforeAfterSection from './assets/components/BeforeAfter';
import GallerySection from './assets/components/gallerySection';
import Testimonials from './assets/components/Testimonials';
import FaqSection from './assets/components/FaqSection';
import Contact from './assets/components/Contact';
import Footer from './assets/components/Footer';

export default function App() {
  return (
    <div className="overflow-auto no-scrollbar font-sans text-gray-800 w-full h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <BeforeAfterSection />
      <GallerySection />
      <Testimonials />
      <FaqSection />
      <Contact />
      <Footer />
    </div>
  );
}
