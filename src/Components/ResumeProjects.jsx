import { useState } from "react";

// Projects
//    Project title, technologies, dates
//    Description bullet points
function ResumeProjects({
  projects,
  saveProjects,
  projectPoints,
  saveProjectPoints,
}) {
  function updateProject(newVal, newKey, projKey) {
    saveProjects(
      projects.map((project) => {
        if (project.key === projKey) {
          return { ...project, [newKey]: newVal };
        } else {
          return project;
        }
      })
    );
  }

  function updateProjectPoints(newVal, pointKey) {
    saveProjectPoints(
      projectPoints.map((point) => {
        if (pointKey === point.key) {
          return { ...point, points: newVal };
        } else {
          return point;
        }
      })
    );
  }
  return (
    <>
      <h2>Projects</h2>
      {projects.map((project) => {
        return (
          <div className="project" key={project.key}>
            <label>
              Project Name
              <input
                type="text"
                name="project-name"
                onChange={(e) => {
                  updateProject(e.target.value, "title", project.key);
                }}
                value={project.title}
              />
            </label>
            <label>
              Techonologies
              <input
                type="text"
                name="technologies"
                onChange={(e) => {
                  updateProject(e.target.value, "technologies", project.key);
                }}
                value={project.technologies}
              />
            </label>
            <label>
              Start Date
              <input
                type="date"
                name="start-date"
                onChange={(e) => {
                  updateProject(e.target.value, "startDate", project.key);
                }}
                value={project.startDate}
              />
            </label>
            <label>
              End Date
              <input
                type="date"
                name="end-date"
                onChange={(e) => {
                  updateProject(e.target.value, "endDate", project.key);
                }}
                value={project.endDate}
              />
            </label>
            
            <ul>
            {projectPoints
                .filter((point) => {
                  return point.parentKey === project.key;
                }).length > 0 && <label>Project Points</label>}
              {projectPoints
                .filter((point) => {
                  return point.parentKey === project.key;
                })
                .map((point) => {
                  return (
                    <li key={point.key}>
                      <input
                        type="text"
                        name="project-points"
                        onChange={(e) => {
                          updateProjectPoints(e.target.value, point.key);
                        }}
                        value={point.points}
                      />
                    </li>
                  );
                })}
            </ul>
            <button
              onClick={() => {
                saveProjectPoints([
                  ...projectPoints,
                  { parentKey: project.key, key: crypto.randomUUID() },
                ]);
              }}
            >
              Add Project Points
            </button>
          </div>
        );
      })}
      <button
        onClick={() => {
          saveProjects([...projects, { key: crypto.randomUUID() }]);
        }}
      >
        Add Project
      </button>
    </>
  );
}

export default ResumeProjects;
