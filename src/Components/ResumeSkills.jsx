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
      {skills.map((skill) => {
        return (
          <div key={skill.key}>
            <label>
              Category
              <input
                type="text"
                name="skill-category"
                onChange={(e) => {
                  updateSkill(e.target.value, "skillCategory", skill.key);
                }}
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
    </>
  );
}

export default ResumeSkills;
