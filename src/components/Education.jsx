import Header from "./Header";

const Education = () => {
    const bullets = [
        <small>Project based learning through coursework with a strong emphasis on <b>leadership</b> and <b>teamwork</b> in a group setting</small>,
        <small>Relevant coursework: Information systems design, Object-Oriented Programming, Data Structures and Algorithms,
            Software Development, Computer Science, Database Management Systems, CI/CD, Git, Responsive Web Design</small>
    ];

    return (
        <>
            <Header src="school" title="EDUCATION" />

            <div style={{ display: 'flex', marginLeft: 'calc(30px / 2 - 4px)' }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center' }}><div className='circle'></div><h4 className='job'>University of Alabama at Birmingham</h4></div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ borderLeft: '2px solid #373a41', width: '0px', marginLeft: '3px', marginRight: '5px' }}></div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <h4 className='company'>Bachelor of Science in Information Systems</h4>

                            {bullets.map((bullet, index) => (
                                <div key={index} className='bullet-row'>
                                    <div className='bullet-box'><div className='bullet'></div></div>
                                    {bullet}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Education;