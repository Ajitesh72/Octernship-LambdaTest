import React from "react";
import Navbar from "../components/navbar";
import Hamburger from "../components/hamburger";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
function Analysis() {
  const [totalLogs, setTotalLogs] = React.useState(0);
  // const [logsByMonth, setLogsByMonth] = React.useState([]);
  const [monthcounts, setMonthCounts] = React.useState([]);
  const [showMonth, setShowMonth] = React.useState(false);
  const [Logs, setLogs] = React.useState([]);

  async function getGraphs(event) {
    event.preventDefault();
    console.log("hello");
    const response = await fetch("http://localhost:8080/api/logs/graph", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    if (data.status === "ok") {
      // console.log(data.allDocs)
      setTotalLogs(data.totalCount);
      setLogs(data.allDocs);
    } else {
      alert("SOMETHING WENT WRONG");
    }
  }
  React.useEffect(() => {
    const monthCounts = getLogsByMonth(Logs);
    console.log("yaha");
    console.log(monthCounts);
    setMonthCounts(monthCounts);
    setShowMonth(true);
  }, [Logs]);
  const getLogsByMonth = (logs) => {
    const logsByMonth = {
      January: 0,
      February: 0,
      March: 0,
      April: 0,
      May: 0,
      June: 0,
      July: 0,
      August: 0,
      September: 0,
      October: 0,
      November: 0,
      December: 0,
    };

    logs.forEach((log) => {
      const date = new Date(log.date);
      const month = date.toLocaleString("default", { month: "long" });
      if (logsByMonth.hasOwnProperty(month)) {
        logsByMonth[month] += 1;
      }
    });

    const data = Object.entries(logsByMonth).map(([month, count]) => ({
      month,
      count,
    }));
    console.log(data);

    return data;
  };

  return (
    <div>
      <div className="flex flex-col custom1:flex-row h-screen text-xl ">
        <div className=" hidden custom1:block w-1/4 max-w-full  bg-[#AD94FF] min-h-screen">
          <Navbar />
        </div>
        <div className=" custom1:hidden  bg-[#F2EEFF]">
          <Hamburger />
        </div>
        <div className="flex-1 gap-4 bg-[#F2EEFF] text-center mt-15 ">
          <br />
          <div>
            {" "}
            <button
              className="bg-blue-700 text-white rounded-md w-40"
              onClick={getGraphs}
            >
              GET ANALYSIS
            </button>
            <br />
            <br />
          </div>
          {totalLogs > 0 && (
            <div>
              <div>TOTAL LOGS EXTRACTED USING SELENIUM:{totalLogs}</div>
              <br />
              {showMonth && (
                <div>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                      data={monthcounts}
                      margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="count" stroke="#8884d8" />
                    </LineChart>
                  </ResponsiveContainer>
                  <br/>
                  <div >
                    ANALYSIS:<br/>
                    I have used Line Chart to visualize the Number of logs generated in each months and therefore we can study the trend of Logs over the year.
                    Athough I have generated random dates for each logs while extracting the logs,Using line charts for studying the data over a continuous scale is benificial to gain insights.
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Analysis;
