import React from "react";
import Navbar from "../components/navbar";
import Hamburger from "../components/hamburger";
import explain from "../components/explain.png";
function Planning() {
  return (
    <>
      <div className="flex flex-col custom1:flex-row h-screen text-xl">
        <div className=" hidden custom1:block w-1/4 max-w-full bg-[#AD94FF]">
          <Navbar />
        </div>
        <div className=" custom1:hidden  bg-[#F2EEFF]">
          <Hamburger />
        </div>
        <div className="flex-1 bg-[#F2EEFF] text-center mt-20">
          <br />
          <a
            href="https://docs.google.com/presentation/d/1EV4RH4n3KS8_iZKVmllssvXq2EC161ic/edit?usp=sharing&ouid=105275843753179310707&rtpof=true&sd=true"
            className="text-red-500 underline"
          >
            Click this Link to get a short,concise Explaination of the project
          </a>
          <br />
          <br />
          <div className="flex flex-col items-center ">
            <div className="text-blue-700">General Flow of the application:</div>
            <br/>
            <br/>

            <div>
              <img src={explain} alt="" className="h-80 rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Planning;
