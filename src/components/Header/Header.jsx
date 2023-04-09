import React from "react";
import './Header.css'
const Header = () => {
  return (
    <div className="p-5 min-h-screen ">
      <div className="flex justify-between items-center flex-col lg:flex-row-reverse">
        <img
          src="https://img.freepik.com/free-photo/handsome-man-holding-something_1368-5152.jpg?w=360&t=st=1681057156~exp=1681057756~hmac=02cc11f7bf902b2f7072418a432834a62e7c1f4e6284431eb3e904f982731d6d"
          className="max-w-sm rounded-lg"
        />
        <div>
          <h1 className="text-5xl font-bold">Discover Your ,<br /> Next Career Move <br /> <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">with JobMingle</span></h1>
          <p className="py-6 text-gray-400">
          JobMingle empowers you to explore job opportunities <br /> with all the information you need. Manage your applications and <br /> take control of your career.
          </p>
          <button className="btn capitalize font-extrabold  bg-gradient-to-r from-purple-500 to-indigo-500">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
