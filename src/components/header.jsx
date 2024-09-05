// import avatar from '../avatar.jpg'

import Avatar from "./avatar"
import avatar01 from "../avatar01.jpg"
import avatar02 from "../avatar02.jpg"
import avatar03 from "../avatar03.jpg"
import avatar04 from "../avatar04.jpg"
import avatar05 from "../avatar05.jpg"
import avatar06 from "../avatar06.jpg"
import avatar07 from "../avatar07.jpg"
import avatar08 from "../avatar08.jpg"
import avatar09 from "../avatar09.jpg"
import avatar10 from "../avatar10.jpg"
import avatar11 from "../avatar11.jpg"

const Header = () => {
    const defaultImage = avatar01
    const hoverImages = [
        avatar02,
        avatar03,
        avatar04,
        avatar05,
        avatar06,
        avatar07,
        avatar08,
        avatar09,
        avatar10,
        avatar11
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