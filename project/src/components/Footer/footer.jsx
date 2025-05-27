import React from "react";

const Footer = () => {
  return (
     <footer className="bg-gray-50" >
  <div className="bg-blue-900 py-12 rounded-t-3xl text-gray-200 px-6 w-full lg:px-20">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

      {/* <!-- Get In Touch --> */}
      <div className="footer-section" data-aos="zoom-out-left">
        <h5 className="text-white text-lg md:text-xl font-semibold mb-6 hover:text-primary transition duration-300">
          Get In Touch
        </h5>
        <ul className="space-y-3 text-sm">

          <li className="flex items-center">
            <i className="fas fa-map-marker-alt text-primary mr-3"></i>
            <span>Nagercoil,TamilNadu</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-phone-alt text-primary mr-3"></i>
            <span>+91 82208 95546</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-envelope text-primary mr-3"></i>
            <span>dummy@gmail.com</span>
          </li>

        </ul>
      </div>

      {/* <!-- Quick Links --> */}
      <div className="footer-section" data-aos="fade-up">
        <h5 className="text-white text-lg md:text-xl font-semibold text-center mb-6 hover:text-primary transition duration-300">
          Quick Links
        </h5>
        <div className="justify-items-center ">
          <ul className="text-sm space-y-3">
            <li >
              <a  className="hover:text-primary text-center align-middle transition">About Us</a>
            </li>
            <li>
              <a  className="hover:text-primary text-center align-middle transition">Contact Us</a>
            </li>
            <li>
              <a  className="hover:text-primary text-center align-middle transition">Properties</a>
            </li>
          </ul>
        </div>
      </div>

       {/* <!-- Follow Us --> */}
      <div className=" justify-center lg:flex-row lg:justify-between items-start lg:text-left">
        <div data-aos="fade-right">
          <h5 className="text-white text-lg md:text-xl text-center font-semibold mb-6 hover:text-primary transition duration-300">
            Follow Us
          </h5>
          <ul className="flex space-x-3 justify-center">
            <li>
              <a  target="_blank" rel="noopener noreferrer" className="transition transform duration-300 w-10 h-10 flex justify-center items-center border-2 border-transparent rounded-full p-2 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-110">
                <i className="fab fa-facebook-f text-white text-xl transition-colors duration-300"></i>
              </a>
            </li>
            
            <li>
              <a  target="_blank" rel="noopener noreferrer" className="transition transform duration-300 w-10 h-10 flex justify-center items-center border-2 border-transparent rounded-full p-2 hover:bg-pink-600 hover:text-white hover:border-pink-600 hover:scale-110">
                <i className="fab fa-instagram text-white text-xl transition-colors duration-300"></i>
              </a>
            </li>

            

            <li>
              <a  target="_blank" rel="noopener noreferrer" className="transition transform duration-300 w-10 h-10 flex justify-center items-center border-2 border-transparent rounded-full p-2 hover:bg-red-700 hover:text-white hover:border-black/10 hover:scale-110">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </div>

    

    {/* <!-- Copyright Section --> */}
    <div className="mt-12 border-t border-gray-50 space-y-4  align-middle pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
       
      <p>
        Designed by
        <a className="text-primary hover:underline"  target="_blank" rel="noopener noreferrer" >v2max</a>
      </p>
      
      <p>&copy; All Rights Reserved.</p>

      <div  className="flex rounded-md cursor-pointer items-center  space-x-2">
        
      </div>
    </div>
  </div>
 </footer>
  );
};

export default Footer;
