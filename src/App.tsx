import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import ServicesOverview from './components/ServicesOverview';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="home" />
      <main>
        <Hero />
        <Intro />
        <ServicesOverview />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
