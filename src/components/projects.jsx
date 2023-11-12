import { Link } from "react-router-dom"

import ServiceThumbnail from '../projects/thumbnails/service.png'
import PaletteThumbnail from '../projects/thumbnails/palette.png'
import AnalyticsThumbnail from '../projects/thumbnails/dahsboard.png'
import DesignSystemThumbnail from '../projects/thumbnails/design.png'
import BFCMThumbnail from '../projects/thumbnails/bfcm.png'
import NavIAThumbnail from '../projects/thumbnails/navIA.png'


const Projects = () => {
    return (
        <ul className="projects-list">
            <ProjectItem name="Service Booking" url="league-service-booking" desc="League" img={ServiceThumbnail}/>
            <ProjectItem name="Palette Cam" url="palette-cam" desc="iOS App" img={PaletteThumbnail}/>
            <ProjectItem name="Analytics Dashboard" url="nudge-analytics-dashboard" desc="Nudge" img={AnalyticsThumbnail}/>
            <ProjectItem name="Design System" url="nudge-design-system" desc="Nudge" img={DesignSystemThumbnail}/>
            <ProjectItem name="Black Friday / Cyber Monday" url="" desc="Shopify (ask for details)" img={BFCMThumbnail} />
            <ProjectItem name="Nav and IA revamp" url="" desc="Shopify (ask for details)" img={NavIAThumbnail} />
        </ul>
    )
}

const ProjectItem = ({name, url, desc, img}) => {
    return (
        <Link to={url} className="project-item">
            <li>
                <img className="project-thumbnail" src={img} />
                <div className="project-info">
                    <h4>
                        {name}
                    </h4>
                    <div>
                        {desc}
                    </div>
                </div>
            </li>
        </Link>
    )
}

export default Projects