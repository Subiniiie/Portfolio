import SkillsTitle from './SkillsTitle'
import '../../styles/components/skills/skills.css'

export default function Skills() {
  return (
    <div className="skills-container">
      <h1 className="skills-title-text">SKILLS</h1>
        <SkillsTitle />
      <div id="project" style={{ marginBottom: "60px" }} />
    </div>
  )
}
