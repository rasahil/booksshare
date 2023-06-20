import React from "react";
import img1 from "../Images/contact-img-1.png";
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import Footer from "./Footer";
import { Input, Textarea } from "@material-tailwind/react";
import { socials } from "../utilities/index";


const ContactUs = () => {
  return (
    <>
      {/* // middle portion of content */}
      <div className="p-[50px]">
        <div className="lg:flex justify-between ">
          <div className="p-[30px]  lg:text-8xl lg:ms-14 text-[35px] sm:-mt-[10px] text-center  font-[Libre-Caslon-Text]  text-[rgb(84,61,50)] ">
            <p>
              Let’s work <br />
              Together !
            </p>
          </div>

          <div className="p-[30px] p-">
            <div class=" flex lg:w-96 lg:-mt-16 -mt-16 sm:w-50 flex-col  ">
              <img src={img1} alt="img-blur-shadow" layout="fill" />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:ps-[70px] p-[50px] text-[20px] -mt-[70px] font-[Moulpali]">
        <h3 className="lg:text-[26px]  ">
          We Don’t Make contact us for good Future , We make contact for yours
          good future Better.
        </h3>
        <h3 className="lg:text-[26px] font-[Monda]">
          Find out the following form and we will get back to you in 24 hour’s.
        </h3>
      </div>

      <div className="ps-[40px] lg:-mt-6 pe-10 lg:flex justify-between mb-[45px]">
        <div className="lg:text-[26px] text-[20px]  font-[Moulpali] l ">
          <form action="" className="sm:p-[50px] sm:pe-6">
            Enter your full name {" "}
            <Input
              type="text"
              variant="standard"
              name=""
              color="green"
              className="lg:text-[26px] text-[20px] "
            />{" "}
            <br />
            Enter your Email id {" "}
            <Input
              type="text"
              variant="standard"
              color="green"
              className="lg:text-[26px] text-[20px]  "
            />{" "} 
            <br />
            Enter mobile Number {" "}
            <Input
              type="text"
              variant="standard"
              color="green"
              maxLength={10}
              name=""
              className="lg:text-[26px] text-[20px] "
            />{" "}
            <br />
            Suggestion For Us <br />{" "}
            <Textarea
              name="suggestion"
              variant="standard"
              color="green"
              cols="24"
              rows="3"
              className="lg:text-[26px] text-[20px] "
            ></Textarea>{" "}
            
            <div className="mt-3  mb-4 -ms-12">
              <center>
                {" "}
                <button
                  type="button"
                  value=""
                  className="rounded-lg bg-[#81A356] ps-3 pe-3 font-[Monda]  text-white"
                >
                  {" "}
                  Submit
                </button>
              </center>
            </div>
          </form>
        </div>

        <div className="sm:p-[50px] lg:pe-[70px] text-[#28221f] leading-10 lg:me-[50px]  mb-5">
          <strong className=" font-[Moulpali] lg:text-[30px] text-[26px] pb-5">
            Connect US{" "}
          </strong>
          <h3 className="text-[20px] lg:text-[24px] flex">
            <span className="p-3 -ms-3">
              <IoCallSharp />
            </span>
            <span>+91 9623510085</span>
          </h3>
          <h3 className="text-[20px] lg:text-[24px] flex">
            <span className="p-3 -ms-3">
              <IoMdMail />
            </span>
            <span> booksshare@gmail.com </span>
          </h3>
<br />
          <strong className=" font-[Moulpali] lg:text-[30px] text-[26px] pb-5">
            ADDRESS{" "}
          </strong>
          <h3 className="text-[18px] lg:text-[24px]  ">G-5 Anand Rajani,</h3>
          <h3 className="text-[18px] lg:text-[24px] ">
            Apartment IT park Road , Opp
          </h3>
          <h3 className="text-[18px] lg:text-[24px] ">
            To datta mandir Nagpur
          </h3>
          <h3 className="text-[18px] lg:text-[24px] ">Maharshtra</h3>
          <h3 className="text-[18px] lg:text-[24px] ">
            India Pincode : 440022
          </h3>
          <div className="flex lg:mx-6  mt-5 opacity-95"> 
          <div className="flex lg:ms lg:gap-4 ">
            {socials.map((social) => (
              <img
                src={social.url}
                alt={social.name}
                key={social.name}
                className="lg:text-[40px] lg:-ms-5 me-5 text-[30px] cursor-pointer "
              />
            ))}
          </div>
            
          </div>
          
          
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ContactUs;
