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
  const [otpModel, setOtpModel] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    city: '',
    village: '',
    complaintType: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [otp, setOtp] = useState({
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: '',
    code6: ''
  });

  const handleOTPChange = (e) => {
    const { id, value } = e.target;
    setOtp(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleVerifyOTP = async (e) => {
    console.log('handleVerifyOTP');
      e.preventDefault();
      const otpCode = `${otp.code1}${otp.code2}${otp.code3}${otp.code4}${otp.code5}${otp.code6}`;
      console.log('handleVerifyOTP',otpCode);
    try {
      const response = await axios.post('https://r80q8w1t-4000.inc1.devtunnels.ms/user/verify-otp', { emailId:formData.email , otp: parseInt(otpCode) });
      console.log('OTP verified:', response.data);
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  console.log("FormData------->" , formData);
  
  

  const handleGetOTP = async (e) => {
    setOtpModel(true)
    console.log("handleGetOTP called",formData.email);
    e.preventDefault();
    try {
      const response = await axios.post('https://r80q8w1t-4000.inc1.devtunnels.ms/user/generate-otp', { emailId: formData.email });
      console.log('OTP sent:', response.data);
      setOtpModel(true);
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };



  const handleSubmit = async (e) => {
    console.log('handleSubmit called');
    e.preventDefault();
    try {
      const response = await axios.post('https://r80q8w1t-4000.inc1.devtunnels.ms/complaint/create-complaint', formData);
      console.log('Form submitted:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  return (
    <div className="flex w-[80vw] justify-around items-center mt-[5rem] ">
      <div className="h-[auto] ml-[5rem] p-5">
        <div class="font-sans p-5 max-w-md h-full mx-auto border border-gray-200 rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
          <h2 class="text-blue-700">
            <b>Contact info</b>
          </h2>
          <div class="mb-2">
            <h3 class="flex items-center p-3">
              <span class="mr-2 text-blue-600">
                <FaMapMarkerAlt />
              </span>
              Registered Office (Chandigarh)
            </h3>
            <p className="p-3">
              SCO 17-18-19, Near Jagat Cinema, Sector-17A, Chandigarh.
            </p>
            <hr />
            <p class="flex items-center p-3">
              <span class="mr-2 text-blue-600">
                <FaPhone />
              </span>
              +91 172 2715644
            </p>
            <hr />
            <p class="flex items-center p-3">
              <span class="mr-2 text-blue-600">
                <FaEnvelope />
              </span>
              hridc2017@gmail.com
            </p>
            <hr />
          </div>
          <div class="mb-2">
            <h3 class="flex items-center p-3">
              <span class="mr-2 text-blue-600">
                <FaMapMarkerAlt />
              </span>
              Corporate Office (Gurugram)
            </h3>
            <p className="p-3">
              IRCON International, Tower-2, Plot No.-16, Sector- 32, Gurugram,
              Haryana- 122018
            </p>
            <hr />
            <p class="flex items-center p-3">
              <span class="mr-2 text-blue-600">
                <FaPhone />
              </span>
              +919311478889
            </p>
            <hr />
            <p class="flex items-center p-3">
              <span class="mr-2 text-blue-600">
                <FaEnvelope />
              </span>
              hridc2017@gmail.com
            </p>
          </div>
          <hr />
          <div>
            <h3 class="flex items-center p-3">
              <span class="mr-2 text-blue-600">
                <FaMapMarkerAlt />
              </span>
              Grievance Redressal Cell, HRIDC
            </h3>
            <p className="px-3 pb-1">Sh. Raju Solanki, DGM/Civil</p>
            <hr />
            <p class="flex items-center p-5">
              <span class="mr-2 text-blue-600">
                <FaPhone />
              </span>
              +91 93114 78891
            </p>
            <hr />
            <p class="flex items-center p-5">
              <span class="mr-2 text-blue-600">
                <FaEnvelope />
              </span>
              grc.hridc@gmail.com
            </p>
            <hr />
            <p class="flex items-center p-5">
              <span class="mr-2 text-blue-600">
                <FaRegAddressCard />
              </span>
              Grievance Redress Committees
            </p>
            <hr />
          </div>
        </div>
      </div>

      <div className="border w-[40vw] shadow-[0_4px_8px_rgba(0,0,0,0.1)] p-5">
        <form class=" mx-auto ">
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="firstName"
                id="floating_first_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <label
                for="floating_first_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="lastName"
                id="floating_last_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={formData.lastName}
                onChange={handleChange}
              />
              <label
                for="floating_last_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="email"
               name="email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
              required

            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          <div className="flex gap-5">
            <button
              onClick={handleGetOTP}
              className=" underline underline-offset-2 text-gray-900"
            >
              Get OTP ??{" "}
            </button>
            {otpModel && (
             <form className="max-w-sm mx-auto flex items-center gap-5" >
             <div className="flex mb-2 space-x-2 rtl:space-x-reverse">
               {Array.from({ length: 6 }, (_, index) => (
                 <div key={index}>
                   <label htmlFor={`code${index + 1}`} className="sr-only">
                     Code {index + 1}
                   </label>
                   <input
                     type="text"
                     maxLength="1"
                     id={`code${index + 1}`}
                     value={otp[`code${index + 1}`]}
                     onChange={handleOTPChange}
                     className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                     required
                   />
                 </div>
               ))}
             </div>
             <button onClick={handleVerifyOTP} type="submit" className="border mb-2 px-3 p-1 rounded-lg">Verify</button>
           </form>
            )}
          </div>

          <div class="grid md:grid-cols-2 md:gap-6 mt-2">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="phone"
                id="floating_phone"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <label
                for="floating_phone"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (123-456-7890)
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="subject"
                id="floating_company"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.company}
                onChange={handleChange}
                required
              />
              <label
                for="floating_company"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Subject
              </label>
            </div>
          </div>

          <div class="relative z-0 w-full mb-5 group">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
            >
              Select your city
            </label>
            <select
             name="city"
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.city}
              onChange={handleChange}
            >
              <option value="Gurugram">Gurugram</option>
              <option value="Haryana">Haryana</option>
            </select>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
            >
              Select your Village
            </label>
            <select
               name="village"
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.village}
              onChange={handleChange}
            >
              <option value="Rewari">Rewari</option>
              <option value="Haryana">Haryana</option>
            </select>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
            >
              Select your Complaint Type
            </label>
            <select
             name="complaintType"
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.complaintType}
              onChange={handleChange}
            >
              <option value="Land Acquisition">Land Acquisition</option>
              <option value="corruption">corruption</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <label
              for="message"
              class="block mb-2 text-sm font-medium  text-gray-500 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
            name="message"
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
              value={formData.message}
          onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Complaint;
