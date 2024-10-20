import ProjectItems from './ProjectItems'
import '../../styles/components/project/Project.css'

export default function Project() {
  return (
    <div className="project-container">
        <h1 className="project-title-text">PROJECT</h1>
        <div className="project-radio-box-container">
            <p className="project-radio-box-text">주요 프로젝트만 모아보기</p>
            <input 
                type='radio'
                className="project-radio-box-input"
            />
        </div>
        <ProjectItems />
    </div>
  )
}
