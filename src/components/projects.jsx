import { Link } from "react-router-dom"

const Projects = () => {
    return (
        <ul className="projects-list">
            <ProjectItem name="Service Booking" url="league-service-booking" desc="League"/>
            <ProjectItem name="Palette Cam" url="palette-cam" desc="iOS App"/>
            <ProjectItem name="Analytics Dashboard" url="nudge-analytics-dashboard" desc="Nudge"/>
            <ProjectItem name="Design Library" url="nudge-design-library" desc="Nudge"/>
        </ul>
    )
}

const ProjectItem = ({name, url, desc}) => {
    return (
        <li className="project-item">
            <Link to={url}>
                <img src="" />
                <div>
                    <h4>
                        {name}
                    </h4>
                    <div>
                        {desc}
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default Projects