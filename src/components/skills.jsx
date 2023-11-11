const Skills = () => {
    return (
        <div className="skills">
            <h4>Things I'm good at</h4>
            <SkillsGroup skills={["UI / UX", "Mobile design", "Prototyping", "Design systems", "User research", "Project management", "Figma", "Origami studio", "Sketch", "Adobe"]} />
            <SkillsGroup skills={["iOS Development", "Web development", "React", "HTML", "CSS", "Swift", "Swift UI", "Objective C", "UI Kit", "Git", "GitHub"]} />
        </div>
    )
   }

const SkillsGroup = (props) => {
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