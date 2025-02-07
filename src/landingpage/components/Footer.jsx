import { Link, useLocation } from "react-router-dom";
import {
  BsArrowUpCircleFill,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
  BsWhatsapp,
} from "react-icons/bs";
// import { MdEmail } from "react-icons/md";
import { BiMapPin } from "react-icons/bi";
import { FaBlogger, FaFacebook } from "react-icons/fa";
import { companyDetails, images } from "../../constant";
import { Link as ScrollLink } from "react-scroll";

const socialLinks = [
  // { href: `https://wa.me/${companyDetails.whatsapp}`, Icon: BsWhatsapp },
  {
    href: ``,
    Icon: BsWhatsapp,
  },
  { href: "", Icon: BsInstagram },
  { href: "", Icon: BsTwitterX },
  {
    href: "",
    Icon: FaFacebook,
  },
  { href: "", Icon: BsLinkedin },
  { href: "", Icon: FaBlogger },
];

const options = [
  {
    name: "About Us",
    path: "about",
  },
  {
    name: "Services",
    path: "services",
  },
  // {
  //   name: "FAQs",
  //   path: "faqs",
  // },
  {
    name: "Contact Us",
    path: "contact",
  },
];

const Footer = () => {
  const { logoSquare } = images;
  const { pathname } = useLocation();
  console.log(pathname, "asfasdf");
  return (
    // || pathname === "/services"
    <>
      <footer
        className={`flex flex-col md:flex-row w-full   ${
          pathname === "/about-us" ? `mt-0` : `mt-32`
        }`}
      >
        {/* Logo Section */}
        <div className="bg-white w-full md:w-1/4 p-8 flex items-center justify-center">
          <Link href="/" className="text-white text-3xl font-light">
            <img src={logoSquare} alt="logo" className="max-h-[10rem]" />
          </Link>
        </div>

        {/* Content Section */}
        <div className="bg-[#dcd3e7] w-full md:w-3/4 p-4 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-10">
            {/* Get in Touch Section */}
            <div className="space-y-4 col-span-2 flex justify-between flex-col">
              <h3 className="font-semibold text-lg">Get in Touch</h3>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg underline">Email</h4>
                <p className="text-sm">abc@zyc.com</p>
              </div>
              {/* Social Icons */}
              <div className="flex items-center flex-wrap justify-center gap-4 bg-white rounded-full px-2 py-2 sm:w-fit w-full">
                {socialLinks.map(({ href, Icon }, index) => (
                  <Link
                    key={index}
                    to={href}
                    className=" hover:opacity-80 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black flex justify-center items-center"
                  >
                    <Icon className="text-white" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-4">
              <Link
                to="/"
                className="link block font-semibold text-lg hover:underline cursor-pointer"
              >
                Home
              </Link>
              {options.map((option) => (
                <ScrollLink
                  to={`${option.path}`}
                  className="link block font-semibold text-lg hover:underline cursor-pointer"
                  key={option.path}
                  spy={true}
                  smooth={true}
                  offset={-140}
                  duration={3000}
                  activeClass="active-link"
                >
                  {option.name}
                </ScrollLink>
              ))}
              {/* {options.map(({ name, path }) => (
                <Link
                  to={path}
                  className="block font-semibold text-lg hover:underline"
                  key={path}
                >
                  {name}
                </Link>
              ))} */}
            </div>

            {/* Registered Office */}
            <div className="flex flex-col h-full justify-between space-y-2">
              <div>
                <div className="flex items-center gap-2">
                  <BiMapPin className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">Registered office</h3>
                </div>
                <p className="text-sm">{companyDetails.address}</p>
              </div>
              <div
                className="text-black flex items-center justify-end gap-2 font-semibold text-lg cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Scroll to Top{" "}
                <BsArrowUpCircleFill className="animate-bounce text-black" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
