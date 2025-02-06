import { images } from "../../constant";

const CompanyExperience = () => {
  const { aboutpageimagethree, aboutpageimagefour, aboutpageimagetwo } = images;
  return (
    <div className="w-full mt-10 sm:mt-20">
      <div className="adjustedwidth mx-auto flex md:flex-row flex-col-reverse justify-between">
        <div className="w-full md:w-[48%] mt-5 md:mt-0">
          <div
            data-aos="fade-right"
            className="rounded-lg overflow-hidden h-[450px]"
          >
            <img
              src={aboutpageimagethree}
              alt="aboutpageimagethree"
              className="h-full object-cover"
            />
          </div>
          <p data-aos="fade-right" className="my-6 text-desc">
            At Avidh AI Solutions, our team blends creativity with technical
            expertise, uniting industry veterans with diverse backgrounds and
            deep domain knowledge. Each member brings unique insights that fuel
            our innovative approach.
            <br />
            We offer a broad spectrum of technology services tailored to the
            evolving needs of our clients. From cutting-edge AI solutions that
            transform decision-making to intuitive mobile applications that
            elevate user engagement, our solutions are designed for the
            fast-paced digital world. <br />
            Whether streamlining business operations or building scalable
            systems, we focus on delivering customized solutions that not only
            solve today’s challenges but also anticipate future demands.
          </p>
          <div
            data-aos="fade-right"
            className="rounded-lg overflow-hidden h-[450px]"
          >
            <img
              src={aboutpageimagefour}
              alt="aboutpageimagefour"
              className="h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-[48%]">
          <h5
            data-aos="fade-left"
            className="text-black text-smhead flex items-center gap-1"
          >
            {/* <p className="w-[15px] h-[15px] rounded-full bg-[#FCAF3D]"></p> */}
            Meet Avidh AI Solutions
          </h5>
          <h2
            data-aos="fade-left"
            className="text-head sm:text-8xl  leading-tight"
          >
            Year of experience in this business field
          </h2>
          <p data-aos="fade-left" className="text-desc">
            At Avidh AI Solutions, we combine creativity with technical
            expertise, uniting seasoned professionals with deep industry
            knowledge. Our diverse team brings unique perspectives that fuel
            innovation and drive meaningful solutions. <br />
            We offer a wide range of technology services tailored to evolving
            client needs. From cutting-edge AI solutions that revolutionize
            decision-making to intuitive mobile applications that enhance user
            engagement, our services are designed to keep pace with the
            ever-changing digital landscape.
          </p>
          <div
            data-aos="fade-left"
            className="my-6 rounded-lg overflow-hidden h-[450px]"
          >
            <img
              src={aboutpageimagetwo}
              alt="aboutpageimagetwo"
              className="w-full h-full object-cover"
            />
          </div>
          <p data-aos="fade-left" className="text-desc">
            At Avidh AI Solutions, we merge creativity with technical expertise,
            uniting a team of seasoned professionals with extensive industry
            knowledge. Our diverse backgrounds bring unique insights that drive
            innovation and push the boundaries of possibility.
          </p>
          <p data-aos="fade-left" className="mt-6 text-desc">
            We offer a diverse range of technology services tailored to the
            evolving needs of our clients. From advanced AI solutions that
            transform decision-making to intuitive mobile applications that
            elevate user engagement, our innovations are designed to thrive in
            today’s fast-moving digital world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyExperience;
