// import RoundedHeading from "../../components/RoundedHeading";
import { meetCompanyDetails } from "../../constant";

const MeetCompany = () => {
  return (
    <div className="mt-10 sm:mt-30">
      <h2 className="text-sechead mb-10 sm:mb-0 text-center text-black leading-tight">
        meet Avidh AI Solutions
      </h2>
      {/* <RoundedHeading text="meet Avidh AI Solutions" /> */}
      <div className="flex justify-center">
        <div className="adjustedwidth  grid grid-cols-1 sm:grid-cole-2 md:grid-cols-3 mt-2 sm:mt-10 mb-10 gap-8">
          {meetCompanyDetails.map((obj) => (
            <div
              data-aos="fade-up"
              key={obj.id}
              className={`flex flex-col items-center rounded-xl shadow-xl border border-slate-100`}
            >
              <div className=" sm:min-h-[365px] sm:max-h-[365px] flex items-center">
                <img
                  src={obj.img}
                  alt={obj.img}
                  className=" object-cover mx-auto rounded-xl"
                />
              </div>
              <div className=" mx-5 py-5">
                <h4 className="text-head">{obj.heading}</h4>
                <p className="desc text-desc mt-2">{obj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetCompany;
