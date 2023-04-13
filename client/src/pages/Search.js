import React from "react";
import Navbar from "../components/navbar";
import Hamburger from "../components/hamburger";
function Search() {
  const [key, setKey] = React.useState("");
  const [value, setValue] = React.useState("");
  const [query, setQuery] = React.useState([]);

  async function searchLog(event) {
    event.preventDefault();
    console.log("hello")
      const response = await fetch("http://localhost:8080/api/logs/search", {
        
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          key,value
        }),
      });
      console.log("hello1")
      const data = await response.json();
      console.log(data)
      if (data.status === "ok") {
        // console.log(data.allDocs)
        setQuery(data.allDocs)
      } else {
        alert("SOMETHING WENT WRONG")
      }
  }
  return (
    <>
      <div className="flex flex-col custom1:flex-row h-screen text-xl">
        <div className=" hidden custom1:block w-1/4 max-w-full bg-[#AD94FF]">
          <Navbar />
        </div>
        <div className=" custom1:hidden  bg-[#F2EEFF]">
          <Hamburger />
        </div>
        <div className="flex-1 gap-4 bg-[#F2EEFF] text-center mt-20">
          <div>
            <input
              className="border border-gray-400 rounded-md text-sm px-1 w-2/4"
              placeholder="ENTER THE KEY OF DOCUMENT YOU WANT TO SEARCH.EG: date,responseStatus"
              onChange={(e) => setKey(e.target.value)}
            />
            <input
              className="border border-gray-400 rounded-md text-sm px-1 w-2/4 ml-20 mr-20"
              placeholder="ENTER THE VALUE OF DOCUMENT YOU WANT TO SEARCH.EG: 2023-02-12,200"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <br />
          <div>
            {" "}
            <button
              className="bg-blue-700 text-white rounded-md w-40"
              onClick={searchLog}
            >
              SEARCH
            </button>
            <br/>
            <br/>
          </div>
          {query.length >0&&
          <div>
            <p className="font-semibold">SHOWING RESULT FOR TOP 10 DOCUMENTS FOUND</p>
            <br/>
            <div className="bg-blue-700 rounded-3xl mr-16 ml-16  custome1:ml-2 mr-2">
            <div className="h-96  overflow-y-scroll overflow-x-hidden">
            {query.map((item) => (
        <div key={item.id} className="mt-5" >
          {Object.keys(item).map((key) => (
            <ul key={key} className="bg-blue-500 ml-20 mr-20 text-black ">
              {key}: {item[key]}
            </ul>
          ))}
        <br/>
        </div>
      ))}
            </div>

          </div>
          
          </div>}
        </div>
           <br/>
           <br/>
      </div>
    </>
  );
}

export default Search;
