import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="h-10"></div>

      <div className=" bg-[#0f3963] h-36 w-full p-3 ">
        <div className="h-4/7 flex flex-row ">
          <div className="h-full w-1/2 text-center flex flex-col ">
            <span className="h-full flex items-center justify-center pt-1.5">
              <h6 className="text-[14px] text-white">987654321</h6>
            </span>
            <span className="h-full flex items-center justify-center pb-1.5">
              <h6 className="text-[14px] text-white">ABC@gmail.com</h6>
            </span>
          </div>
          <div className="h-full w-1/2 text-center flex flex-row">
            <div className="w-1/2 ">
              <span className="h-1/2 w-1/2  ">
                <h6 className="text-[12px]  flex  justify-center items-center h-1/2 pt-2.5 text-white">Home</h6>
              </span>
              <span className="h-1/2 w-1/2 ">
                <h6 className="text-[12px]  flex  justify-center items-center h-1/2 pb-3 text-white">About</h6>
              </span>
            </div>
            <div className="w-1/2">
              <span className="h-1/2 w-1/2 ">
                <h6 className="text-[12px]  flex  justify-center items-center h-1/2 pt-2.5 text-white">Properties</h6>
              </span>
              <span className="h-1/2 w-1/2 ">
                <h6 className="text-[12px]  flex  justify-center items-center h-1/2 pb-3 text-white">Contact</h6>
              </span> 
            </div>
          </div>
        </div>
        <div className="h-2/5 flex  flex-col justify-center items-center">
        <span className="h-0.5 white w-[230px]  bg-white"></span>
          <div><span className="text-[12px] text-white">© Rentals All Rights Reserved.</span></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
