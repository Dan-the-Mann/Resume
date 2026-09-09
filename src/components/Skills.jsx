import Header from "./Header";
import { getSection } from "../helpers/resume";

const Skills = () => {
    const skillset = getSection('Skills');

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