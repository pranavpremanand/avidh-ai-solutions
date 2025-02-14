import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { companyDetails } from "../../constant";
import { useForm } from "react-hook-form";

const LandingForm = () => {
  const navigate = useNavigate();
  const [spinner, setSpinner] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const handleFormSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone Number: " + values.phone + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: values.subject,
      body: emailBody,
      name: companyDetails.name,
    };

    try {
      const res = await axios.post(
        "https://send-mail-redirect-boostmysites.vercel.app/send-email",
        payload
      );
      if (res.data.success) {
        toast.success("Email sent successfully");
        reset();
        navigate("/thank-you");
      } else {
        toast.error("Something went wrong");
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setSpinner(false);
    }
  };
  return (
    <div className="adjustedwidth mx-auto mt-10  sm:mt-20 sm:px-5  pb-20">
      <div className="flex justify-around md:gap-0 gap-5 md:flex-row flex-col items-center mt-4 sm:mt-16">
        <div data-aos="fade-up" className="w-full md:w-[40%] sm:px-4">
          <h4 className="text-head text-center">
            We&apos;d love to hear from you! Tell us about your project or
            schedule an appointment to discuss in detail.
          </h4>
        </div>
        <div data-aos="fade-up" className="w-full sm:px-0 px-3 md:w-1/2">
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Enter your Full Name"
                  className="rounded-lg pl-5 sm:py-4 py-3 focus:outline-none"
                  {...register("name", {
                    required: "Full name is required",
                    validate: (val) => {
                      if (val.trim() !== "") {
                        return true;
                      } else {
                        return "Full name is required";
                      }
                    },
                  })}
                />
                <small className="text-red-400">{errors.name?.message}</small>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="contactNumber">Contact Number</label>
                <input
                  type="text"
                  name="contactNumber"
                  id="contactNumber"
                  placeholder="Enter number"
                  className=" rounded-lg pl-5 m:py-4 py-3 focus:outline-none"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid phone number",
                    },
                  })}
                />
                <small className="text-red-400">{errors.phone?.message}</small>
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your mail"
                className="rounded-lg pl-5 m:py-4 py-3 focus:outline-none"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Entered email is invalid",
                  },
                })}
              />
              <small className="text-red-400">{errors.email?.message}</small>
            </div>

            <div className="flex flex-col">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter subject"
                className=" rounded-lg pl-5 m:py-4 py-3 focus:outline-none"
                {...register("subject", {
                  required: "Subject is required",
                  validate: (val) => {
                    if (val.trim() !== "") {
                      return true;
                    } else {
                      return "Subject is required";
                    }
                  },
                })}
              />
              <small className="text-red-400">{errors.subject?.message}</small>
            </div>

            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Enter your massage"
                className=" rounded-lg p-2 focus:outline-none"
                {...register("message", {
                  required: "Message is required",
                  validate: (val) => {
                    if (val.trim() !== "") {
                      return true;
                    } else {
                      return "Message is required";
                    }
                  },
                })}
              />
              <small className="text-red-400">{errors.message?.message}</small>
            </div>

            <button
              type="submit"
              className={`primary-btn font-semibold border px-8 rounded-full text-white py-4 transition duration-300 ${
                spinner ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={spinner}
            >
              {spinner ? "SENDING...." : "SEND"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingForm;
