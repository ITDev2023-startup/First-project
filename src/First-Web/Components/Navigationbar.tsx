// import React from "react";
import img from "./IMages/ITR.jpg";
import img2 from "./IMages/f.webp";
export default function Navigationbar() {
  return (
    <>
      {/* <div className=" p-3 flex justify-start w-full border-b-3 border-b-gray-500 ">
        <h1 className="text-4xl font-bold text-indigo-900 w-[60%] tracking-wide drop-shadow-md font-sans">Pro-Tech</h1>
        <a className="w-[10%] text-xl text-blue-800 transform cursor-pointer border-b-2 border-transparent transition-all duration-300 ease-in-out hover:scale-105 hover:border-blue-600 hover:shadow-md hover:text-blue-800 hover:font-bold" href="/">
          Home
        </a>
        <a className="w-[10%] text-xl text-blue-800 transform cursor-pointer border-b-2 border-transparent transition-all duration-300 ease-in-out hover:scale-105 hover:border-blue-600 hover:shadow-md hover:text-blue-800 hover:font-bold" href="/">
          About
        </a>
        <a className="w-[10%] text-xl text-blue-800 transform cursor-pointer border-b-2 border-transparent transition-all duration-300 ease-in-out hover:scale-105 hover:border-blue-600 hover:shadow-md hover:text-blue-800 hover:font-bold" href="/">
          Service
        </a>
        <a className="w-[10%] text-xl text-blue-800 transform cursor-pointer border-b-2 border-transparent transition-all duration-300 ease-in-out hover:scale-105 hover:border-blue-600 hover:shadow-md hover:text-blue-800 hover:font-bold" href="/">
          Contact
        </a>
      </div> */}
      <div className="flex w-full p-7">
        <div className="50%">
          <p className="w-full text-2xl p-10 font-medium font-serif">
            The <b>AR</b> and <b>VR</b> <b>technologies</b> will give an
            interactive experience by rendering digital information either on
            top of the physical world <b>(augmented reality)</b> or inside
            totally virtual environments. These technologies are now well
            applied in gaming, education, training, and a long list of several
            other applications.
          </p>
        </div>
        <div className=" p-8 bg-gradient-to-br from-white via-orange-100 to-orange-300 rounded-2xl shadow-md ">
          <img className="w-full p-8 rounded-xl" src={img}></img>
        </div>
      </div>
      <div className="p-7 w-full">
        <h3 className="w-[50%] px-10 py-4 text-3xl font-bold border-b-2">
          Market Size and Growth
        </h3>
        <p className="p-10 text-2xl font-sans">
          The AR and VR market is estimated to grow to <b>$209.2 billion </b>by
          2025, propelled by advancements in hardware and software. This great
          leap forward will be accelerated by the wider usage in the enterprise
          application space, in areas ranging from consumer entertainment to
          other verticals and horizontals.
        </p>
        <p className="px-10 text-2xl font-sans">
          The market size and growth of quantum computing are forecast to reach
          approximately <b>64.98 billion USD</b> by 2030, as it has been one
          area in technology giants and governments putting in massive
          investments. Development taking place for quantum algorithms and
          quantum hardware is fueling this growth.
        </p>
      </div>
      <div className="p-7 w-full">
        <h3 className="w-[50%] px-10 py-4 text-3xl font-bold border-b-2">
          Top 25 New Technology Trends in 2025
        </h3>
        <div className="flex">
          <p className="w-[50%] p-10 text-2xl font-sans">
            <b>The top 25 emerging technology trends </b>expected to define
            2025. <b>From artificial intelligence (AI)</b> reshaping <b>customer
            experiences to quantum computing</b> unlocking new research potentials,
            these trends are creating vast opportunities and competitive
            advantages. Learn how these technologies could influence fields like
            healthcare, finance, and manufacturing, while <b>driving productivity,
            enhancing user engagement, and enabling eco-friendly solutions.</b>
          </p>
          <div className="w-[50%] ">
            <img className="w-full px-8 py-15 rounded-xl" src={img2}></img>
          </div>
        </div>
      </div>
      {/* <footer className="bg-blue-400">
        <div className="text-center">
            Copy right &copy; www.ProTech.com | All rights reserved.
        </div>
      </footer> */}
    </>
  );
}
