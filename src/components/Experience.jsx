import Header from "./Header";
import { getSection, formatBold } from "../helpers/resume";

const Experience = () => {
    const jobs = getSection('Experience');

    return (
        <>
            <Header src="work" title="EXPERIENCE" />

            <div style={{ display: 'flex' }}>
                <div>
                    {jobs.map((job, index) => (
                        <div key={index} style={{ marginLeft: 'calc(25px / 2 - 4px)' }}>
                            {index > 0 ? <div className='new-listing'></div> : ''}
                            <div style={{ display: 'flex', alignItems: 'center' }}><div className='circle'></div><h4 className='job'>{job.title}</h4></div>

                            <div style={{ display: 'flex' }}>
                                <div style={{ borderLeft: '2px solid #373a41', width: '0px', marginLeft: '3px', marginRight: '5px' }}></div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <h4 className='company'>{job.company}</h4>
                                    <small className='date'>{job.dates}</small>

                                    {job.bullets.map((bullet, i) => (
                                        <div key={i} className='bullet-row'>
                                            <div className='bullet-box'><div className='bullet'></div></div>
                                            <small>{formatBold(bullet)}</small>
                                        </div>
                                    ))}

                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Experience;