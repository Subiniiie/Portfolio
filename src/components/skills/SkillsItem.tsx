import { useState } from 'react'
import SkillsItemBack from './SkillsItemBack';

interface SkillLogoProps {
    skillLogo: string
}

export default function SkillsItem({ skillLogo }: SkillLogoProps) {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  }

  const handleMouseOut = () => {
    setIsHovering(false);
  }

  const imageFront = 
    <img 
      src={`/skills/${skillLogo}.png`} 
      alt={skillLogo}
      className="skill-logo-image"
    />
  
  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className={`skill-logo ${isHovering ? "skill-item-back" : "skill-item-front"}`}
      style={{
        cursor: "pointer"
    }}
    >
      {isHovering ? <SkillsItemBack skillLogo={skillLogo} /> : imageFront}
    </div>
  )
}
