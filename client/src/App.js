import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Dashboard from "./pages/dashboard";
import Search from "./pages/Search";
import Analysis from "./pages/Analysis";
import Dashboard from "./pages/dashboard";
import Planning from "./pages/planning";
function App() {
  return (
    <div className="m-0 bg-[#F2EEFF]">
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </div>
  );
}

export default App;
