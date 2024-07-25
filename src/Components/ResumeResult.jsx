import { useState } from "react";

function Email({ email }) {
  if (email && email.length > 0) {
    return (
      <>
        | <a href={`mailto:${email}`}>Email</a>{" "}
      </>
    );
  } else {
    return <></>;
  }
}

function LinkedIn({ linkedin }) {
  if (linkedin && linkedin.length > 0) {
    return (
      <>
        | <a href={linkedin}>LinkedIn</a>{" "}
      </>
    );
  }
}

function Github({ github }) {
  if (github && github.length > 0) {
    return (
      <>
        | <a href={github}>Github</a>{" "}
      </>
    );
  } else {
    return <></>;
  }
}

function Portfolio({ portfolio }) {
  if (portfolio && portfolio.length > 0) {
    return (
      <>
        | <a href={portfolio}>Portfolio</a>{" "}
      </>
    );
  } else {
    return <></>;
  }
}

function Education({ education }) {
  return (
    <>
      {education.length > 0 && (
        <section>
          <h2 className="section-title">Education</h2>
          <div className="section-content">
            {education.map((school) => {
              return (
                <div key={school.key}>
                  <strong>
                    <div className="schoolName">{school.schoolName}</div>{" "}
                    <div className="schoolLocation">
                      {school.schoolLocation}
                    </div>
                  </strong>
                  
                  <div className="row-grouping">
                    <div className="info">{school.degreeInfo}</div>
                    <div className="dates">{school.startDate} - {school.endDate}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}
function Experience({ experience, experiencePoints }) {
  return (
    <>
      {experience.length > 0 && (
        <section>
          <h2 className="section-title">Experience</h2>
          <div className="section-content">
            {experience.map((exp) => {
              return (
                <div key={exp.key}>
                  <div>
                    <div className="row-grouping">
                      <strong>{exp.company}</strong>
                      <div className="dates">{exp.startDate} {exp.endDate && <>- {exp.endDate}</>}</div>
                    </div>
                    <div className="row-grouping">
                      <strong>{exp.title}</strong>
                      <em>{exp.technologies}</em>
                    </div>
                    
                  </div>
                  <ul>
                    {experiencePoints
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
    </>
  );
}
function Projects({ projects, projectPoints }) {
  return (
    <>
      {projects.length > 0 && (
        <section>
          <h2 className="section-title">Projects</h2>
          <div className="section-content"></div>
          {projects.map((project) => {
            return (
              <div key={project.key}>
                <p>
                  <strong>{project.title}</strong>
                  <br /> <em>{project.technologies}</em>
                  <br /> {project.startDate}{" "}
                  {project.endDate && <>- {project.endDate}</>}
                </p>
                <ul>
                  {projectPoints
                    .filter(
                      (projPoints) => projPoints.parentKey === project.key
                    )
                    .map((projPoints) => {
                      return <li key={projPoints.key}>{projPoints.points}</li>;
                    })}
                </ul>
              </div>
            );
          })}
        </section>
      )}
    </>
  );
}
function Skills({ skills }) {
  return (
    <>
      {skills.length > 0 && (
        <section>
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-content">
            <ul>
              {skills.map((skill) => {
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
    </>
  );
}

function ResumeResult({ resumeObj }) {
  return (
    <div className="container">
      <h1>{resumeObj.heading.name}</h1>
      <div className="contact-info">
        <p>
          {resumeObj.heading.phone + " "}
          {<Email email={resumeObj.heading.email} />}
          {<LinkedIn linkedin={resumeObj.heading.linkedin} />}
          {<Github github={resumeObj.heading.github} />}
          {<Portfolio portfolio={resumeObj.heading.portfolio} />}
        </p>
      </div>
      <Education education={resumeObj.education} />
      <Experience
        experience={resumeObj.experience}
        experiencePoints={resumeObj.experiencePoints}
      />
      <Projects
        projects={resumeObj.projects}
        projectPoints={resumeObj.projectPoints}
      />
      <Skills skills={resumeObj.skills} />
    </div>
  );
}

export default ResumeResult;
