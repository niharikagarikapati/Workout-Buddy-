import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white pt-10 flex items-center justify-between">
      <div className="container mx-auto max-w-5xl">
        <Link to="/">
          <h2 className="text-3xl font-extrabold text-black font-poppins text-align: left">
            Workout buddy
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;