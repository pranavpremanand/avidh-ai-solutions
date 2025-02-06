import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="w-screen  flex flex-col justify-center items-center">
      <div className="wrapper h-full flex flex-col items-center pt-[10rem] sm:pt-[15rem] sm:pb-[10rem] gap-3 text-[#2e2e45] text-center">
        <h1 className="heading-1">Thank You!</h1>
        <p className="desc !font-semibold">
          We have received your message and will get back to you as soon as
          possible.
        </p>
        <Link to="/" className="primary-btn w-fit mt-4 text-black">
          Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
