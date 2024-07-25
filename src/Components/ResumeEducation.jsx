import { useState } from "react";

function ResumeEducation({ education, saveEducation }) {
  function updateSchool(newVal, newKey, schoolKey) {
    saveEducation(
      education.map((school) => {
        if (school.key === schoolKey) {
          return { ...school, [newKey]: newVal };
        } else {
          return school;
        }
      })
    );
  }
  return (
    <>
      <h2>Education</h2>
      {education.map((school) => {
        return (
          <div className="school" key={school.key}>
            <label>
              School
              <input
                type="text"
                name="school-name"
                onChange={(e) => {
                  updateSchool(e.target.value, "schoolName", school.key);
                }}
                value={school.schoolName}
              />
            </label>
            <label>
              Location
              <input
                type="text"
                name="school-location"
                onChange={(e) => {
                  updateSchool(e.target.value, "schoolLocation", school.key);
                }}
                value={school.schoolLocation}
              />
            </label>
            <label>
              Start Date
              <input
                type="date"
                name="start-date"
                onChange={(e) => {
                  updateSchool(e.target.value, "startDate", school.key);
                }}
                value={school.startDate}
              />
            </label>
            <label>
              End Date
              <input
                type="date"
                name="end-date"
                onChange={(e) => {
                  updateSchool(e.target.value, "endDate", school.key);
                }}
                value={school.endDate}
              />
            </label>
            <label className="center-input">
              Degree Information
              <input
                type="text"
                name="degree-information"
                onChange={(e) => {
                  updateSchool(e.target.value, "degreeInfo", school.key);
                }}
                value={school.degreeInfo}
              />
            </label>
          </div>
        );
      })}
      <button
        onClick={() =>
          saveEducation([...education, { key: crypto.randomUUID() }])
        }
      >
        Add School
      </button>
    </>
  );
}

export default ResumeEducation;
