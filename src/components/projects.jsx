import { Link } from "react-router-dom"

import ShopifyInboxThumbnail from '../projects/thumbnails/shopifyInbox.png'
import ServiceThumbnail from '../projects/thumbnails/service.png'
import PaletteThumbnail from '../projects/thumbnails/palette.png'
import CounterThumbnail from '../projects/thumbnails/origamiCounter.png'
import AnalyticsThumbnail from '../projects/thumbnails/dahsboard.png'
import DesignSystemThumbnail from '../projects/thumbnails/design.png'
import BFCMThumbnail from '../projects/thumbnails/bfcm.png'
import NavIAThumbnail from '../projects/thumbnails/navIA.png'


const Projects = () => {
    return (
        <ul className="projects-list">
            <ProjectItem name="BFCM '23" url="shopify-bfcm" desc="Shopify" img={BFCMThumbnail} />
            <ProjectItem name="Inbox Onboarding" url="shopify-inbox-onboarding" desc="Shopify" img={ShopifyInboxThumbnail}/>
            <ProjectItem name="Palette Cam" url="palette-cam" desc="iOS App" img={PaletteThumbnail}/>
            <ProjectItem name="Origami Counter" url="origami-counter" desc="Animation prototype" img={CounterThumbnail}/>
            <ProjectItem name="Service Booking" url="league-service-booking" desc="League" img={ServiceThumbnail}/>
            <ProjectItem name="Analytics Dashboard" url="nudge-analytics-dashboard" desc="Nudge" img={AnalyticsThumbnail}/>
            <ProjectItem name="Design System" url="nudge-design-system" desc="Nudge" img={DesignSystemThumbnail}/>
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