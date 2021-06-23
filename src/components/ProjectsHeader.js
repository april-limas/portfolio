import '../styles/projects-header.css'
import { ProjectsBody } from './ProjectsBody'
import { ProjectsClouds } from './ProjectsClouds'

export const ProjectsHeader = () => {

    return (
        <div className="projects-wrapper">  
            <h2 id="page-text">My Projects</h2>
            <ProjectsBody />
            <ProjectsClouds />
        </div>
    )
}