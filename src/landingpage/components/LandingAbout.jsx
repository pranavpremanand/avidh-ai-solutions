import { Link as ScrollLink } from "react-scroll";
import { images, landingpageimages } from "../../constant";
import RoundedHeading from "../../components/RoundedHeading";

const LandingAbout = ({ page }) => {
  const isWebDevelopment = page === "web";
  const { landingaboutpc, landingpagebannerweb } = landingpageimages;
  const { swebdevelopmentimage, smobiledevelopmentimage } = images;
  return (
    <div className="mt-16">
      <section
        id="about"
        className="adjustedwidth mx-auto bg-white text-black "
      >
        <div
          data-aos="fade-up"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          <RoundedHeading
            text={isWebDevelopment ? "Web Development" : "App Development"}
          />
          {/* {isWebDevelopment ? "Web Development" : "App Development"} */}
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div
            data-aos="fade-right"
            className="flex h-full flex-col gap-7 text-center lg:text-start"
          >
            <div className="flex flex-col gap-7">
              <h2 className="text-sechead">
                {isWebDevelopment
                  ? "Cutting-Edge Web Development Solutions for Future-Ready Brands"
                  : "Crafting High-Impact Apps to Drive Business Growth and Engagement."}
              </h2>
              <p className="text-desc">
                {isWebDevelopment
                  ? "At Avidh AI Solutions, we craft high-performance websites and digital platforms that empower businesses to succeed online. From custom development to responsive design, we create seamless, visually striking solutions tailored to your needs."
                  : "At Avidh AI Solutions, we design and develop intuitive, high-performing mobile apps that cater to diverse business needs. Our expert team blends innovation with functionality to build engaging applications that drive growth and user satisfaction."}
              </p>
            </div>
            <div className="flex sm:flex-row flex-col justify-center lg:justify-start gap-5 mt-4">
              <ScrollLink
                to="contact"
                smooth
                offset={-120}
                className="primary-btn"
              >
                Contact Us
              </ScrollLink>

              <ScrollLink
                to="services"
                smooth
                offset={-120}
                className="text-black hover:text-white cursor-pointer hover:scale-105 font-light tracking-wide bg-transparent hover:bg-secondary hover:-translate-y-1 shadow-2xl shadow-transparent  px-6 py-3 min-w-[7rem] flex justify-center text-center transition-all duration-300 rounded-lg"
              >
                Our Services
              </ScrollLink>
            </div>
          </div>
          <div data-aos="fade-left" className="flex justify-center h-full">
            <img
              src={
                isWebDevelopment
                  ? landingpagebannerweb
                  : smobiledevelopmentimage
              }
              className="object-cover max-h-[30rem] rounded-lg"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingAbout;
