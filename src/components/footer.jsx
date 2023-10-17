function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <h4>
                malecks.com
            </h4>
            <div>
                &copy; {currentYear} Alex Mathers
            </div>
        </footer>
    )
}

export default Footer