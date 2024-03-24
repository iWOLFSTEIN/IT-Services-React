import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between p-8 items-center list-none h-10 bg-primary">
      <ul className="flex justify-between w-72">
        <li href="#" className="text-base font-fredoka">
          Home
        </li>
        <li className="text-base font-fredoka">Services</li>
        <li className="text-base font-fredoka">About Us</li>
      </ul>

      <label className="text-xl mr-[5%]">Clock Studio</label>
      <ul>
        <li className="text-base font-fredoka">Sign up</li>
        <li></li>
      </ul>
    </nav>
  );
};

export default NavBar;
