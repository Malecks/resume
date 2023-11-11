import { Link } from "react-router-dom"

const Projects = () => {
    return (
        <div className="projects-list">
            <ul>
                <li><Link to={"palette-cam"}>Palette Cam</Link></li>
            </ul>
        </div>
    )
}

export default Projects