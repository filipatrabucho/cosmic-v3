import React, { useState } from "react";
import { jobs, jobPositions } from "../../component/utils/jobs";
import locationIcon from "../../assets/location_icon.png";
import "./hiring.css";

const Hiring = () => {
  const [currentPosition, setCurrentPosition] = useState("all_positions");
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const filterJobs = (label) => {
    setCurrentPosition(label);
    const newJobs = jobs.filter((job) => job.label === label);
    setFilteredJobs(newJobs);
  };

  return (
    <>
      <div className="hiring__main-container">
        <div className="hiring__menu">
          {jobPositions.map((jobPosition) => {
            const { id, label, name } = jobPosition;
            return (
              <button
                key={id}
                className={`hiring-btn ${
                  currentPosition === label ? "hiring__menu--active" : ""
                }`}
                onClick={() => {
                  if (label === "all_positions") {
                    setCurrentPosition(label);
                    setFilteredJobs(jobs);
                  } else {
                    filterJobs(label);
                  }
                }}
              >
                {name}
              </button>
            );
          })}
          {/*---------Dropdown for responsive-----------*/}
          <div className="dropdown">
            <select className="dropdown__select" id="dropdown__select">
              {jobPositions.map((jobPosition) => {
                const { id, label, name } = jobPosition;
                return (
                  <option
                    value=""
                    key={id}
                    className={`hiring-dropdown ${
                      currentPosition === label
                        ? "hiring__dropdown--active"
                        : ""
                    }`}
                    onClick={() => {
                      if (label === "all_positions") {
                        setCurrentPosition(label);
                        setFilteredJobs(jobs);
                      } else {
                        filterJobs(label);
                      }
                    }}
                  >
                    {name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        {/* *****************************************  JOB RESULTS ********************/}
        <div className="hiring__container-grid">
          <div className="hiring__grid">
            {filteredJobs.map((job) => {
              const { id, position, location } = job;

              if (filteredJobs.length <= 0) {
                return (
                  <div key={id} className="hiring__grid-item">
                    <h2>No jobs available</h2>
                  </div>
                );
              } else {
                return (
                  <div
                    key={id}
                    className="hiring__card"
                    onClick={() => {
                      console.log(position);
                    }}
                  >
                    <h3 className="hiring__position">{position}</h3>
                    <div className="hiring__container">
                      <img
                        src={locationIcon}
                        alt="Location Icon"
                        className="hiring__icon"
                      />
                      <p className="hiring__localition">{location}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hiring;
