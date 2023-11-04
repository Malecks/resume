import avatar from '../avatar.jpg'

const Header = () => {
    return(
        <header className="app-header">
            <div>
                <h3>malecks.com</h3>
                <h4>Vancovuer &lt;-&gt; Toronto, CAN.</h4>
            </div>
            <img src={avatar} alt="Avatar"/>
        </header>
    )
}

export default Header