// src/app/page.tsx

import Navbar from "../components/Navbar";
import Services from "@/components/Services";
import AboutSection from "../components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Services />
      <AboutSection />
      <ContactUs />
      <Footer />
    </>
  );
}
