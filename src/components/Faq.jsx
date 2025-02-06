import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { faqItems, images } from "../constant";
import { Link } from "react-router-dom";

const { aiImage } = images;
const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState(null);
  //   const { faqbg } = images;
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat text-black"
      //   style={{ backgroundImage: `url(${faqbg})` }}
    >
      {/* <div className="absolute top-0 w-full h-full bg-black bg-opacity-25" /> */}
      <div className="container mx-auto px-4 py-12 bg-cover bg-center bg-no-repeat">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {/* FAQ Column */}
          <div className=" md:col-span-2 space-y-6">
            <div></div>
            <div className="space-y-2">
              <h2
                data-aos-offset="-800"
                data-aos="fade-up"
                className="text-smhead uppercase tracking-wide text-muted-foreground"
              >
                F.A.Q
              </h2>
              <h1
                data-aos-offset="-800"
                data-aos="fade-up"
                className="text-sechead font-bold tracking-tight "
              >
                Frequently Asked Questions
              </h1>
            </div>

            <div className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <div
                  data-aos-offset="-800"
                  data-aos="fade-up"
                  key={item.id}
                  className="border"
                >
                  <AccordionItem
                    key={index}
                    index={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex}
                    setIsOpen={setOpenIndex}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div
              data-aos-offset="-800"
              data-aos="fade-up"
              className="relative aspect-[4/3] w-full overflow-hidden rounded-lg"
            >
              <img
                src={aiImage}
                alt="AI Technology Illustration"
                //   fill
                className="object-cover w-full h-full"
              />
            </div>
            <div
              data-aos-offset="-800"
              data-aos="fade-up"
              className="rounded-lg bg-gray-200 p-6"
            >
              <h2 className="mb-4 text-[21px] font-bold">
                Any questions you want to ask?
              </h2>
              <p className="mb-6 text-muted-foreground text-desc">
                If you have any queries or need assistance, feel free to reach
                out to us. We’re here to help and provide the answers you’re
                looking for.
              </p>
              <Link to={"/contact-us"}>
                <button className="primary-btn">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

const AccordionItem = ({ question, answer, index, isOpen, setIsOpen }) => {
  const handleToggle = () => {
    setIsOpen((prev) => (prev === index ? null : index));
  };

  return (
    <div>
      <button
        onClick={handleToggle}
        className={`${
          isOpen === index ? "bg-primary text-white" : "bg-transparent"
        } flex w-full items-center justify-between pl-3 py-4 text-left text-[21px] font-bold`}
      >
        {question}
        <BiChevronDown
          className={`h-10 w-10 transform transition-transform duration-200 ${
            isOpen === index ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen === index && (
        <div className="px-3 overflow-hidden text-sm transition-all">
          <div className="pb-4 text-desc mt-5">
            <ul>
              {answer.split("\n").map((text, idx) => (
                <li key={idx}>
                  {/* Bold the email and phone number within the answer */}
                  {text}
                  {/* {text.includes("info@volloinc.com") ? (
                    <span className="font-bold">{text}</span>
                  ) : text.includes("+91-6300021466") ? (
                    <span className="font-bold">{text}</span>
                  ) : (
                    text
                  )} */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
