import React, { useEffect, useState } from "react";
import SingleJobPosting from "../SingleJobPosting/SingleJobPosting";

const JobPostings = () => {
    const [jobPostings, setJobPostings] = useState([]);

    useEffect( ()=> {
        fetch('job_posting.json')
            .then(res => res.json())
            .then(data => setJobPostings(data.slice(0,4)))
    },[]);
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {jobPostings.map((posting) => (
        <SingleJobPosting key={posting.id} posting={posting} />
      ))}
    </div>
  );
};

export default JobPostings;
