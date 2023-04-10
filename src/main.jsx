import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./components/Layout/Main";
import Home from "./components/Home/Home";
import JobPostingDetails from "./components/JobPostingDetails/JobPostingDetails";
import JobPostings from "./components/JobPostings/JobPostings";
import SingleJobPosting from "./components/SingleJobPosting/SingleJobPosting";
import AppliedJob from "./components/AppliedJob/AppliedJob";
import { loadAppliedJobInfo } from "./loaders/loadAppliedJobInfo";
import AssignmentMarkStatistics from "./components/Statistics/AssignmentMarkStatistics";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('categories.json'),
      },
      {
        path: "/jobDetails/:id",
        element: <JobPostingDetails />,
      },
      {
        path: "/applied-job",
        element: <AppliedJob />,
        loader: loadAppliedJobInfo,
      },
      {
        path: "/assignment-mark-statistics",
        element: <AssignmentMarkStatistics />,
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
