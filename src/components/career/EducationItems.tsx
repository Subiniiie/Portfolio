import { educations } from "./Education"
import EducationItem from "./EducationItem"

export default function EducationItems() {
  return (
    <ul>
        {educations.map((education, index) => (
            <li>
                <EducationItem 
                    key={index}
                    education={education}
                />
            </li>
        ))}
    </ul>
  )
}
