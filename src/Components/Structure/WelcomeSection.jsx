import React from "react";
import "../Design/WelcomeSection.css";
import welcome from "../Assets/welcome.svg";

const WelcomeSection = () => {
  return (
    <div className="mainDiv flex justify-evenly w-auto bg-surface font-fredoka">
      <div className="bg-red-400 ">
        <div className="bg-green-300 ">
          <p className="flex flex-row justify-start">Welcome to</p>
          <h2 className="flex flex-row justify-start text-3xl">Clock Studio</h2>
          <h3>hehehe</h3>
        </div>

        <h1 className="text-5xl w-30 bg-blue-600">
          Get Personalized Solutions for Your Cutting Edge Ideas
        </h1>
      </div>

      <img src={welcome} alt="" />
    </div>
  );
};

export default WelcomeSection;
