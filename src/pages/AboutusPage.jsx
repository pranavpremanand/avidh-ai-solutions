import CommonBanner from "../components/CommonBanner";
// import aboutVideo from "../assets/video/aboutusbanner.mp4";
import Aboutus from "./AboutPageSections/Aboutus";
import CompanyAchievements from "../components/CompanyAchievements";
import CompanyExperience from "./AboutPageSections/CompanyExperience";
import CompanyTeam from "./AboutPageSections/CompanyTeam";
import Testimonials from "./AboutPageSections/Testimonials";
import { images } from "../constant";
const AboutusPage = () => {
  const { aboutusbanner } = images;
  return (
    <>
      <CommonBanner
        image={aboutusbanner}
        isImage={true}
        title={"About Company"}
        page="About us"
        heading="Driving Business Growth with Innovation"
        description="At Avidh AI Solutions, we specialize in delivering customized technology solutions that help businesses succeed in a rapidly evolving digital world. With expertise in Artificial Intelligence, we create innovative, scalable systems that enhance efficiency, fuel growth, and ensure long-term success through strategic collaboration."
      />
      <Aboutus />
      <CompanyAchievements />
      <CompanyExperience />
      {/* <CompanyTeam /> */}
      <Testimonials />
    </>
  );
};

export default AboutusPage;
