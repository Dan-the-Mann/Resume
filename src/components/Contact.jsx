import image from '../helpers/imgHelper';
import { getSection, stripHttp } from '../helpers/resume';

const Contact = () => {
    const data = getSection('Contact');

    return (
        <div className='contacts'>
            <div className='row'><img src={image.email} height={25} style={{ marginRight: '0.75em' }} alt=''></img>{data['email']}</div>
            <div className='row'><img src={image.phone} height={25} style={{ marginRight: '0.75em' }} alt=''></img>{data['phone']}</div>
            <div className='row'><img src={image.location} height={25} style={{ marginRight: '0.75em' }} alt=''></img>{data['location']}</div>
            <div className='row'><img src={image.linkedIn} height={25} style={{ marginRight: '0.75em' }} alt=''></img>
                <a href={data['linkedIn']} target='_blank' rel='noreferrer'>{stripHttp(data['linkedIn'])}</a>
            </div>
            <div className='row'><img src={image.github} height={25} style={{ marginRight: '0.75em' }} alt=''></img>
                <a href={data['github']} target='_blank' rel='noreferrer'>{stripHttp(data['github'])}</a>
            </div>
        </div>
    )
}

export default Contact;