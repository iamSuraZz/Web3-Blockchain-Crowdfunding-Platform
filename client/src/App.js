import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import {
  Home,
  Profile,
  CreateCampaign,
  CampaignDetails,
} from "./pages/index.js";
import { Navbar, Sidebar } from "./components/index";

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;