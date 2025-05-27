import Footer from '@/components/Footer/footer';
import React from 'react'

const About = () => {
  return (
    <div>

     
       <section className="bg-white px-4 py-8 sm:px-6 md:px-16">
    <div
      className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
    >
      {/* <!-- Image Section --> */}
      <div className="w-full md:w-1/2">
        <img
          src="/image/homeaboutimage.jpg"
          alt="Real Estate"
          className="rounded-lg max-h-96 w-full shadow-lg"
        />
      </div>
      
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          About Us
        </h2>
        <p className="text-gray-600 mt-4 font-sans text-base font-medium sm:text-xl">
         A leading real estate platform connecting buyers, sellers, and
         renters with premium property listings across various locations.
         We're offering a seamless property search experience with verified listings, expert insights, and market trends.
         Our goal is to simplify real estate transactions through technology-driven solutions and customer-centric services.
        </p>
        
      </div>
    </div>
  </section>
  
  <div className="bg-blue-50 px-4 sm:px-8 lg:px-32 py-12 sm:py-16">
    <div className="container mx-auto">
      <div className="mb-12">
        <h2 className="text-center text-2xl font-bold text-gray-800 sm:text-3xl lg:text-5xl mb-4">
          Our Best Features
        </h2>
        <p className="text-center text-sm text-gray-600 mx-auto sm:text-base lg:text-lg">
          Seamless property buying, selling, and renting with verified listings and expert insights all in one place!
        </p>
      </div>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* <!-- Card 1 --> */}
        <div
        className="p-6 rounded-2xl border-4 border-transparent hover:border-blue-400/15 hover:bg-white/80 hover:backdrop-blur-md hover:shadow-lg transform transition duration-300"
        >
          <div className="text-center mb-4">
            <div
              className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg mx-auto"
            >
              🌟
            </div>
          </div>
          <h3 className="text-lg font-bold text-blue-500 text-center mb-3 sm:text-xl">
            Search Property from Anywhere
          </h3>
          <p className="text-sm text-gray-600 text-center sm:text-base">
            Discover and search for your dream property with our intuitive tools.
            Explore properties from the comfort of your home.
          </p>
        </div>
  
        {/* <!-- Card 2 --> */}
        <div
          className="p-6 rounded-2xl border-4 border-transparent hover:border-blue-400/15 hover:bg-white/80 hover:backdrop-blur-md hover:shadow-lg transform transition duration-300"
        >
          <div className="text-center mb-4">
            <div
              className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg mx-auto"
            >
              👤
            </div>
          </div>
          <h3 className="text-lg font-bold text-blue-500 text-center mb-3 sm:text-xl">
            Professional & Friendly Agents
          </h3>
          <p className="text-sm text-gray-600 text-center sm:text-base">
            Our experienced agents ensure a smooth and friendly experience,
            helping you secure the best deals on the market.
          </p>
        </div>
  
        {/* <!-- Card 3 --> */}
        <div
        className="p-6 rounded-2xl border-4 border-transparent hover:border-blue-400/15 hover:bg-white/80 hover:backdrop-blur-md hover:shadow-lg transform transition duration-300"

        >
          <div className="text-center mb-4">
            <div
              className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg mx-auto"
            >
              🏠
            </div>
          </div>
          <h3 className="text-lg font-bold text-blue-500 text-center mb-3 sm:text-xl">
            Buy and Sell Awesome Property
          </h3>
          <p className="text-sm text-gray-600 text-center sm:text-base">
            Seamlessly buy and sell properties with our reliable platform. Find
            the perfect match for your needs effortlessly.
          </p>
        </div>
      </div>
    </div>
  </div>
  

 <app-bandeau-info/>

<section className="bg-indigo-50 border-y border-indigo-100 py-16">
  <div className=" mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold text-gray-900 text-center">Our Mission , Vision & Values</h2>
    
    <div className="mt-12  justify-stretch grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      
      {/* <!-- Card 1 --> */}
      <div className="group relative bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-purple-500">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white transition group-hover:bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 transition group-hover:text-purple-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div className="mt-5">
          <h3 className="text-lg font-medium text-gray-900 transition group-hover:text-white">Vision</h3>
          <p className="mt-2 text-base text-gray-500 transition group-hover:text-gray-200">
            To be the most trusted and innovative real estate platform, simplifying property transactions for everyone.
          </p>
        </div>
      </div>

      {/* <!-- Card 2 --> */}
      <div className="group relative bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-blue-500">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white transition group-hover:bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 transition group-hover:text-blue-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
          </svg>
        </div>
        <div className="mt-5">
          <h3 className="text-lg font-medium text-gray-900 transition group-hover:text-white">Mission</h3>
          <p className="mt-2 text-base text-gray-500 transition group-hover:text-gray-200">
            To connect buyers, sellers, and renters with verified listings, expert insights,
             and seamless digital solutions for a hassle-free real estate experience.
          </p>
        </div>
      </div>

      {/* <!-- Card 3 --> */}
      <div className="group relative bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-green-500">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white transition group-hover:bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 transition group-hover:text-green-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>
        </div>
        <div className="mt-5">
          <h3 className="text-lg font-medium text-gray-900 transition group-hover:text-white">Values</h3>
          <p className="mt-2 text-base text-gray-500 transition group-hover:text-gray-200">
            Trust, Transparency, Innovation, Customer-Centricity, and Excellence.
          </p>
        </div>
      </div>

      
      

    </div>
  </div>
</section>
        <Footer/>
    </div>
  )
}

export default About;