import { useState } from "react";

function ResumeResult({ resumeObj }) {
  return (
    <div className="container">
      <h1>{resumeObj.heading.name}</h1>
      <div className="contact-info">
        <p>
          {resumeObj.heading.phone} |
          <a href={`mailto:${resumeObj.heading.email}`}>Email</a> |
          <a href={resumeObj.heading.linkedin}>LinkedIn</a>|
          <a href={resumeObj.heading.github}>Github</a> |
          <a href={resumeObj.heading.portfolio}>Portfolio</a>
        </p>
      </div>
      {resumeObj.education.length > 0 && (
        <section>
          <h2 className="section-title">Education</h2>
          <div className="section-content">
            {resumeObj.education.map((school) => {
              return (
                <p key={school.key}>
                  <strong>
                    <div className="schoolName">{school.schoolName}</div>{" "}
                    <div className="schoolLocation">
                      {school.schoolLocation}
                    </div>
                  </strong>
                  <br />
                  {school.degreeInfo}
                  <br />
                  {school.startDate} - {school.endDate}
                </p>
              );
            })}
          </div>
        </section>
      )}
      {resumeObj.experience.length > 0 && (
        <section>
          <h2 className="section-title">Experience</h2>
          <div className="section-content">
            {resumeObj.experience.map((exp) => {
              return (
                <div key={exp.key}>
                  <p>
                    <strong>{exp.title}</strong>
                    <br /> <em>{exp.technologies}</em>
                    <br /> {exp.startDate} {exp.endDate && <>- {exp.endDate}</>}
                  </p>
                  <ul>
                    {resumeObj.experiencePoints
                      .filter((expPoints) => expPoints.parentKey === exp.key)
                      .map((expPoints) => {
                        return <li key={expPoints.key}>{expPoints.points}</li>;
                      })}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      )}
      {resumeObj.projects.length > 0 && (
        <section>
          <h2 className="section-title">Projects</h2>
          <div className="section-content"></div>
          {resumeObj.projects.map((project) => {
            return(
              <div key={project.key}>
                <p>
                    <strong>{project.title}</strong>
                    <br /> <em>{project.technologies}</em>
                    <br /> {project.startDate} {project.endDate && <>- {project.endDate}</>}
                  </p>
                  <ul>
                    {resumeObj.projectPoints
                      .filter((projPoints) => projPoints.parentKey === project.key)
                      .map((projPoints) => {
                        return <li key={projPoints.key}>{projPoints.points}</li>;
                      })}
                  </ul>
              </div>
            )
          })}
        </section>
      )}
      {resumeObj.skills.length > 0 && (
        <section>
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-content">
            <ul>
              {resumeObj.skills.map((skill) => {
                return (
                  <li key={skill.key}>
                    <strong>{skill.skillCategory}:</strong>
                    {skill.categorySkills}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}

export default ResumeResult;
