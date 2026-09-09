import Header from "./Header";
import { getSection, formatBold } from "../helpers/resume";

const Education = () => {
    const schools = getSection('Education');

    return (
        <>
            <Header src="school" title="EDUCATION" />

            {schools.map((school, index) => (
                <div key={index} style={{ display: 'flex', marginLeft: 'calc(30px / 2 - 4px)' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center' }}><div className='circle'></div><h4 className='job'>{school.school}</h4></div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ borderLeft: '2px solid #373a41', width: '0px', marginLeft: '3px', marginRight: '5px' }}></div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <h4 className='company'>{school.degree}</h4>

                                {school.bullets.map((bullet, i) => (
                                    <div key={i} className='bullet-row'>
                                        <div className='bullet-box'><div className='bullet'></div></div>
                                        <small>{formatBold(bullet)}</small>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            ))}
        </>
    )
}

export default Education;