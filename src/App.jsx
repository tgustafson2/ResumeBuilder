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
  const [showStatus, setShowStatus] = useState(false);
  return (
    <>
      <ResumeForm saveResume = {setResume} showResume = {setShowStatus} />
      {showStatus && <ResumeResult resumeObj={resume} />}
    </>
  );
}

export default App;
