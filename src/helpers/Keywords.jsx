/*  
  Not Implemented.
  Potential list of key words/phrases hidden behind the resume to attempt to get past ATS and have a real person see the resume.
  Slightly unethical, so it isn't be included. I can confirm the keywords are picked up by ATS, though.
 */
const ATSKeywords = () => {
    const keys = [];

    return (
        <div className='ats'>
            {keys.map((data, index) => (
                <div key={index} style={{ marginRight: '0.5em' }}>{data}</div>
            ))}
        </div>
    )
}

export default ATSKeywords;