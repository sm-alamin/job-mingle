import React, { useEffect, useState } from "react";
import { getJobInformation } from "../../utilities/fakedb";
import { useLoaderData } from "react-router-dom";
import AppliedPost from "../AppliedPost/AppliedPost";

const AppliedJob = () => {
  const { initialJobCartInfo } = useLoaderData();
  const [filteredJobs, setFilteredJobs] = useState(initialJobCartInfo);

  const handleFilter = (filterOption) => {
    if (filterOption === "remote") {
      const remoteJobs = initialJobCartInfo.filter((job) => job.remote_or_onsite === "Remote");
      setFilteredJobs(remoteJobs);
    } else if (filterOption === "onsite") {
      const onsiteJobs = initialJobCartInfo.filter((job) => job.remote_or_onsite === "Onsite");
      setFilteredJobs(onsiteJobs);
    } else {
      setFilteredJobs(initialJobCartInfo);
    }
  };
  

  return (
    <div>
      <div className="form-control w-32 max-w-xs py-5 ml-auto">
        <select className="select select-bordered" defaultValue="all" onChange={(e) => handleFilter(e.target.value)}>
          <option disabled value="all">
            Filter By
          </option>
          <option value="remote">Remote</option>
          <option value="onsite">On-site</option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {filteredJobs.map((post) => (
          <AppliedPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
