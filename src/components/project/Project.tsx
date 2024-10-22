import { useState } from 'react'
import ProjectItems from './ProjectItems'
import '../../styles/components/project/Project.css'

export default function Project() {
    const [ischecked, setIsChecked] = useState<boolean>(true);
    const handleCheckBtn = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setIsChecked(e.target.checked)
    }
    return (
        <div className="project-container">
            <h1 className="project-title-text">PROJECT</h1>
            <div className="project-radio-box-container">
                <p className="project-radio-box-text">주요 프로젝트만 모아보기</p>
                <input 
                    type='checkbox'
                    onChange={handleCheckBtn}
                    className="project-radio-box-input"
                    defaultChecked={true}
                />
            </div>
            <ProjectItems isChecked={ischecked} />
            
        </div>
    )
}
