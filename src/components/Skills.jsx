import SkillCard from "./SkillCard";
import "../styles/Skills.css";

function Skills({ skills }) {
  return (
    <section id="skills" className="skills">
      <h2 className="skills__heading">Skills</h2>
      <div className="skills__grid">
        {skills.map((skill) => (
          <SkillCard key={skill.id} category={skill.category} items={skill.items} />
        ))}
      </div>
    </section>
  );
}

export default Skills;