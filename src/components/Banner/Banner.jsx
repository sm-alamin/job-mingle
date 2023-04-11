import React from "react";
import './Banner.css'

const Banner = ({ pageName }) => {
  return (
    <div className="banner">
      <h2>{pageName}</h2>
    </div>
  );
};

export default Banner;
