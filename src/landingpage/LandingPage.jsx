import ContactForm from "../pages/ContactPageSections/ContactForm";
import Header from "./components/Header";
import LandingBanner from "./components/LandingBanner";
import LandingServices from "./components/LandingServices";
import WhyChooseUs from "../components/WhyChooseUs";
import Portfolio from "./components/Portfolio";
import Testimonials from "../pages/AboutPageSections/Testimonials";
import PartnerUs from "../components/PartnerUs";
import LandingAbout from "./components/LandingAbout";
import AOS from "aos";
import "aos/dist/aos.css";
import LandingForm from "./components/LandingForm";
import Footer from "./components/Footer";
import FAQSection from "../components/Faq";
const LandingPage = ({ page }) => {
  AOS.init({
    once: true,
    duration: 1000,
  });
  return (
    <div className="w-screen overflow-hidden">
      <Header />
      <div className="">
        <LandingBanner page={page} />
        <div
          id="asdf"
          className="adjustedwidth mx-auto bg-[#DCD3E6] mt-5 sm:mt-20 pt-1 rounded-xl"
        >
          <LandingForm />
        </div>
        <div>
          <LandingAbout page={page} />
        </div>
        <div className="adjustedwidth mx-auto mt-4 sm:mt-16">
          <LandingServices page={page} />
        </div>
        <div>
          <WhyChooseUs />
        </div>
        <div>
          <Portfolio page={page} />
        </div>
        <div>
          <PartnerUs />
        </div>
        <div>
          <Testimonials />
        </div>
        <div>
          <FAQSection />
        </div>
        <div
          id="contact"
          className="adjustedwidth mx-auto bg-[#DCD3E6] mt-5 sm:mt-20 pt-1 rounded-xl"
        >
          <ContactForm />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
