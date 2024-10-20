import { Fragment } from "react/jsx-runtime";
import SkillsItem from "./SkillsItem";

interface SkillsImagesProps {
    index: number;
}

const skillsImage: string[][] = [
                                    ['JavaScript', 'Python', 'React', 'HTML', 'CSS', 'Bootstrap'],
                                    ['TypeScript', 'ReactNative'],
                                    ['Vue', 'Django']
                                ]

export default function SkillsImages({ index }: SkillsImagesProps) {
  return (
    <div className="Skills-Images-container">
      {skillsImage[index].map((skillLogo, skillsLogoIndex) => (
        <Fragment>
          <SkillsItem key={skillsLogoIndex} skillLogo={skillLogo} />
        </Fragment>
      ))}
    </div>
  )
}
