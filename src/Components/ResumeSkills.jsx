import { useState } from "react";

function ResumeSkills({ skills, saveSkills }) {
  function updateSkill(newVal, newAttribute, key) {
    saveSkills(
      skills.map((skill) => {
        if (skill.key === key) {
          return { ...skill, [newAttribute]: newVal };
        } else {
          return skill;
        }
      })
    );
  }

  return (
    <>
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((skill) => {
          return (
            <div className="category-skills" key={skill.key}>
              <label>
                Category
                <input
                  type="text"
                  name="skill-category"
                  onChange={(e) => {
                    updateSkill(e.target.value, "skillCategory", skill.key);
                  }}
                  value={skill.skillCategory}
                />
              </label>
              <label>
                Skills
                <input
                  type="text"
                  name="category-skill-list"
                  onChange={(e) => {
                    updateSkill(e.target.value, "categorySkills", skill.key);
                  }}
                  value={skill.categorySkills}
                />
              </label>
            </div>
          );
        })}
        <button
          onClick={() => {
            saveSkills([...skills, { key: crypto.randomUUID() }]);
          }}
        >
          Add Skill Category
        </button>
      </div>
    </>
  );
}

export default ResumeSkills;
