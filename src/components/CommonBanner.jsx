import { FaRegCirclePlay } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import ReactPlayer from "react-player";
import { Link, useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";

const CommonBanner = ({
  video,
  title,
  isImage,
  image,
  page,
  heading,
  description,
}) => {
  const { pathname } = useLocation();
  return (
    <div className="flex relative justify-center items-center  w-screen ">
      <div
        className={` w-screen ${
          page === "About us" ? `h-screen` : `h-[70vh]`
        } object-cover overflow-hidden`}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/20" />
        {isImage ? (
          <img
            src={image}
            alt="banner-image"
            className="object-cover  h-full w-full"
          />
        ) : (
          <ReactPlayer
            url={video}
            loop={true}
            playsinline
            playing={true}
            width="100%"
            height="100%"
            muted
            className="react-player"
          />
        )}
      </div>
      {/* <h1 className="absolute text-4xl md:text-10xl text-white text-center ">
        {title}
      </h1> */}
      <div className="absolute w-full left-0 text-4xl md:text-10xl   text-white">
        <div className=" grid grid-cols-1 sm:grid-cols-2  text-white">
          {page === "About us" && (
            <div className="">
              <h1
                data-aos="fade-up"
                className="whitetextshadow text-black  text-smhead px-5 sm:pl-10 leading-tight uppercase"
              >
                {page}
              </h1>
              <h1
                data-aos="fade-up"
                className="text-black px-5 sm:pl-10 text-smallxl sm:text-1xl leading-tight"
              >
                {heading}
              </h1>
              <p
                data-aos="fade-up"
                className="text-black whitetextshadow font-semibold  text-desc px-5 sm:pl-10 mt-5"
              >
                {description}
              </p>
            </div>
          )}
        </div>
        {page === "Services" && (
          <div className="w-fit mx-auto">
            <div
              data-aos="fade-up"
              className="mt-5  mx-auto text-base sm:text-xl font-medium px-3 py-2 w-fit rounded-full  flex flex-wrap justify-center text-white items-center gap-1 sm:gap-2"
            >
              <Link
                to="/"
                className="text-[24px] blacktextshadow font-semibold"
              >
                Home
              </Link>
              {/* <div className="rounded-full border-2 blacktextshadow w-[20px] h-[20px]"> */}
              <FaRegCirclePlay className=" w-5 h-5" />
              {/* </div> */}
              <h4 className="text-[24px] text-center blacktextshadow font-semibold">
                {page}
              </h4>
            </div>
            {/* <h1 className=" text-white underline underline-offset-4 text-[40px] pl-5 sm:pl-10 leading-tight uppercase">
              {page}
            </h1> */}
            <h1
              data-aos="fade-up"
              className="text-center text-1xl leading-tight"
            >
              {heading}
            </h1>
          </div>
        )}
        {page === "Contact us" && (
          <div className="w-fit mx-auto">
            <div
              data-aos="fade-up"
              className="mt-5 mx-auto text-base sm:text-xl font-medium px-3 py-2 w-fit rounded-full  flex flex-wrap justify-center text-white items-center gap-1 sm:gap-2"
            >
              <Link
                to="/"
                className="text-[24px] blacktextshadow font-semibold"
              >
                Home
              </Link>
              <FaRegCirclePlay className=" w-5 h-5" />
              <h4 className="text-[24px] text-center blacktextshadow font-semibold">
                {page}
              </h4>
            </div>
            {/* <h1 className=" text-white underline underline-offset-4 text-[40px] pl-5 sm:pl-10 leading-tight uppercase">
              {page}
            </h1> */}
            <h1
              data-aos="fade-up"
              className="text-1xl text-center leading-tight"
            >
              {heading}
            </h1>
          </div>
        )}
      </div>
      {/* {pathname !== "/contact-us" && (
        <Link
          className="absolute right-8 bottom-4 lg:inset-y-auto shadow-xl "
          to={"/contact-us"}
        >
          <button className="bg-white lg:px-8 px-4 py-2 lg:py-4 text-sky-400 rounded-full ">
            CONTACT US TODAY →
          </button>
        </Link>
      )} */}
    </div>
  );
};

export default CommonBanner;
