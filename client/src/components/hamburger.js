import React from "react";
import { GoSearch } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import {
  BsFillBarChartLineFill,
  BsFillCalendar2CheckFill,
} from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
function Hamburger() {
  const [flip, setFlip] = React.useState(false);
  const [bool, setBool] = React.useState({
    search: true,
    visualization: false,
    dashboard: false,
    planning: false,
  });
  const changeFlip = () => {
    setFlip(!flip);
  };
  let navigate = useNavigate();
  React.useEffect(() => {
    // eslint-disable-next-line default-case
    switch (window.location.pathname) {
      case "/": {
        setBool({
          search: true,
          visualization: false,
          dashboard: false,
          planning: false,
        });
        break;
      }

      case "/analysis": {
        setBool({
          search: false,
          visualization: true,
          dashboard: false,
          planning: false,
        });
        break;
      }
      case "/dashboard": {
        setBool({
          search: false,
          visualization: false,
          dashboard: true,
          planning: false,
        });
        break;
      }
      case "/planning": {
        setBool({
          search: false,
          visualization: false,
          dashboard: false,
          planning: true,
        });
        break;
      }
    }
  }, [navigate]);

  return (
    <div className=" ml-10 mt-20 text-xl custom:text-2xl lg:text-3xl">
      <GiHamburgerMenu onClick={changeFlip}size={60} />
      {flip && (
        <div className="w-1/4 max-w-full mt-10">

          <div className="mb-12   font-medium">
            <div className="flex gap-4">
              <GoSearch />
              <div
                className="hover:cursor-pointer"
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
              <div
                className="hover:cursor-pointer"
                style={{ color: bool.visualization ? "blue" : "black" }}
                onClick={() => {
                  navigate("/analysis");
                }}
              >
                VISUALIZATION
              </div>
            </div>
          </div>
          <div className="mb-12">
            {/* <div className="flex gap-4">
              <MdDashboard />
              <div
                className="hover:cursor-pointer"
                style={{ color: bool.dashboard ? "blue" : "black" }}
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                DASHBOARD
              </div>
            </div> */}
          </div>
          <div className="mb-12">
            <div className="flex gap-4">
              <BsFillCalendar2CheckFill />
              <div
                className="hover:cursor-pointer"
                style={{ color: bool.planning ? "blue" : "black" }}
                onClick={() => {
                  navigate("/planning");
                }}
              >
                PLANNING
              </div>
            </div>
          </div>
         
        </div>
      )}
    </div>
  );
}

export default Hamburger;
