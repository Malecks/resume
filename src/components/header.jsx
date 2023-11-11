import avatar from '../avatar.jpg'

const Header = () => {
    return(
        <header className="app-header">
            <div>
                <h3>Alex Mathers (@malecks)</h3>
                <h4><a href="mailto:alex@alexmathers.com">alex@alexmathers.com</a> | <a href="https://github.com/malecks">GitHub</a> | <a href="https://linkedin.com/in/malecks">LinkedIn</a></h4>
            </div>
            <img src={avatar} alt="Avatar"/>
        </header>
    )
}

export default Header