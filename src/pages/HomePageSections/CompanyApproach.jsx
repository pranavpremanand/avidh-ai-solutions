// import ReactPlayer from "react-player";
// import RoundedHeading from "../../components/RoundedHeading";
import { companyProcess } from "../../constant";
// bg-gradient-to-r from-[#7186FF] to-[#B9A7CC]
const CompanyApproach = () => {
  // const { homepagebackgroundvideo } = video;
  // const {
  //   // homepageoverimageone,
  //   // homepageoverimagetwo,
  //   verticaldivider,
  // } = images;
  return (
    <div className="flex flex-col items-center mt-10 sm:mt-20">
      {/* <RoundedHeading text="our approach" /> */}
      <div className="adjustedwidth mt-6 sm:mt-10">
        <div
          // data-aos="fade-up"
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 "
        >
          <div className="w-full">
            <h2
              data-aos="fade-up"
              className="text-smhead text-black sm:text-start text-center leading-tight"
            >
              Our Approach
            </h2>
            <h4
              data-aos="fade-up"
              className="text-sechead mt-4 leading-tight sm:text-start text-center text-black"
            >
              Meet our process
            </h4>
            <p data-aos="fade-up" className="max-w-full text-desc text-start">
              At Avidh AI Solutions, we believe true success is built on
              collaboration and mutual understanding. Rather than merely
              providing services, we forge lasting partnerships. Our holistic
              approach integrates us into your team, allowing us to work closely
              together and align our strategies seamlessly with your business
              objectives.
            </p>
          </div>
        </div>
      </div>
      <div className="adjustedwidth mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-4">
        {companyProcess.map((obj) => (
          <div
            data-aos="fade-up"
            key={obj.id}
            className="flex  flex-col text-start sm:text-start"
          >
            <img
              src={obj.img}
              alt="verticaldivider"
              className="h-full object-cover rounded-xl max-h-[370px]"
            />
            <div className=" min-h-[290px] md:min-h-[225px] -mt-[100px]  shadow-2xl bg-white/90 mx-5 p-4 rounded-xl text-center  flex flex-col justify-start items-center">
              <h3 className="text-head h-fit">{obj.title}</h3>
              <p className="h-fit text-desc">{obj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyApproach;
