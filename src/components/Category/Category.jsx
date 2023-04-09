import React from "react";

const Category = ({category}) => {
    const {id,category_name,logo,jobs_available} =category;
  return (
    <div className="border bg-slate-100 p-5 rounded-md">
      <img
        className=""
        src={logo}
        alt=""
      />
      <h3>{category_name}</h3>
      <p className="text-gray-400 text-xs pt-4">{jobs_available} jobs available</p>
    </div>
  );
};

export default Category;
