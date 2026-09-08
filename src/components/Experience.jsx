import Header from "./Header";

const Experience = () => {
    const titles = ['Web Developer', 'Web Developer (Contract)', 'Web Developer (Contract)', 'Full Stack Web Developer'];
    const companies = ['The Westervelt Company', 'Relay', 'Innov8tive Strategies, LLC', 'Innovate Birmingham'];
    const dates = ['01/2024 - Present', '06/2023 - 01/2024', '07/2022 - 06/2023', '12/2021 - 05/2022'];
    const bullets = [
        [
            <small>BULLETS</small>
        ],
        [
            <small>
                Enhancing data monitoring efficiency by integrating the <b>Front-End</b> website with the <b>Back-End</b> CRM system, and
                administering seamless data synchronization, resulting in a marked increase in data tracking and accuracy
            </small>,
            <small>Increasing <b>WordPress</b> site indexability by a significant margin through plugins such as <b>YoastSEO</b></small>,
            <small>
                Designing and implementing a webscraping software tool using <b>Node.js</b>, <b>Express</b>, and <b>Cheerio</b> to effectively
                scrape and give reports on site structure and ensure all <b>SEO</b> best practices are met
            </small>,
            <small>Elevating <b>UX/UI</b> attractiveness and performance through utilizing <b>jQuery</b> and unique <b>CSS</b> stylings</small>
        ],
        [
            <small>Collaborated with the CEO to improve company website <b>UI/UX design</b>, performance, and reliability</small>,
            <small>Designed and implemented an <b>API</b> using <b>RESTful</b> services to enable real-time integration of a live Instagram feed</small>,
            <small>Improved website traffic through identifying and applying <b>SEO</b> best practices</small>,
            <small>Consulted with non-profit clients to grow their own web presence and, through that, their impact in the community</small>
        ],
        [
            <small><b>Web development</b> boot camp to improve my <b>JavaScript</b> proficiency and challenge my <b>coding</b> ability</small>,
            <small>Actively developed <b>Front-End</b> applications using <b>React</b> with features such as <b>React Hooks</b> and <b>React Router</b></small>,
            <small>
                Built <b>API</b> and <b>Back-End</b> architecture with <b>Node.js</b> and <b>Express</b>,
                as well as designed a relational database with <b>MySQL</b> to handle robust data sets
            </small>
        ]
    ];

    return (
        <>
            <Header src="work" title="EXPERIENCE" />

            <div style={{ display: 'flex' }}>
                <div>
                    {titles.map((title, index) => (
                        <div key={index} style={{ marginLeft: 'calc(25px / 2 - 4px)' }}>
                            {index > 0 ? <div className='new-listing'></div> : ''}
                            <div style={{ display: 'flex', alignItems: 'center' }}><div className='circle'></div><h4 className='job'>{title}</h4></div>

                            <div style={{ display: 'flex' }}>
                                <div style={{ borderLeft: '2px solid #373a41', width: '0px', marginLeft: '3px', marginRight: '5px' }}></div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <h4 className='company'>{companies[index]}</h4>
                                    <small className='date'>{dates[index]}</small>

                                    {bullets[index].map((bullet, i) => (
                                        <div key={i} className='bullet-row'>
                                            <div className='bullet-box'><div className='bullet'></div></div>
                                            {bullet}
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