import { useState } from "react";
import ResumeHeading from "./ResumeHeading";
import ResumeEducation from "./ResumeEducation";
import ResumeExperience from "./ResumeExperience";
import ResumeProjects from "./ResumeProjects";
import ResumeSkills from "./ResumeSkills";

function ResumeForm({ saveResume }) {
  const [heading, setHeading] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [experiencePoints, setExperiencePoints] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

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
    </>
  );
}

export default ResumeForm;
