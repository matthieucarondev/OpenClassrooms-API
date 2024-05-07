import React from "react";
import logo from "@/asset/rondLogo.svg";
import "./Loading.css";

export const Loading = () => {
  return (
    <div className="Loading">
      <img src={logo} alt="logo SportSee" className="loadingLogo rotating" />
      <p className="Loading-text">Loading...</p>
    </div>
  );
};

export const Loadingchart = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo SportSee" className=" rotating2" />
      Loading...
    </div>
  );
};
