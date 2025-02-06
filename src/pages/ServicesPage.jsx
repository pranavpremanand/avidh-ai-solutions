import CommonBanner from "../components/CommonBanner";
// import servicesBanner from "../assets/video/servicepagebanner.mp4";
import Services from "./ServicesPageSections/Services";
import Testimonials from "./AboutPageSections/Testimonials";
import { images } from "../constant";
import WhyChooseUs from "../components/WhyChooseUs";
import FAQSection from "../components/Faq";
const ServicesPage = () => {
  const { servicepagebanner } = images;
  return (
    <div className="">
      <CommonBanner
        image={servicepagebanner}
        isImage={true}
        title="Our Services"
        page="Services"
        heading="What We Offer"
      />
      <div className="mt-10 sm:mt-20">
        <div className="gap-4 flex flex-col items-center adjustedwidth mx-auto">
          <h2
            data-aos="fade-up"
            className="text-smhead text-decsriptioncolor leading-tight"
          >
            What We Offer
          </h2>
          <h3
            data-aos="fade-up"
            className="text-head sm:max-w-[60%] text-center leading-tight"
          >
            Empowering Your Business with Innovative, Tailored Technology
            Solutions
          </h3>
          <p data-aos="fade-up" className="max-w-[70%] text-center text-desc">
            We provide customized, cutting-edge technology solutions designed to
            empower your business, streamline operations, and drive sustainable
            growth in the digital era.
          </p>
        </div>
      </div>
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <FAQSection />
    </div>
  );
};

export default ServicesPage;
