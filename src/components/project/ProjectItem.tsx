import Card from 'react-bootstrap/Card';
import Technologies from './Technologies';
import { Project } from './Project';

interface ProjectItemProps {
    filteredProject: Project;
}

export default function ProjectItem({filteredProject}: ProjectItemProps) {
  return (
    <div className="project-item-container">
            <div className="project-card-head">
                {filteredProject.isImportant ? 
                    <img 
                    src='star.png' 
                    alt='star'
                    className="star"
                    /> 
                    : ""
                }
                <h3>{filteredProject.title}</h3>
            </div>
            <div className="project-card-info">
                <p>{filteredProject.date}</p>
                <p>({filteredProject.member}명)</p>
            </div>
                <p className="project-description">
                    {filteredProject.description}
                </p>
                <ul className="project-information">
                    {filteredProject.information.map((information, index) => (
                        <li key={index}>{information}</li>
                    ))}
                </ul>
            <div className="technologies-container">
                {filteredProject.technologies.map((technology, index) => (
                    <Technologies 
                        key={index}
                        technology={technology}
                    />
            ))}
            </div>
            <Card.Link 
                href={filteredProject.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                보러가기
            </Card.Link>
            <div className="highlight"></div>
    </div>
  )
}
