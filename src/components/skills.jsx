const Skills = (props) => {
    const {skills} = props
    return (
        <div className="skills-group">
            {skills.map((skill, index) => (
                <div key={index} className="skill">
                    {skill}
                </div>
            ))}
        </div>
    )
}

export default Skills