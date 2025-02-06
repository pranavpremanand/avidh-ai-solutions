import { images } from "../constant";
// import projectdone from "../assets/images/svg/projectsdone.svg";
// import proteam from "../assets/images/svg/proteam.svg";
// import customers from "../assets/images/svg/customers.svg";
import backgroundimage from "../assets/images/overvaluesbg.png";
import Counter from "./Counter";
import { Link } from "react-router-dom";

const countDetails = [
  {
    id: 1,
    title: "Projects Completed",
    count: 250,
    suffix: "+",
    p: "Proven expertise in delivering diverse projects across various industries.",
  },
  {
    id: 2,
    title: "Customer Satisfaction",
    count: 200,
    suffix: "+",
    p: "Committed to building strong, long-term partnerships worldwide.",
  },
  {
    id: 3,
    title: "Global Reach",
    count: 25,
    suffix: "+",
    p: "Delivering excellence across international markets with a strong presence.",
  },
  {
    id: 4,
    title: "Success Rate",
    count: 99,
    suffix: "%",
    p: "Consistently achieving outstanding results for businesses worldwide.",
  },
];

const CompanyAchievements = () => {
  const { companyachievementsimage } = images;
  return (
    <div
      data-aos="fade-up"
      className="relative w-full h-full   py-10 sm:overflow-hidden mt-10 sm:mt-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundimage})`,
      }}
    >
      <div className="absolute w-full top-0 h-full bg-black/50" />
      <div className="adjustedwidth z-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 py-[6rem]">
        <div className="flex flex-col gap-8 text-white">
          <h3
            data-aos="fade-left"
            className="leading-tight uppercase text-smhead text-white"
          >
            Our Values
          </h3>
          <h3
            data-aos="fade-up"
            className="text-head sm:text-8xl leading-tight text-white"
          >
            Enabling Business Growth with Custom Technology Solutions
          </h3>
          <p data-aos="fade-up" className=" text-white/80 text-desc ">
            At Avidh AI Solutions, we craft tailored technology solutions that
            fuel business success. Our expert team harnesses innovation to boost
            efficiency, drive growth, and keep you ahead of the competition.
          </p>
          <Link data-aos="fade-up" to={"/services"} className="z-50">
            <h3 className="primary-btn  w-fit">Discover More</h3>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {countDetails.map((obj) => (
            <div
              key={obj.id}
              data-aos="fade-left"
              className="flex flex-col py-5 items-center justify-center sm:items-start border border-slate-500 bg-white/10 rounded-xl"
            >
              {/* <div className="flex h-[64px] w-[64px] bg-white rounded-full shadow-2xl  justify-center items-center">
              <img src={obj.} alt="proteam" />
            </div> */}
              <h1 className="text-[57px] w-full">
                <Counter targetNumber={obj.count} suffix={obj.suffix} />
              </h1>
              <h5 className="text-[#D3D3D3] text-shadow text-center text-[17px] sm:text-[21px] font-bold w-full">
                {obj.title}
              </h5>
              {/* <p className="text-center text-white">{obj.p} </p> */}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full bg-black/50 -z-10" />
    </div>
  );
};

export default CompanyAchievements;
