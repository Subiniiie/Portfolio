import { Education } from "./Education"

interface EducationItemProps {
  education: Education
}

export default function EducationItem({education}: EducationItemProps) {
  return (
    <div className="education-content-container">
      <span>({education.date}) </span>
      <span>{education.title}</span>
    </div>
  )
}
