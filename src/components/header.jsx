// import avatar from '../avatar.jpg'

import Avatar from "./avatar"
import avatar01 from "../avatar.jpg"
import avatar02 from "../avatar02.jpg"
import avatar03 from "../avatar03.jpg"
import avatar04 from "../avatar04.jpg"

const Header = () => {
    const defaultImage = avatar01
    const hoverImages = [
        avatar02,
        avatar03,
        avatar04
    ]

    return(
        <header className="app-header">
            <div>
                <h3>Alex Mathers</h3>
                <div className='contact'>
                    <a href="mailto:alex@alexmathers.com">Email</a>
                    <a href="https://github.com/malecks">GitHub</a>
                    <a href="https://linkedin.com/in/malecks">LinkedIn</a>
                </div>
            </div>
            <Avatar defaultImage={defaultImage} hoverImages={hoverImages} />
        </header>
    )
}

export default Header