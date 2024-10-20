import { Fragment } from "react/jsx-runtime"
import SkillsImage from "./SkillsImage"

const skillsTitle: string[] = ['익숙해요', '어느 정도 사용할 수 있어요', '해본 적 있어요']

export default function SkillsTitle() {
  return (
    <div className="skills-title-container">
        {skillsTitle.map((skillTitle, index) => (
            <Fragment>
                <h5 
                  key={index}
                  className="skill-title-text"
                >
                  {skillTitle}
                </h5>
                <SkillsImage index={index}/>
            </Fragment>
        ))}
    </div>
  )
}
