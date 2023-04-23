import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative h-screen bg-blue-200 flex flex-col justify-end items-center">
      <div>
        <img
          src="./../src/assets/img/laptopChat.png"
          alt="laptop"
          className="hidden md:block h-3/4 object-contain rotate-12"
        />
      </div>

      <img
        src="./../src/assets/img/iphonePhone.png"
        alt="iphone"
        className="absolute bottom-96 left-[12%]  rotate-45 h-1/2 sm:hidden "
      />

      <img
        src="./../src/assets/img/pixelPhone.png"
        alt="iphone"
        className="absolute bottom-96 right-[12%] rotate-12 h-1/2 sm:hidden "
      />

      <div className="absolute bottom-0 bg-blue-500 flex flex-col space-y-8 py-4 items-center w-full">
        <img
          src="./../src/assets/img/chat-app-logo.png"
          alt="logo"
          className="border-white border-2"
        />
        <button className="bg-blue-800 text-white hover:bg-sky-700 rounded-md py-2 w-32">
          <Link to="/register">REGISTER</Link>
        </button>
        <button className="bg-blue-800 text-white hover:bg-sky-700 rounded-md py-1 w-32">
          <Link to="/login">LOGIN</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
