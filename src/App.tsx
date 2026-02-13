import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import ReviewForm from './components/ReviewForm';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import FixedContactButtons from './components/FixedContactButtons';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Reviews />
      <ReviewForm />
      <FAQs />
      <Footer />
      <FixedContactButtons />
    </div>
  );
}

export default App;
