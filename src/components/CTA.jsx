
import { Link } from 'react-router-dom'
import { socialLinks } from '../constants'

const CTA = () => {
  return (
    <>
    <section className='cta'>
        <p className='cta-text'>Interested in getting to know me better?
            <br className='sm:block hidden'/>
        </p>
        <Link to="/contact" className='btn'>
            Contact Me
        </Link>
       
    </section>
    <footer>
        <div>
            {socialLinks.map((socialLink, index) => (
                <a key={index} href={socialLink.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginRight: '10px' }}>
                    <img src={socialLink.iconUrl} alt={socialLink.name} style={{ width: '30px', height: '30px' }} />
                </a>
            ))}
        </div>
        </footer>
    </>
    
  )
}

export default CTA