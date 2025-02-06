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
        {/* <div className="adjustedwidth mx-auto">
          <h4
            data-aos="fade-up"
            className="flex items-center gap-1 font-bold text-[#112675]"
          >
            <p className="w-5 h-5 rounded-full bg-[#112675]"></p>Our Services
          </h4>
          <div
            data-aos="fade-up"
            className="flex md:flex-row flex-col md:gap-0 gap-5 justify-between mt-8"
          >
            <h2 className="text-3xl sm:text-5xl leading-[43px] w-full md:w-[49%] flex items-start gap-10">
              Empowering Your Business with Innovative, Tailored Technology
              Solutions
              <div className="h-20 w-[7px] bg-sky-400" />
            </h2>
            <p className="w-full md:w-[40%]">
              At Vollo Inc., we understand that no two businesses are the same,
              which is why we offer an extensive range of services designed to
              meet your specific needs.
            </p>
          </div>
        </div> */}
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
