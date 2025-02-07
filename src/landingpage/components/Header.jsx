import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Link as Scroll } from "react-scroll";
import "react-modern-drawer/dist/index.css";
import { images } from "../../constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { Logo, phonenumbersvg } = images;
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

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

  return (
    <div
      data-aos="fade-down"
      className=" fixed top-0 w-full   z-50 text-black text-base font-medium"
    >
      <div className="py-4  border-x border-b backdrop-blur-sm border-customPurple rounded-b-xl  bg-headerandfooterbg bg-opacity-60   w-[90%] flex justify-between items-center gap-10 mx-auto">
        <div className="flex justify-between gap-2 text-white  items-center min-w-fit w-full  mx-5">
          <div className="min-w-fit h-[1rem] md:h-[5.75rem] flex items-center">
            <Scroll smooth={true} to="banner" className="cursor-pointer">
              <div className="flex justify-center items-center min-w-fit">
                <img
                  src={Logo}
                  className="h-[1.25rem] md:h-[2rem]"
                  alt="logo"
                />
              </div>
            </Scroll>
          </div>

          <div className="lg:flex items-center max-w-[662px] justify-around w-full min-w-fit hidden">
            <Link to="/" className="link text-sm cursor-pointer">
              Home
            </Link>
            {options.map((option) => (
              <Scroll
                to={`${option.path}`}
                className="link text-sm cursor-pointer"
                key={option.path}
                spy={true}
                smooth={true}
                offset={-140}
                duration={3000}
                activeClass="active-link"
              >
                {option.name}
              </Scroll>
            ))}
          </div>

          <div className="lg:flex  px-7  min-w-fit gap-16 hidden">
            {/* <div className="flex min-w-fit items-center text-[14px]  gap-2">
              <img
                src={phonenumbersvg}
                alt={phonenumbersvg}
                width={15}
                height={18}
                className="pt-[4px]"
              />
              <h3 className="min-w-fit">CALL US: +91-34343493493</h3>
            </div> */}
            <Scroll
              to={`contact`}
              className="primary-btn text-sm"
              key={"contact"}
              spy={true}
              smooth={true}
              offset={-140}
              duration={1000}
              activeClass="active-link"
            >
              GET STARTED
            </Scroll>
            {/* <div className="secondary-btn">GET STARTED</div> */}
          </div>

          <div
            className="block lg:hidden justify-self-end"
            onClick={toggleDrawer}
          >
            <Hamburger
              color="white"
              size="23"
              toggled={isOpen}
              rounded
              toggle={setIsOpen}
            />
          </div>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="py-4 px-10 z-10"
      >
        <div className="mb-6 flex items-center justify-end pr-[.7rem] py-[.4rem]">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-[2.2rem]"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="flex flex-col gap-6">
          <Link
            to="/"
            className="text-3xl text-white font-medium transition-colors duration-300 link"
          >
            Home
          </Link>
          {options.map(({ name, path, id }) => (
            <Scroll
              onClick={() => setIsOpen(false)}
              key={id}
              className="text-3xl text-white font-medium transition-colors duration-300 link"
              to={path}
              spy={true}
              smooth={true}
              offset={path === "services" ? -80 : -140}
              duration={1000}
            >
              {name}
            </Scroll>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
