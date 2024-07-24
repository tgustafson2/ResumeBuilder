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
      <div className="hide-on-save">
        <h1>Create Your Resume</h1>
        <p id="instructions">Input your resume details, then click build resume to generate an output. To save resume print and save as pdf.</p>
        <ResumeForm saveResume = {setResume} showResume = {setShowStatus} />
      </div>
      {showStatus && <ResumeResult resumeObj={resume} />}
    </>
  );
}

export default App;
