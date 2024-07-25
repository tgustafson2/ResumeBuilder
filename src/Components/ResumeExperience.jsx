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
        if (work.key === expKey) {
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
                value={work.title}
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
                value={work.company}
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
                value={work.startDate}
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
                value={work.endDate}
              />
            </label>
            <label className="center-input">
              Techonologies
              <input
                type="text"
                name="technologies"
                onChange={(e) => {
                  updateExperience(e.target.value, "technologies", work.key);
                }}
                value={work.technologies}
              />
            </label>
            <ul>
              {experiencePoints
                .filter((exp) => {
                  return exp.parentKey === work.key;
                }).length > 0 && <label>Job Points</label>}
              {experiencePoints
                .filter((exp) => {
                  return exp.parentKey === work.key;
                })
                .map((exp) => {
                  return (
                    <li key={exp.key}>
                      <input
                        type="text"
                        name="experience-points"
                        onChange={(e) => {
                          updateExpPoints(e.target.value, exp.key);
                        }}
                        value={exp.points}
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
