import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  CurrencyDollarIcon,
  CalendarDaysIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from "@heroicons/react/24/solid";
import { addToDb, getJobInformation } from "../../utilities/fakedb";

const JobPostingDetails = () => {
  const { id } = useParams();
  const [jobPostings, setJobPostings] = useState(null);

  useEffect(() => {
    fetch("/job_posting.json")
      .then((response) => response.json())
      .then((data) => {
        const jobPostings = data.find((posting) => posting.id === id);
        setJobPostings(jobPostings);
      });
  }, [id]);

  const handleJobInfo = (id) =>{
    addToDb(id)
  }
  
  if (!jobPostings) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <div>
        <h2 className="py-5">Job Description: <span className="text-gray-400 text-xs">{jobPostings.job_description}</span></h2>
        <p className="py-5">Job Responsibility: <span className="text-gray-400 text-xs">{jobPostings.job_responsibility}</span></p>
        <p className="py-5">Educational Requirement: <span className="text-gray-400 text-xs">{jobPostings.educational_requirements}</span></p>
        <p className="py-5">Experiences: <span className="text-gray-400 text-xs">{jobPostings.experiences}</span> </p>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body p-3">
          <div>
            <h2 className="card-title">Job Details</h2>
            <hr />
           <div className="py-5">
           <div className="flex gap-2">
              <CurrencyDollarIcon className="h-5 w-5 text-gray-300" />
              <p className="text-gray-400 text-xs pt-1">
                Salary: {jobPostings.salary}
              </p>
            </div>
            <div className="flex gap-2">
              <CalendarDaysIcon className="h-5 w-5 text-gray-300" />
              <p className="text-gray-400 text-xs pt-1">
                Job Title: {jobPostings.job_title}
              </p>
            </div>
           </div>
          </div>
          <div>
            <h2 className="card-title">Contact Information</h2>
            <hr />
         <div className="py-5">
         <div className="flex gap-2">
              <PhoneIcon className="h-5 w-5 text-gray-300" />
              <p className="text-gray-400 text-xs pt-1">
                Phone: {jobPostings.contact_information.phone}
              </p>
            </div>
            <div className="flex gap-2">
              <EnvelopeIcon className="h-5 w-5 text-gray-300" />
              <p className="text-gray-400 text-xs pt-1">
                Email: {jobPostings.contact_information.email}
              </p>
            </div>
            <div className="flex gap-2">
              <MapPinIcon className="h-5 w-5 text-gray-300" />
              <p className="text-gray-400 text-xs pt-1">
                Address: {jobPostings.location}
              </p>
            </div>
         </div>
          </div>

          <div className="card-actions justify-end">
            <button className="btn w-full capitalize font-extrabold  bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4" onClick={()=>handleJobInfo(id)}>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostingDetails;
