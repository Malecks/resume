import { Link } from "react-router-dom"

import ServiceThumbnail from '../projects/service-booking/ServiceBookingCover.png'
import PaletteThumbnail from '../projects/palette-cam/PaletteCam.png'
import AnalyticsThumbnail from '../projects/nudge-analytics-dashboard/Analytics01.png'
import DesignSystemThumbnail from '../projects/nudge-design-system/DesignLibrary08.png'

const Projects = () => {
    return (
        <ul className="projects-list">
            <ProjectItem name="Service Booking" url="league-service-booking" desc="League" img={ServiceThumbnail}/>
            <ProjectItem name="Palette Cam" url="palette-cam" desc="iOS App" img={PaletteThumbnail}/>
            <ProjectItem name="Analytics Dashboard" url="nudge-analytics-dashboard" desc="Nudge" img={AnalyticsThumbnail}/>
            <ProjectItem name="Design System" url="nudge-design-system" desc="Nudge" img={DesignSystemThumbnail}/>
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