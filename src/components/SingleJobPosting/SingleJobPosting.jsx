import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { useNavigate } from "react-router-dom";

const SingleJobPosting = ({ posting }) => {
    const {id, company_logo,job_title, company_name,remote_or_onsite,fulltime_or_parttime,location,salary} = posting;
    const navigate = useNavigate();
  return (
    <div className="border bg-slate-100 p-5 rounded-md">
      <img className="h-14" src={company_logo} alt="" />
      <h3>{job_title}</h3>
      <p className="text-gray-400 text-xs py-4">
        {company_name} 
      </p>
      <span className="text-gray-400 text-xs border px-5 py-2 bg-white">{remote_or_onsite}</span>
      <span className="text-gray-400 text-xs border px-5 py-2 bg-white ml-3">{fulltime_or_parttime}</span>
      <div className="flex flex-col md:flex-row gap-5 pt-4">
      <div className="flex gap-2">
      <MapPinIcon className="h-5 w-5 text-gray-300" />
      <p className="pt-1 text-gray-400 text-xs">{location} </p>
      </div>
      <div className="flex gap-2">
       <CurrencyDollarIcon className="h-5 w-5 text-gray-300" />
        <p className="text-gray-400 text-xs pt-1">Salary: {salary}</p>
      </div>
      </div>
      <button onClick={()=> navigate(`/jobDetails/${id}`)} className="btn capitalize font-extrabold  bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4">View Details</button>
    </div>
  );
};

export default SingleJobPosting;
