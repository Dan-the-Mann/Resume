import image from '../helpers/imgHelper';

const Contact = () => {
    return (
        <div className='contacts'>
            <div className='row'><img src={image.email} height={25} style={{ marginRight: '0.75em' }} alt=''></img>damann1072@gmail.com</div>
            <div className='row'><img src={image.phone} height={25} style={{ marginRight: '0.75em' }} alt=''></img>(205) 936-3366</div>
            <div className='row'><img src={image.location} height={25} style={{ marginRight: '0.75em' }} alt=''></img>Tuscaloosa, AL</div>
            <div className='row'><img src={image.linkedIn} height={25} style={{ marginRight: '0.75em' }} alt=''></img>
                <a href='https://www.linkedin.com/in/mann-dan' target='_blank' rel='noreferrer'>linkedin.com/in/mann-dan</a>
            </div>
            <div className='row'><img src={image.github} height={25} style={{ marginRight: '0.75em' }} alt=''></img>
                <a href='https://github.com/Dan-the-Mann' target='_blank' rel='noreferrer'>github.com/Dan-the-Mann</a>
            </div>
            <div className='row'><img src={image.site} height={25} style={{ marginRight: '0.75em' }} alt=''></img>
                <a href='https://dmann.netlify.app' target='_blank' rel='noreferrer'>dmann.netlify.app</a>
            </div>
        </div>
    )
}

export default Contact;