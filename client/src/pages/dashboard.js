import React from "react";
import Navbar from "../components/navbar";
import Hamburger from "../components/hamburger";
function Dashboard() {
  return (
    <>
    <div className="flex flex-col custom1:flex-row h-screen text-xl">
      <div className=" hidden custom1:block w-1/4 max-w-full bg-[#AD94FF]">
        <Navbar />
      </div>
      <div className=" custom1:hidden  bg-[#F2EEFF]">
        
        <Hamburger/>
      </div>
      <div className="flex-1 bg-[#F2EEFF] text-center mt-20">RIGHT SIDE</div>
    </div>
    </>
  );
}

export default Dashboard;
