import { educations } from "./Education"
import EducationItem from "./EducationItem"

export default function EducationItems() {
  return (
    <ul>
        {educations.map((education, index) => (
            <li key={index}>
                <EducationItem 
                  education={education}
                />
            </li>
        ))}
    </ul>
  )
}
