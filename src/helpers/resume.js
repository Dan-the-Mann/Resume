import data from '../data/resume.json';

/* 
 Gets the appropriate section from json.
 This doesn't seem to have much advantage over just importing json into each component and using data[name],
 but it feels cleaner.
 */
export const getSection = (name) => data[name];

// Turns "**bold**" markers in resume.json strings into <b> elements.
export const formatBold = (text) => {
    return text.split('**').map((part, idx) => {
        return idx % 2 === 1 ? <b key={idx}>{part}</b> : part
    })
}

/*  
  Not Implemented.
  Potential list of key words/phrases hidden a layer behind the resume to attempt to get past ATS and have a real person see the resume.
  Slightly unethical, so it isn't included. I can confirm the keywords are picked up by ATS, though.
 */
export const ATSKeywords = () => {
    const keys = [];

    return (
        <div className='ats'>
            {keys.map((data, index) => (
                <div key={index} style={{ marginRight: '0.5em' }}>{data}</div>
            ))}
        </div>
    )
}