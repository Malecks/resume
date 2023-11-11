import { Link } from "react-router-dom"

const Projects = () => {
    return (
        <ul className="projects-list">
            <li className="project-item"><Link to={"palette-cam"}>Palette Cam</Link></li>
        </ul>
    )
}

export default Projects