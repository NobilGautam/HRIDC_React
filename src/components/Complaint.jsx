import React, { useState } from "react";
import OtpInput from "react-otp-input";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegAddressCard,
} from "react-icons/fa";
import axios from "axios";

function Complaint() {
  const [otpModel, setOtpModel] = useState(false); // Changed initial state to false
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    city: "",
    village: "",
    complaintType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [otp, setOtp] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    code5: "",
    code6: "",
  });

  const handleOTPChange = (e) => {
    const { id, value } = e.target;
    setOtp((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    const otpCode = `${otp.code1}${otp.code2}${otp.code3}${otp.code4}${otp.code5}${otp.code6}`;
    console.log("handleVerifyOTP", otpCode);
    try {
      const response = await axios.post(
        "https://r80q8w1t-4000.inc1.devtunnels.ms/user/verify-otp",
        { emailId: formData.email, otp: otpCode }
      );
      console.log("OTP verified:", response.data);
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  const handleGetOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://r80q8w1t-4000.inc1.devtunnels.ms/user/generate-otp",
        { emailId: formData.email }
      );
      console.log("OTP sent:", response.data);
      setOtpModel(true);
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/complaint", formData);
      console.log("Form submitted:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex w-[80vw] justify-around items-center mt-[5rem]">
      <div className="h-[auto] ml-[5rem] p-5">
        <div className="font-sans p-5 max-w-md h-full mx-auto border border-gray-200 rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
          <h2 className="text-blue-700">
            <b>Contact info</b>
          </h2>
          <div className="mb-2">
            <h3 className="flex items-center p-3">
              <span className="mr-2 text-blue-600">
                <FaMapMarkerAlt />
              </span>
              Registered Office (Chandigarh)
            </h3>
            <p className="p-3">
              SCO 17-18-19, Near Jagat Cinema, Sector-17A, Chandigarh.
            </p>
            <hr />
            <p className="flex items-center p-3">
              <span className="mr-2 text-blue-600">
                <FaPhone />
              </span>
              +91 172 2715644
            </p>
            <hr />
            <p className="flex items-center p-3">
              <span className="mr-2 text-blue-600">
                <FaEnvelope />
              </span>
              hridc2017@gmail.com
            </p>
            <hr />
          </div>
          <div className="mb-2">
            <h3 className="flex items-center p-3">
              <span className="mr-2 text-blue-600">
                <FaMapMarkerAlt />
              </span>
              Corporate Office (Gurugram)
            </h3>
            <p className="p-3">
              IRCON International, Tower-2, Plot No.-16, Sector- 32, Gurugram,
              Haryana- 122018
            </p>
            <hr />
            <p className="flex items-center p-3">
              <span className="mr-2 text-blue-600">
                <FaPhone />
              </span>
              +919311478889
            </p>
            <hr />
            <p className="flex items-center p-3">
              <span className="mr-2 text-blue-600">
                <FaEnvelope />
              </span>
              hridc2017@gmail.com
            </p>
          </div>
          <hr />
          <div>
            <h3 className="flex items-center p-3">
              <span className="mr-2 text-blue-600">
                <FaMapMarkerAlt />
              </span>
              Grievance Redressal Cell, HRIDC
            </h3>
            <p className="px-3 pb-1">Sh. Raju Solanki, DGM/Civil</p>
            <hr />
            <p className="flex items-center p-5">
              <span className="mr-2 text-blue-600">
                <FaPhone />
              </span>
              +91 93114 78891
            </p>
            <hr />
            <p className="flex items-center p-5">
              <span className="mr-2 text-blue-600">
                <FaEnvelope />
              </span>
              grc.hridc@gmail.com
            </p>
            <hr />
            <p className="flex items-center p-5">
              <span className="mr-2 text-blue-600">
                <FaRegAddressCard />
              </span>
              Grievance Redress Committees
            </p>
            <hr />
          </div>
        </div>
      </div>

      <div className="border w-[40vw] shadow-[0_4px_8px_rgba(0,0,0,0.1)] p-5">
        <form className="mx-auto" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="firstName"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="lastName"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={formData.lastName}
                onChange={handleChange}
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={formData.email}
              onChange={handleChange}
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={formData.phone}
              onChange={handleChange}
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="subject"
              id="floating_subject"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={formData.subject}
              onChange={handleChange}
            />
            <label
              htmlFor="floating_subject"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Subject
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="city"
              id="floating_city"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={formData.city}
              onChange={handleChange}
            />
            <label
              htmlFor="floating_city"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              City
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="village"
              id="floating_village"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={formData.village}
              onChange={handleChange}
            />
            <label
              htmlFor="floating_village"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Village
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="complaintType"
              id="floating_complaintType"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={formData.complaintType}
              onChange={handleChange}
            />
            <label
              htmlFor="floating_complaintType"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Complaint Type
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <textarea
              name="message"
              id="floating_message"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              rows="4"
              placeholder=" "
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <label
              htmlFor="floating_message"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Complaint;
