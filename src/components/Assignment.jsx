import React from "react";
import "./Assignment.css";
import AssignStudent from "./AssignStudent";
import ChangeStudent from "./ChangeStudent";

const Assignment = () => {
  return (
    <>
      <div className="container-sm assign-container">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active assign-button"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Assign student to a mentor
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link assign-button"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Change mentor for a student
            </button>
          </li>
        </ul>
        <div className="tab-content tab-container" id="pills-tabContent">
          <div
            className="tab-pane fade show active tab-container"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabindex="0"
          >
            <AssignStudent />
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabindex="0"
          >
            <ChangeStudent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Assignment;
