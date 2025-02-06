import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { images, testimonials } from "../../constant";

const animation = { duration: 30000, easing: (t) => t };

const Testimonials = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      renderMode: "performance",
      drag: false,
      slides: {
        perView: 3,
        spacing: 20,
      },
      breakpoints: {
        "(max-width: 1024px)": {
          slides: {
            perView: 1,
            spacing: 20,
          },
        },
      },

      // created(s) {
      //   s.moveToIdx(2, true, animation);
      // },
      // updated(s) {
      //   s.moveToIdx(s.track.details.abs + 2, true, animation);
      // },
      // animationEnded(s) {
      //   s.moveToIdx(s.track.details.abs + 2, true, animation);
      // },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  const [sliderRefTwo] = useKeenSlider(
    {
      loop: true,
      rtl: true,
      renderMode: "performance",
      drag: false,
      slides: {
        perView: 3,
        spacing: 20,
      },
      breakpoints: {
        "(max-width: 1024px)": {
          slides: {
            perView: 1,
            spacing: 20,
          },
        },
      },
      // created(s) {
      //   s.moveToIdx(2, true, animation);
      // },
      // updated(s) {
      //   s.moveToIdx(s.track.details.abs + 2, true, animation);
      // },
      // animationEnded(s) {
      //   s.moveToIdx(s.track.details.abs + 2, true, animation);
      // },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  let { testimonialbackground } = images;
  return (
    <div
      className="relative mt-10 py-[6rem] sm:mt-20 bg-cover bg-bottom bg-no-repeat bg-opacity-10"
      style={{ backgroundImage: `url(${testimonialbackground})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="">
        <div
          data-aos="fade-up"
          className="w-full flex flex-col items-center text-center "
        >
          <h3 className="text-sechead leading-tight text-white mt-10">
            Client Testimonials
          </h3>
          <p className="text-desc text-gray-200 max-w-[95%] sm:max-w-[50%] text-center mt-7">
            At <strong>Avidh AI Solutions</strong> , we take pride in the
            success of our clients. Here&apos;s what some of them have to say
            about their experience working with us
          </p>
        </div>
        <div className="flex flex-col  max-w-[95%] mx-auto ">
          <div
            id="srd"
            // data-aos="fade-up"
            ref={sliderRef}
            className="keen-slider flex sm:items-center w-[95%] 2xl:max-w-[90rem] 2xl:mx-auto mt-16 min-h-[400px] text-white"
          >
            {testimonials.map((obj) => (
              <div
                key={obj.id}
                // sm:h-[367px]min-h-[287px]
                className="keen-slider__slide flex flex-col justify-between   h-full  shadow-lg w-full bg-white/90 rounded-2xl round p-7 border  border-gray-400"
              >
                <div className="w-full sm:flex-row flex-col gap-3 sm:gap-0 flex justify-between items-center">
                  <img src={obj.starimg} alt={obj.name} className="h-[31px]" />
                </div>
                <div className="my-5">
                  {/* <h3 className="text-head">{obj.about}</h3> */}
                  <p className="text-center sm:text-start text-desc text-purple-600">
                    {obj.says}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-black">
                  {/* <img
                    src={obj.img}
                    alt={obj.name}
                    className="rounded-full w-[69px] h-[69px] object-cover"
                  /> */}
                  <div>
                    <h4 className="font-semibold text-smhead">{obj.name}</h4>
                    <h3 className=" text-desc text-center sm:text-start">
                      {obj.position}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/** SECOND TESTIMONIAL */}
          {/* <div
            key="dfsf"
            // data-aos="fade-up"
            ref={sliderRefTwo}
            className="keen-slider flex sm:items-center  mt-4 min-h-[400px]"
          >
            {testimonials.map((obj) => (
              <div
                key={obj.id}
                className="keen-slider__slide sm:h-[357px] h-full min-h-[287px]  shadow-lg w-full bg-white/30 rounded-2xl round p-7  border border-gray-400"
              >
                <div className="w-full sm:flex-row flex-col gap-3 sm:gap-0 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img
                      src={obj.img}
                      alt={obj.name}
                      className="rounded-full w-[69px] h-[69px] object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-white">- {obj.name}</h4>
                      <h3 className="text-white text-[14px] text-center sm:text-start">
                        {obj.position}
                      </h3>
                    </div>
                  </div>
                  <img src={obj.starimg} alt={obj.name} className="h-[31px]" />
                </div>
                <div className="my-5">
                  <p className="text-center sm:text-start text-white">
                    {obj.says}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
