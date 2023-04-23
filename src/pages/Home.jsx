import React from "react";

const Home = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row bg-blue-500">
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
      <div className="bg-transparent border-2 border-red-600 flex-1"></div>
    </div>
  );
};

export default Home;
