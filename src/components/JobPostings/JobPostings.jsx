import React, { useEffect, useState } from "react";
import SingleJobPosting from "../SingleJobPosting/SingleJobPosting";

const JobPostings = () => {
  const [jobPostings, setJobPostings] = useState([]);
  const [allDataLoaded, setAllDataLoaded] = useState(false);


  useEffect(() => {
    fetch("/job_posting.json")
      .then((res) => res.json())
      .then((data) => setJobPostings(data.slice(0, 4)));
      setAllDataLoaded(false);
  }, []);

  const handleShowingData = () =>{
    fetch("/job_posting.json")
        .then((res) => res.json())
        .then((data) => setJobPostings(data));
        setAllDataLoaded(true);
  }
  return (
    <>
      <div className="grid gap-8 md:grid-cols-2">
        {jobPostings.map((posting) => (
          <SingleJobPosting key={posting.id} posting={posting} />
        ))}
      </div>
      {!allDataLoaded && (
        <div className="text-center my-5">
          <button
            onClick={handleShowingData}
            className="btn capitalize font-extrabold bg-gradient-to-r from-purple-500 to-indigo-500"
          >
            See All Jobs
          </button>
        </div>
      )}
    </>
  );
};

export default JobPostings;
