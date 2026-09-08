import image from '../helpers/imgHelper';

const Header = ({ src, title }) => {
    return (
        <div className='header'>
            {(src && image[src]) ? <img src={image[src]} alt='' height={25} style={{ marginRight: '0.5em' }}></img> : ""}
            <h3 style={{ width: '100%', marginTop: '0', marginBottom: '0', color: '#373a41' }}>{title}</h3>
        </div>
    )
}

export default Header;