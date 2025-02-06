import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "../components/Scrolltop";
import AOS from "aos";
import "aos/dist/aos.css";

const AppLayout = () => {
  AOS.init({
    once: true,
    duration: 1000,
  });
  return (
    <div className="max-w-screen overflow-hidden">
      <Header />
      {/* className="mt-20 lg:mt-[124px]" */}
      <div>
        <ScrollToTop />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
