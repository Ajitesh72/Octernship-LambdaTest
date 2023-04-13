import React from "react";
import { FaGithubSquare, FaLinkedin, FaEnvelopeSquare } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import {
    BsFillBarChartLineFill,
    BsFillCalendar2CheckFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
function Navbar() {
    const [bool, setBool] = React.useState({search:true,visualization:false,dashboard:false,planning:false});
    let navigate = useNavigate();
  React.useEffect(() => {
    // eslint-disable-next-line default-case
    switch (window.location.pathname) {
      case "/": {
        setBool({
            search:true,visualization:false,dashboard:false,planning:false
        });
        break;
      }
      

      case "/analysis": {
        setBool({
            search:false,visualization:true,dashboard:false,planning:false
        });
        break;
      }
      case "/dashboard": {
        setBool({
            search:false,visualization:false,dashboard:true,planning:false
        });
        break;
      }
      case "/planning": {
        setBool({
            search:false,visualization:false,dashboard:false,planning:true
        });
        break;
      }
    }
  }, [navigate]);



  return (
    <div className=" ml-10 mt-20 text-xl custom:text-2xl lg:text-3xl">
      <div className="mb-20 text-white  font-medium">OCTERNSHIP-HUB</div>
      <div className="mb-12   font-medium">
        <div className="flex gap-4">
          <GoSearch />
          <div className="hover:cursor-pointer"
            style={{ color: bool.search ? "blue" : "black" }}
            onClick={() => {
              navigate("/");
            }}
          >
            SEARCH
          </div>
        </div>
      </div>
      <div className="mb-12">
        <div className="flex gap-4">
          <BsFillBarChartLineFill />
          <div className="hover:cursor-pointer"
          style={{ color: bool.visualization ? "blue" : "black" }}
            onClick={() => {
            
              navigate("/analysis");
            }}>VISUALIZATION</div>
        </div>
      </div>
      <div className="mb-12">
        {/* <div className="flex gap-4">
          <MdDashboard />
          <div className="hover:cursor-pointer" 
          style={{ color: bool.dashboard ? "blue" : "black" }}
            onClick={() => {
              
              navigate("/dashboard");
            }}>DASHBOARD</div>
        </div> */}
      </div>
      <div className="mb-12">
        <div className="flex gap-4">
          <BsFillCalendar2CheckFill />
          <div className="hover:cursor-pointer"
          style={{ color: bool.planning ? "blue" : "black" }}
            onClick={() => {
              
              navigate("/planning");
            }}>PLANNING</div>
        </div>
      </div>
      <div className="flex gap-2">
        <div>
          <a href="https://github.com/Ajitesh72">
            <FaGithubSquare size="36" className="icons_img" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/ajitesh-dubey-4b5852220/">
            <FaLinkedin size="36" className="icons_img" />
          </a>
        </div>
        <div>
          <a href="mailto: dubeyajitesh07@gmail.com">
            <FaEnvelopeSquare size="36" className="icons_img" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
