import { useState } from "react";

function ResumeHeading({ heading, saveHeading }) {
  return (
    <>
      <h2>Personal Information</h2>
      <form>
        <label>
          Name
          <input
            name="name-input"
            type="text"
            onChange={(e) => saveHeading({ ...heading, name: e.target.value })}
            value={heading.name}
          ></input>
        </label>
        <label>
          Phone Number
          <input
            name="phone-input"
            type="tel"
            onChange={(e) => saveHeading({ ...heading, phone: e.target.value })}
            value={heading.phone}
          ></input>
        </label>
        <label>
          Email
          <input
            name="email-input"
            type="email"
            onChange={(e) => saveHeading({ ...heading, email: e.target.value })}
            value={heading.email}
          ></input>
        </label>
        <label>
          Github Link
          <input
            name="github-input"
            type="url"
            onChange={(e) =>
              saveHeading({ ...heading, github: e.target.value })
            }
            value={heading.github}
          ></input>
        </label>
        <label>
          Portfolio
          <input
            name="portfolio-input"
            type="url"
            onChange={(e) =>
              saveHeading({ ...heading, portfolio: e.target.value })
            }
            value={heading.portfolio}
          ></input>
        </label>
        <label>
          LinkedIn
          <input
            name="linkedIn-input"
            type="url"
            onChange={(e) =>
              saveHeading({ ...heading, linkedin: e.target.value })
            }
            value={heading.linkedin}
          ></input>
        </label>
      </form>
    </>
  );
}

export default ResumeHeading;
