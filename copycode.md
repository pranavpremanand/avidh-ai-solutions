    <div
        className={`bg-[#967bb3]/50 w-full  ${
          pathname === "/about-us" ? `mt-0` : `mt-32`
        } `}
      >
        <div className="adjustedwidth mx-auto md:pt-10">
          <div className="flex md:gap-0 gap-5 md:flex-row flex-col border-b pb-5 border-[#253450] justify-between items-start md:pt-0 pt-10 md:items-center text-white">
            <Link to="/" className="h-[1rem] md:h-[5.75rem] flex items-center">
              <div className="flex justify-center items-center min-w-fit">
                <img
                  src={Logo}
                  className=" ml-5 h-[2rem] md:h-[2.75rem] scale-125"
                  alt="logo"
                />
                {/* <h1 className="text-[32px] font-bold min-w-[8rem]">Vollo Inc</h1> */}
              </div>
            </Link>
            <div className="flex gap-2">
              {socialmediaIcons.map((obj, _) => (
                <div
                  key={_}
                  className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#132038] hover:bg-primary"
                >
                  <img src={obj} alt={obj} className={`w-3 h-3`} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5 py-7 lg:flex-row justify-between items-center lg:items-start">
            <div className="text-white w-full  lg:w-[50%] flex justify-between sm:flex-row flex-col sm:gap-0 gap-5">
              <div>
                <h3 className="font-bold">📍OFFICE ADDRESS:</h3>
                <p className="max-w-[265px] font-normal text-white">
                  {" "}
                  {companyDetails.address}
                </p>
              </div>
              <Link
                to={`https://wa.me/${companyDetails.whatsapp}`}
                target="_blank"
                aria-label="Contact us on WhatsApp"
              >
                <h3 className="flex gap-1 items-center font-bold">
                  <BsWhatsapp />
                  WHATSAPP:
                </h3>
                <p className="font-normal text-white">
                  {/* <span>
                  <img src={BsWhatsapp} alt="" />
                </span>{" "} */}
                  {companyDetails.phone}
                </p>
              </Link>
              <div>
                <h3 className="flex gap-1 items-center font-bold">
                  <MdEmail />
                  EMAIL
                </h3>
                <p className="font-normal text-white">
                  {/* <span>
                  <img src={BsWhatsapp} alt="" />
                </span>{" "} */}
                  {companyDetails.email}
                </p>
              </div>
            </div>
            <div
              className="text-white flex items-center gap-2 font-bold"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Scroll to Top <BsArrowUpCircleFill className="animate-bounce" />
            </div>
            {/* <div className="text-white w-full lg:w-[40%] text-center">
            <h3 className="font-bold"> NEWS LETTER</h3>
            <div className="flex justify-between bg-[#132038]  rounded-full">
              <input
                type="text"
                className="bg-transparent placeholder-[#475063] pl-5 w-3/4 outline-none focus:outline-none focus:ring-0"
                placeholder="Enter mail"
              />
              <p className="secondary-btn py-4 px-5 bg-buttonBackground rounded-full">
                SUBSCRIBE
              </p>
            </div>
          </div> */}
          </div>
          <div>
            <div className="text-white pb-1">
              <p>{companyDetails.link}</p>
            </div>
            <div className="text-white text-center flex mt-5 rounded-t-xl justify-between py-5 border-t border-x border-[#253450] ">
              <p className=" max-w-[70%] text-center mx-auto text-white">
                © 2024 AI Website. All Rights Reserved.
              </p>
              {/* <h4>
              Scroll Top <span>↑</span>
            </h4> */}
            </div>
          </div>
        </div>
      </div>

export const testimonials = [
{
id: 1,
img: testimonialsuserimage,
starimg: fourstart,
name: "Aman Sharma",
position: "CEO, TechPro Solutions",
says: "Vollo Inc. helped us transform our operations with their AI-driven solutions. Their team not only understood our unique challenges but also delivered a custom solution that seamlessly integrated with our existing systems. We&apos;ve seen a significant boost in efficiency and decision-making since implementing their AI tools. Their expertise and hands-on approach made all the difference!",
},
{
id: 2,
img: testimonialsuserimage,
starimg: fullstart,
name: "Jessica Lee",
position: "Founder, FitnessHub ",
says: "Working with Vollo Inc. on our mobile app development was a game-changer. They understood our vision from day one and delivered a top-notch app that not only looks great but functions flawlessly. Our customer engagement has soared since launch, and we’ve received incredible feedback from users. Vollo Inc. truly made our idea a reality",
},
{
id: 1,
img: testimonialsuserimage,
starimg: fourstart,
name: "Aman Sharma",
position: "CEO, TechPro Solutions",
says: "Vollo Inc. helped us transform our operations with their AI-driven solutions. Their team not only understood our unique challenges but also delivered a custom solution that seamlessly integrated with our existing systems. We&apos;ve seen a significant boost in efficiency and decision-making since implementing their AI tools. Their expertise and hands-on approach made all the difference!",
},
{
id: 2,
img: testimonialsuserimage,
starimg: fullstart,
name: "Jessica Lee",
position: "Founder, FitnessHub ",
says: "Working with Vollo Inc. on our mobile app development was a game-changer. They understood our vision from day one and delivered a top-notch app that not only looks great but functions flawlessly. Our customer engagement has soared since launch, and we’ve received incredible feedback from users. Vollo Inc. truly made our idea a reality",
},
{
id: 1,
img: testimonialsuserimage,
starimg: fourstart,
name: "Aman Sharma",
position: "CEO, TechPro Solutions",
says: "Vollo Inc. helped us transform our operations with their AI-driven solutions. Their team not only understood our unique challenges but also delivered a custom solution that seamlessly integrated with our existing systems. We&apos;ve seen a significant boost in efficiency and decision-making since implementing their AI tools. Their expertise and hands-on approach made all the difference!",
},
{
id: 2,
img: testimonialsuserimage,
starimg: fullstart,
name: "Jessica Lee",
position: "Founder, FitnessHub ",
says: "Working with Vollo Inc. on our mobile app development was a game-changer. They understood our vision from day one and delivered a top-notch app that not only looks great but functions flawlessly. Our customer engagement has soared since launch, and we’ve received incredible feedback from users. Vollo Inc. truly made our idea a reality",
},
{
id: 1,
img: testimonialsuserimage,
starimg: fourstart,
name: "Aman Sharma",
position: "CEO, TechPro Solutions",
says: "Vollo Inc. helped us transform our operations with their AI-driven solutions. Their team not only understood our unique challenges but also delivered a custom solution that seamlessly integrated with our existing systems. We&apos;ve seen a significant boost in efficiency and decision-making since implementing their AI tools. Their expertise and hands-on approach made all the difference!",
},
{
id: 2,
img: testimonialsuserimage,
starimg: fullstart,
name: "Jessica Lee",
position: "Founder, FitnessHub ",
says: "Working with Vollo Inc. on our mobile app development was a game-changer. They understood our vision from day one and delivered a top-notch app that not only looks great but functions flawlessly. Our customer engagement has soared since launch, and we’ve received incredible feedback from users. Vollo Inc. truly made our idea a reality",
},
];
