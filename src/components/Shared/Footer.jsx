import React from 'react'
import './styles/footer.css'
import marca from '../../../public/images/marca.png'

const Footer = () => {
    return (
        <footer className='footer_app'>
            <div className='social'>
                <i className='bx icon_social bxl-facebook'></i>
                <i className='bx icon_social bxl-linkedin'></i>
                <i class='bx icon_social bxl-instagram'></i>
            </div>

            <div className='credits'>
                <p className='text'>MADE BY </p>
                <img className='marca' src={marca} alt="" />
                <p className='text'> ALL RIGHTS RESERVED</p>
            </div>
        </footer>
    )
}

export default Footer