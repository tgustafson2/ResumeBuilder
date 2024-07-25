import { useState } from "react";
import ResumeHeading from "./ResumeHeading";
import ResumeEducation from "./ResumeEducation";
import ResumeExperience from "./ResumeExperience";
import ResumeProjects from "./ResumeProjects";
import ResumeSkills from "./ResumeSkills";

function ResumeForm({ saveResume, showResume }) {
  const [heading, setHeading] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [experiencePoints, setExperiencePoints] = useState([]);
  const [projects, setProjects] = useState([]);
  const [projectPoints, setProjectPoints] = useState([]);
  const [skills, setSkills] = useState([]);
  function outputResume(){
    if(!heading.name || heading.name<=0 ){
      alert("Name is required for resume");
      return;
    } 
    saveResume({heading, education, experience, experiencePoints, projects, projectPoints, skills})
    showResume(true);
  }
  return (
    <>
      <ResumeHeading heading={heading} saveHeading={setHeading} />
      <ResumeEducation education={education} saveEducation={setEducation} />
      <ResumeExperience
        experience={experience}
        saveExperience={setExperience}
        experiencePoints={experiencePoints}
        saveExperiencePoints={setExperiencePoints}
      />
      <ResumeProjects
        projects={projects}
        saveProjects={setProjects}
        projectPoints={projectPoints}
        saveProjectPoints={setProjectPoints}
      />
      <ResumeSkills skills={skills} saveSkills={setSkills} />
      <button onClick={() => outputResume()}>Build Resume</button>
    </>
  );
}

export default ResumeForm;
