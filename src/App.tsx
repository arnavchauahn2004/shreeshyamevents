import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import ReviewForm from './components/ReviewForm';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import FixedContactButtons from './components/FixedContactButtons';

import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import AdminGallery from "./admin/AdminGallery";
import AdminReviews from "./admin/AdminReviews";
import AdminSubscribers from "./admin/AdminSubscribers";

function HomePage(){
  return(
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Reviews />
      <ReviewForm />
      <FAQs />
      <Footer />
      <FixedContactButtons />
    </>
  );
}

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Main Website */}
        <Route path="/" element={<HomePage/>} />

        {/* Admin */}
        <Route path="/admin" element={<AdminLogin/>} />
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />
        <Route path="/admin/gallery" element={<AdminGallery/>} />
        <Route path="/admin/reviews" element={<AdminReviews/>} />
        <Route path="/admin/subscribers" element={<AdminSubscribers/>} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;