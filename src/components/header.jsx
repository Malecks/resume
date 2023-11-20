import avatar from '../avatar.jpg'

const Header = () => {
    return(
        <header className="app-header">
            <div>
                <h3>Alex Mathers (@malecks)</h3>
                <div className='contact'>
                    <a href="mailto:alex@alexmathers.com">alex@alexmathers.com</a>
                    <a href="https://github.com/malecks">GitHub</a>
                    <a href="https://linkedin.com/in/malecks">LinkedIn</a>
                </div>
            </div>
            <img src={avatar} alt="Avatar"/>
        </header>
    )
}

export default Header