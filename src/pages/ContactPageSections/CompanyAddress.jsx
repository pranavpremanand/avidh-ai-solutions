import location from "../../assets/images/svg/location.svg";
import mail from "../../assets/images/svg/mail.svg";
import clock from "../../assets/images/svg/clock.svg";
import MapComponent from "../../components/MapComponent";
const CompanyAddress = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
        <div
          data-aos="fade-up"
          className="flex flex-col items-center justify-center py-14 gap-4 bg-[#967BB3]"
        >
          <img src={location} alt="location" width={63} height={63} />
          <h3 className="text-2xl lg:text-6xl">Address line</h3>
          <p>Bowery St, New York, NY 10013, USA</p>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col items-center justify-center py-14 gap-4 bg-[#B9A7CC]"
        >
          <img src={mail} alt="mail" width={63} height={63} />
          <h3 className="text-2xl lg:text-6xl">Phone Number</h3>
          <p>+1255 - 568 - 6523</p>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col items-center justify-center py-14 gap-4 bg-[#DCD3E6]"
        >
          <img src={clock} alt="clock" width={63} height={63} />
          <h3 className="text-2xl lg:text-6xl">Opening Hours</h3>
          <p>
            Monday - Friday <br />
            09:00 AM - 05:00 PM
          </p>
        </div>
      </div>
      <div>
        <MapComponent />
      </div>
    </div>
  );
};

export default CompanyAddress;
