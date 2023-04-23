import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row ">
      <div className="md:w-1/3 relative bg-slate-300 flex justify-center items-center md:justify-start md:items-start">
        <img
          src="./../src/assets/img/laptopChat.png"
          alt="laptop"
          className="object-contain h-full hidden md:block"
        />
        <img
          src="./../src/assets/img/iphonePhone.png"
          alt="iphone"
          className="h-[400px]  rotate-45 absolute md:hidden top-8 left-16"
        />
        <img
          src="./../src/assets/img/pixelPhone.png"
          alt="iphone"
          className="h-[450px] absolute md:hidden left-4 top-8 "
        />
      </div>
      <div className=" bg-blue-500 border-2  md:flex md:justify-center md:items-center border-red-600 flex-1 ">
        <button className="bg-blue-800  text-white py-2 px-4 hover:bg-sky-700 rounded-md ">
          <Link to="/register">REGISTER</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
