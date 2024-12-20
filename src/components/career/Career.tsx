import Education from "./Education.tsx"
import Activity from "./Activity.tsx"
import "../../styles/components/career/Career.css"

export default function Career() {
  return (
    <>
      <div className="career-container">
      <h1 className="career-title-text">Career</h1>
          <Education />
          <Activity />
      </div>
      <div id="skills" style={{ height: "45px", backgroundColor: "#FFD35A"}}/>
    </>
  )
}
