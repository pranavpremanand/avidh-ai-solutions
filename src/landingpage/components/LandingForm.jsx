import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { companyDetails } from "../../constant";

const LandingForm = () => {
  const navigate = useNavigate();
  const [spinner, setSpinner] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required.";
    if (!formData.contactNumber)
      newErrors.contactNumber = "Contact number is required.";
    if (!/^\d+$/.test(formData.contactNumber))
      newErrors.contactNumber = "Contact number must be numeric.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSpinner(true);
    var emailBody = "Name: " + formData.fullName + "\n\n";
    emailBody += "Email: " + formData.email + "\n\n";
    emailBody += "Phone: " + formData.contactNumber + "\n\n";
    emailBody += "Subject: " + formData.subject + "\n\n";
    emailBody += "Message:\n" + formData.message;

    var payload = {
      to: companyDetails.email,
      subject: `You have a new message from ${companyDetails.name}`,
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
        navigate("/thank-you");
      } else {
        toast.error("Something went wrong");
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setFormData({
        fullName: "",
        contactNumber: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your Full Name"
                  className="rounded-lg pl-5 sm:py-4 py-3 focus:outline-none"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="contactNumber">Contact Number</label>
                <input
                  type="text"
                  name="contactNumber"
                  id="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Enter number"
                  className=" rounded-lg pl-5 m:py-4 py-3 focus:outline-none"
                />
                {errors.contactNumber && (
                  <p className="text-red-500 text-sm">{errors.contactNumber}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your mail"
                className="rounded-lg pl-5 m:py-4 py-3 focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                className=" rounded-lg pl-5 m:py-4 py-3 focus:outline-none"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Enter your massage"
                className=" rounded-lg p-2 focus:outline-none"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
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
