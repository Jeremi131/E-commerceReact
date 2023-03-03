import React from 'react'
import './styles/footer.css'
import marca from '../../../public/images/marca.png'

const Footer = () => {
    return (
        <footer className='footer_app'>
            <div className='social'>
                <a href="https://www.facebook.com/Jeremi.Castellano131" target='blank'>
                    <i className='bx icon_social bxl-facebook'></i>
                </a>
                <a href="https://www.linkedin.com/in/jeremi-castellano-5b924a1a3/" target='blank'>
                    <i className='bx icon_social bxl-linkedin'></i>
                </a>
                <a href="https://www.instagram.com/jeremi_castellano/" target='blank'>
                    <i className='bx icon_social bxl-instagram'></i>
                </a>
            </div>

            <div className='credits'>
                <p className='text'>MADE BY </p>
                <img className='marca' src={marca} alt="" />
                <p className='text'> ALL RIGHTS RESERVED</p>
            </div>
        </footer >
    )
}

export default Footer