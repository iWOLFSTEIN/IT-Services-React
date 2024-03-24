import React from "react";
import "../Design/WelcomeSection.css";
import welcome from "../Assets/welcome.svg";

const WelcomeSection = () => {
  return (
    <div className="mainDiv flex justify-between w-auto bg-surface font-fredoka">
      <div className="bg-red-400 text-left w-1/2 ">
        <div className="bg-green-300">
          <p>Welcome to</p>
          <h2>Clock Studio</h2>
        </div>

        <h1 className="text-5xl w-30 text-left">
          Get Personalized Solutions for Your Cutting Edge Ideas
        </h1>
      </div>

      <img className="mr-16" src={welcome} alt=""  />
    </div>
  );
};

export default WelcomeSection;
