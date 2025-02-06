import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { teamMembers } from "../../constant";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

// import shareIcon from "../../assets/images/svg/share.svg";
// import msg from "../../assets/images/svg/msg.svg";
// import msgwhite from "../../assets/images/svg/msgwhite.svg";
// import sharewhite from "../../assets/images/svg/sharewhite.svg";
const CompanyTeam = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hover, setHover] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    breakpoints: {
      "(min-width: 850px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1300px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });
  console.log(currentSlide, "thialkdfjmaslkdfd");

  return (
    <div data-aos="fade-up" className="py-20 mt-4 bg-[#F9F9F9]">
      <div className="adjustedwidth mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1 flex flex-col lg:items-start items-center lg:text-start text-center">
            <h3 data-aos="fade-left" className="leading-tight text-smhead">
              {" "}
              {/* <p className="w-[15px] h-[15px] rounded-full bg-[#FCAF3D]"></p> */}
              Our Experts
            </h3>
            <h3 className="text-head sm:text-8xl">Meet our team</h3>
            <p className="text-desc">
              Meet our team! A dynamic group of professionals dedicated to
              excellence and innovation. Each member brings unique skills and
              expertise, working together to achieve exceptional results.
            </p>
          </div>
          <div className="mt-4 col-span-1 lg:col-span-2">
            <div className="navigation-wrapper flex  items-center w-full ">
              {/* <div
                className={`sm:w-[65px] w-[30px] h-[30px] sm:h-[65px] select-none  text-[17px] bg-white flex justify-center items-center text-black rounded-full  cursor-pointer ${
                  currentSlide === 0
                    ? "opacity-40 pointer-events-none"
                    : "shadow-xl"
                }`}
                onClick={() => instanceRef.current?.prev()}
              >
                ←
              </div> */}
              <div ref={sliderRef} className="keen-slider   mx-auto ">
                {teamMembers.map((obj) => (
                  <div
                    key={obj.id}
                    onMouseEnter={() => setHover(obj.id)}
                    onMouseLeave={() => setHover("")}
                    className="keen-slider__slide  group   bg-white  pt-4 flex flex-col justify-between shadow-md"
                  >
                    <div className=" w-full   px-4">
                      <div className="relative max-h-[300px] w-full aspect-square bg-gray-200 rounded-lg hover">
                        <div className="absolute rounded-lg bottom-0 h-0 w-full bg-gradient-to-t from-primary/50 to-transparent transition-all duration-300 group-hover:h-full flex items-end justify-center gap-4">
                          <FaInstagram className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-3" />
                          <FaFacebook className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-3" />
                          <FaLinkedin className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-3" />
                          <FaTwitter className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-3" />
                        </div>{" "}
                      </div>
                    </div>
                    <div className="text-center py-4 px-4">
                      <h3 className="text-[21px] font-bold">{obj.name}</h3>
                      <p>{obj.position}</p>
                    </div>
                    <div className="w-full absolute bottom-0">
                      <div className="w-[6rem] text-desc  h-[5px] bg-primary mx-auto" />
                    </div>
                  </div>
                ))}
              </div>
              {/* <div
                className={`sm:w-[65px] w-[30px] h-[30px] sm:h-[65px] select-none  text-[17px] bg-white flex justify-center items-center text-black rounded-full  cursor-pointer ${
                  currentSlide ===
                  instanceRef.current?.track.details.slides.length - 1
                    ? "opacity-40 pointer-events-none"
                    : "shadow-xl"
                }`}
                onClick={() => instanceRef.current?.next()}
              >
                →
              </div> */}
            </div>
          </div>
        </div>
        {/* <div className="mt-10 text-center">
          <p className="text-decsriptioncolor">
            Contact Our Expert Team Memeber To Take Our
            <span className="text-sky-400 font-semibold"> Best Policies →</span>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default CompanyTeam;
