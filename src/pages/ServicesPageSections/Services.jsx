import { ourServices } from "../../constant";
import Drawer from "react-modern-drawer";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(ourServices[0]);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleSelectServiceToShowDetail = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };

  // useEffect(() => {
  //   if (isOpen && selectedService.image) {
  //     const img = new Image();
  //     img.src = selectedService.image;
  //     img.onload = () => setIsImageLoaded(true);
  //   }
  // }, [isOpen, selectedService.image]);

  useEffect(() => {
    let timer;
    if (isOpen) {
      setIsImageLoaded(true);
      timer = setTimeout(() => {
        setIsImageLoaded(false);
        console.log(isImageLoaded, "asdfasdfasd");
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [isOpen]);
  console.log(isImageLoaded, "asdfasdfasd");
  return (
    <div className="py-10 sm:py-20 ">
      <div className="adjustedwidth mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {ourServices.map((obj, index) => {
            const isLargeScreen = window.innerWidth >= 1024;
            const animationType = isLargeScreen
              ? index % 3 === 0
                ? "fade-right"
                : index % 3 === 1
                ? "fade-up"
                : "fade-left"
              : index % 2 === 0
              ? "fade-right"
              : "fade-left";
            return (
              <div
                data-aos={animationType}
                key={obj.id}
                className="relative bg-white hover:bg-gradient-to-b from-[#967BB3] to-[#B9A7CC] aspect-square p-4 rounded overflow-hidden shadow flex justify-center items-center"
              >
                {/* Add content for each service item here */}
                <div className="flex flex-col justify-evenly h-full text-center items-center">
                  <div className="flex justify-center items-center rounded-lg w-[60px] min-h-[60px] bg-white">
                    <img src={obj.img} alt="" width={40} height={40} />
                  </div>
                  <h2 className="text-head font-bold text-center ">
                    {obj.title}
                  </h2>
                  <p className="text-desc">{obj.paragraph}</p>
                  <Link
                    // to={"/services"}
                    onClick={() => handleSelectServiceToShowDetail(obj)}
                    className="flex items-center border-b text-black w-[6.13rem] "
                  >
                    Learn More <MdKeyboardArrowRight />
                  </Link>
                </div>
                {/* <p>{obj.description}</p> */}
                {/* <img
                src={obj.img || homepageaboutus}
                alt={obj.img || homepageaboutus}
                className="absolute w-full h-full object-cover  opacity-0 hover:opacity-100 transition-opacity duration-1000"
              /> */}
              </div>
            );
          })}
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="top"
        className="p-4 z-10 w-screen"
        lockBackgroundScroll
      >
        <div className="mb-3 flex items-center justify-end pr-[.7rem] py-[.4rem]">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-[2.2rem]"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="flex flex-col gap-6 items-center text-white pb-[2rem]">
          <h1 className="heading-2 text-2xl md:text-4xl">
            {selectedService.title}
          </h1>
          {/* {isImageLoaded && (
            <div className="animate-pulse w-[50%] h-[65vh] rounded-3xl bg-gray-200" />
          )} */}
          <div
            className={`${
              isImageLoaded ? `animate-pulse bg-gray-200` : ` bg-transparent`
            } w-[50%] h-[65vh] rounded-3xl `}
          >
            <img
              loading="lazy"
              src={!isImageLoaded && selectedService.image}
              alt={selectedService.title}
              className={`w-full max-h-[65vh] rounded-3xl hover:scale-105 transition-all duration-700 ${
                !isImageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setIsImageLoaded(false)}
            />
          </div>

          <p className="text-desc whitespace-pre-line text-sm md:text-base text-center max-w-[80%]">
            {selectedService.description}
          </p>
        </div>
      </Drawer>
    </div>
  );
};

export default Services;
