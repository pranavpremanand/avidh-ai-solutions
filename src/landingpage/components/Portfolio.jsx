import RoundedHeading from "../../components/RoundedHeading";
import { portfolioDataApp, portfolioDataWeb } from "../../constant";

const Portfolio = ({ page }) => {
  const portfolioData = page === "web" ? portfolioDataWeb : portfolioDataApp;

  return (
    <div className="adjustedwidth mx-auto">
      <div className="wrapper py-[4rem] flex flex-col text-black gap-3">
        <div className="flex flex-col gap-3">
          {/* <h2
            data-aos="fade-up"
            className="text-[2rem] md:text-sechead leading-tight font-semibold text-center"
          > */}
          <RoundedHeading text=" Our Portfolio" />
          {/* </h2> */}
          <p
            data-aos="fade-up"
            className="mt-4 mb-3 text-center text-desc max-w-[40rem] mx-auto"
          >
            Explore some of the successful projects we have delivered,
            showcasing our expertise across diverse domains. Here are some of
            our valued clients and the work we've done for them
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-3">
          {portfolioData.map((project, index) => (
            <li
              key={index}
              data-aos="fade-up"
              className="flex flex-col items-center"
            >
              <div className="relative w-full">
                <img
                  src={project.img}
                  alt={`${project.title} app preview`}
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <strong className="w-full text-center absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white text-black bg-opacity-75 text-main px-3 py-1 rounded">
                  {project.title}
                </strong>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
