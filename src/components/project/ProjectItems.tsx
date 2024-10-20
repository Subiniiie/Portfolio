import { Fragment } from 'react/jsx-runtime';
import { projects } from './Project'
import ProjectItem from "./ProjectItem"

interface ProjectItemsProps {
    isChecked: boolean;
}

export default function ProjectItems({isChecked}: ProjectItemsProps) {
    const filteredProjects = isChecked
        ? projects.filter(project => project.isImportant)
        : projects;

    return (
        <Fragment>
            {filteredProjects.map((filteredProject, index) => (
                <ProjectItem 
                    key={index}
                    filteredProject={filteredProject} 
                />
            ))}
        </Fragment>
    )
}
