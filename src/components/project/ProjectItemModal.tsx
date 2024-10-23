import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Technologies from './Technologies';
import { Project } from './Project';

interface ProjectItemProps {
    filteredProject: Project;
}

export default function ProjectItemModal({filteredProject}: ProjectItemProps) {
  return (
  <div
    className="modal show"
    style={{ display: 'block', position: 'initial' }}
  >
    <Modal.Dialog className="project-modal-container">
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
 </div>
   /* <div className="profect-modal-container">
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
</div> */
  )
}
