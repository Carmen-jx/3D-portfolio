
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Interested in getting to know me better?
            <br className='sm:block hidden'/>
        </p>
        <Link to="/contact" className='btn'>
            Contact Me
        </Link>
    </section>
  )
}

export default CTA