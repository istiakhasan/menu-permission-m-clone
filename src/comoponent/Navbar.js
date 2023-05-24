import React from "react";
import { Link } from "react-router-dom";

const Navbarjs = () => {

  return (
    <div className="bg-green-800 text-white min-h-[50px] flex items-center sticky mb-5 top-0 z-[1000]">
      <ul className="container mx-auto  flex items-center gap-5">
        <li style={{boxShadow:"0px 5px 3px rgba(0,0,0,.6)"}} className="font-serif font-semibold bg-white text-green-800 rounded-[4px] px-3 py-1   text-[12px]">
          <Link to="/">Menu Permission</Link>
        </li>
        <li  style={{boxShadow:"0px 5px 3px rgba(0,0,0,.6)"}}  className="font-serif font-semibold bg-white text-green-800 rounded-[4px] px-3 py-1   text-[12px]">
          <Link to={"/business/unit/list"}>Business Unit</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbarjs;
