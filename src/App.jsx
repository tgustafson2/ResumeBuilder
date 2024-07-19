import { useState } from "react";
import ResumeForm from "./Components/ResumeForm";
import ResumeResult from "./Components/ResumeResult";

import "./App.css";

//resume sections
// heading
//    Name, contact information, links
// Education
//    Each school name, location, dates attended, degree information

// Projects
//    Project title, technologies, dates
//    Description bullet points
// Skills
//    Categories: values

function App() {
  const [resume, setResume] = useState({});
  return (
    <>
      <ResumeForm saveResume={(newResume) => setResume(newResume)} />
      <ResumeResult resumeObj={JSON.parse(JSON.stringify(resume))}/>
    </>
  );
}

export default App;
