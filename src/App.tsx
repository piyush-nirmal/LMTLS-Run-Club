import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import WhyLMTLS from './components/WhyLMTLS';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <WhyLMTLS />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
