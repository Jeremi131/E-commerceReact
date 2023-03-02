import React from 'react'
import { Link } from 'react-router-dom'
import MenuPhone from '../productsPage/MenuPhone'
import './styles/header.css'

const Header = () => {
    return (
        <div className='header_app'>
            <header className='header'>
                <h1>
                    <Link className='title_pag' to='/'>e-commerce</Link>
                </h1>
                <div className='menu_container'>
                    <MenuPhone />
                </div>


                <nav className='navbar'>
                    <ul className='navbar_info'>
                        <li><i className='bx icon_nav bx-archive'></i><Link className='text_nav' to='/purchases'>Purchases</Link></li>
                        <li><i className='bx icon_nav bx-cart'></i><Link className='text_nav' to='/cart'>Cart</Link></li>
                        <li><i className='bx icon_nav bx-user'></i><Link className='text_nav' to='/user/login'>Login</Link></li>
                    </ul>
                </nav>
            </header>
        </div>

    )
}

export default Header