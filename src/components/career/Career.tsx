import Education from "./Education.tsx"
import Activity from "./Activity.tsx"
import "../../styles/components/career/Career.css"

export default function Career() {
  return (
    <div className="career-container">
        <Education />
        <Activity />
    </div>
  )
}
