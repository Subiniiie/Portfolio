import { useState } from 'react'; 
import ProjectItemModal from './ProjectItemModal';
import { Project } from './Project';

interface ProjectItemProps {
    filteredProject: Project;
}


export default function ProjectItem({filteredProject}: ProjectItemProps) {
    const [openProjectModal, setOpenProjectModal] = useState<boolean>(false);

    const handleOpenModal = () => {
        setOpenProjectModal(true)
    }
    const handleCloseModal = (e: React.MouseEvent) => {
        e.stopPropagation()
        setOpenProjectModal(false)
    }

  return (
    <div 
        className="project-item-container"
        onClick={handleOpenModal}
    >
        <div className="project-cover-container">
            <img 
                src={filteredProject.cover}
                alt={filteredProject.title}
                className="project-cover-image"
            />
        </div>
            <div className="project-card-head">
                {filteredProject.isImportant ? 
                    <img 
                    src='star.png' 
                    alt='star'
                    className="star"
                    /> 
                    : ""
                }
                <h3 className="project-card-title">{filteredProject.title}</h3>
            </div>
            {openProjectModal ? (
                <>
                    <ProjectItemModal filteredProject={filteredProject}/> 
                    <div 
                        className="black-container" 
                        onClick={handleCloseModal}
                    />
                </>
            
            ): ''}
    </div>
  )
}