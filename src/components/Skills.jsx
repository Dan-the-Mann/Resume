import Header from "./Header";

const Skills = () => {
    const skillset = [
        'JavaScript (ES6)', 'Express.js', 'MySQL', 'HTML5', 'Bootstrap',
        'React', 'Next.js', 'MongoDB', 'CSS', 'WordPress',
        'Node.js', 'Redux', 'Firebase', 'UI Design', 'Agile Methodologies',
        'Python', 'Django', 'PostgreSQL'
    ];

    return (
        <div className='skills'>
            <Header src="skills" title="SKILLS" />

            {skillset.map((data, index) => (
                <p key={index} style={{ width: '20%' }}>{data}</p>
            ))}
        </div>
    )
}

export default Skills;