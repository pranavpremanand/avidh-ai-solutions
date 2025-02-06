import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { images, routes } from "../constant";
import { Link, useLocation } from "react-router-dom";
import "react-modern-drawer/dist/index.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const { Logo } = images;
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      data-aos="fade-down"
      className=" fixed top-0 w-full   z-50 text-black text-base font-medium"
    >
      <div className="py-4  border-x border-b backdrop-blur-sm border-customPurple rounded-b-xl  bg-headerandfooterbg bg-opacity-60   w-[90%] flex justify-between items-center gap-10 mx-auto">
        <div className="flex justify-between gap-2  items-center min-w-fit w-full  mx-5">
          <div className="min-w-fit h-[1rem] md:h-[5.75rem] flex items-center">
            <Link to="/">
              <div className="flex justify-center items-center min-w-fit">
                <img
                  src={Logo}
                  className="h-[5rem] md:h-[7rem]"
                  alt="logo"
                />
              </div>
            </Link>
          </div>

          <div className="lg:flex items-center max-w-[662px] justify-around w-full min-w-fit hidden">
            {routes.map(({ name, path }) => (
              <Link
                to={`${path}`}
                className={` text-[14px]  ${
                  pathname === `${path}` ? "text-white " : "text-gray-400 "
                }`}
                key={path}
              >
                {name.toUpperCase()}
              </Link>
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
            <Link to={"/contact-us"}>
              <div className="primary-btn">GET STARTED</div>
            </Link>
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
          {routes.map(({ name, path }) => (
            <Link
              onClick={() => setIsOpen(false)}
              key={path}
              className="text-3xl text-white font-medium transition-colors duration-300 link"
              to={path}
            >
              {name}
            </Link>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
