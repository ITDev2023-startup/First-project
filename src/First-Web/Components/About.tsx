// import React from "react";
import img from "./IMages/AIML.png";
import img2 from "./IMages/5G.jpg";
export default function About() {
  return (
    <div className="bg-[#93c5fd]">
      <div className="p-7 w-full">
        <h3 className="w-[60%] px-10 py-5 text-3xl font-bold border-b-2">
          Top 25 New Technology Trends in 2025
        </h3>
        <p className="font-bold text-xl pt-5 px-3">
          1. Artificial Intelligence (AI) and Machine Learning (ML)
        </p>
        <p className="px-8 py-5 font-bold font-sans">
          Key Developments
          <li className=" font-sans px-5 py-3">
            Generative AI: ChatGPT, DALL-E, and other tools like them, are
            making real the forms of content that have never been conceived
            before and transform the frontiers on which business approaches to
            marketing and customer engagement stand.
          </li>
          <li className="font-sans px-5 py-3">
            Explainable AI: Creating AI that exposes the decision chain. To
            foster trust and compliance.
          </li>
        </p>
        <div className="flex">
          <img className="w-[50%] px-5 py-3" src={img}></img>
          <p className="w-[50%] p-5 font-bold py-10 font-serif">
            In more developed countries where businesses are adopting AI, with
            emerging markets catching up, the investment in digital
            infrastructure and technologies grows at a higher rate. Integrating
            AI into corporate business process cores is increasingly prevalent
            as companies seek means of boosting both efficiency and customer
            experience.
          </p>
        </div>
        <hr className="p-2"></hr>
        <p className="font-bold text-xl pt-5 px-3">2. 5G</p>
        <p className="px-8 py-5 font-bold font-sans">
          Long-term Key Developments Network Slicing:
          <li className="font-sans px-5 py-3">
            {" "}
            Network Slicing is the process whereby operators can create multiple
            virtual networks out of one single physical 5G network in order to
            optimize performance for various applications.
          </li>{" "}
          <li className="font-sans px-5 py-3">
            {" "}
            eMBB (enhanced mobile broadband): eMBB provides a data rate
            increased to extreme values and increased connection—a very
            important feature for services with real-time streaming and mobile
            applications.
          </li>
        </p>
        <div className="flex">
          <p className="w-[50%] p-5 font-bold py-10 font-serif">
            5G refers to the fifth generation of mobile network technology,
            along with speed, low latency, and high capacity. It enables
            seamless connectivity with devices and applications. It will drive
            the future of IoT, AR/VR, smart cities, and other nascent
            innovations that, by and large, need the underwater infrastructure
            capability for the conduction of business such as autonomous
            vehicles and remote surgeries. Enhanced mobile broadband will
            support high-definition video streaming, gaming, and virtual
            meetings.
          </p>
          <img className="w-[50%] px-5 py-3" src={img2}></img>
        </div>
        <hr className="p-2"></hr>
      </div>
    </div>
  );
}
