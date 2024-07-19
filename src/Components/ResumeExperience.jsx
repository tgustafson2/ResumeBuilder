import { useState } from "react";

// Experience
//    Title, company, technologies, dates
//    Description bullet points

function ResumeExperience({
  experience,
  saveExperience,
  experiencePoints,
  saveExperiencePoints,
}) {
  function updateExperience(newVal, newKey, expKey) {
    saveExperience(
      experience.map((work) => {
        if (work.key === currKey) {
          return { ...work, [newKey]: newVal };
        } else {
          return work;
        }
      })
    );
  }
  function updateExpPoints(newVal, expKey) {
    saveExperiencePoints(
      experiencePoints.map((exp) => {
        if (exp.key === expKey) {
          return { ...exp, points: newVal };
        } else {
          return exp;
        }
      })
    );
  }
  return (
    <>
      <h2>Experience</h2>
      {experience.map((work) => {
        return (
          <div className="work" key={work.key}>
            <label>
              Title
              <input
                type="text"
                name="position-title"
                onChange={(e) =>
                  updateExperience(e.target.value, "title", work.key)
                }
              />
            </label>
            <label>
              Company Name
              <input
                type="text"
                name="company-name"
                onChange={(e) =>
                  updateExperience(e.target.value, "company", work.key)
                }
              />
            </label>
            <label>
              Start Date
              <input
                type="date"
                name="start-date"
                onChange={(e) => {
                  updateExperience(e.target.value, "startDate", work.key);
                }}
              />
            </label>
            <label>
              End Date
              <input
                type="date"
                name="end-date"
                onChange={(e) => {
                  updateExperience(e.target.value, "endDate", work.key);
                }}
              />
            </label>
            <label>
              Techonologies
              <input
                type="textarea"
                name="technologies"
                onChange={(e) => {
                  updateExperience(e.target.value, "technologies", work.key);
                }}
              />
            </label>
            <ul>
              {experiencePoints
                .filter((exp) => {
                  console.log(exp.parentKey === work.key);
                  return exp.parentKey === work.key;
                })
                .map((exp) => {
                  return (
                    <li key={exp.key}>
                      <input
                        type="textarea"
                        name="experience-points"
                        onChange={(e) => {
                          updateExpPoints(e.target.value, exp.key);
                        }}
                      />
                    </li>
                  );
                })}
            </ul>
            <button
              onClick={() => {
                saveExperiencePoints([
                  ...experiencePoints,
                  { parentKey: work.key, key: crypto.randomUUID() },
                ]);
              }}
            >
              Add Job Points
            </button>
          </div>
        );
      })}
      <button
        onClick={() => {
          saveExperience([...experience, { key: crypto.randomUUID() }]);
        }}
      >
        Add Experience
      </button>
    </>
  );
}

export default ResumeExperience;
