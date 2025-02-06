import { images } from "../../constant";

const Aboutus = () => {
  const { aboutpageimageone } = images;
  return (
    <div className="w-full mt-8 sm:mt-20">
      <div className="adjustedwidth mx-auto">
        <div className="flex flex-col gap-5 md:gap-4 md:flex-row justify-between">
          <div
            data-aos="fade-right"
            className="w-full md:w-[50%] object-cover min-h-full rounded-lg overflow-hidden"
          >
            <img
              src={aboutpageimageone}
              alt={aboutpageimageone}
              className="object-cover w-full min-h-full"
            />
          </div>
          <div data-aos="fade-left" className="w-full md:w-[45%]">
            <h3 className="text-smhead font-medium uppercase leading-tight ">
              About Us
            </h3>

            <h2 className="text-sechead leading-tight">
              Shaping the Future of Digital Solutions
            </h2>
            <p className="text-desc mt-4">
              At Avidh AI Solutions, we lead the way in technological
              innovation, delivering bespoke solutions that empower businesses
              to thrive in the ever-evolving digital world. Whether you're a
              startup or an established enterprise, we are your trusted
              technology partner. <br />
              With a team of industry experts and deep AI-driven insights, we
              craft tailored solutions designed for efficiency, growth, and
              long-term success. Every challenge is met with creativity,
              precision, and a commitment to excellence, ensuring you stay ahead
              of the competition.
              <br />
              Collaboration and innovation are at the core of our approach. More
              than just service providers, we integrate seamlessly with your
              team, driving your business forward with scalable, future-ready
              solutions that evolve with you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
