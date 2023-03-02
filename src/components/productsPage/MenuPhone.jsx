import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/menuPhone.css'

const MenuPhone = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => setOpenMenu(true)

    const handleCloseMenu = () => setOpenMenu(false)

    return (
        <div className='menuPhone'>
            <i onClick={handleOpenMenu} className='bx icon_menu bx-menu'></i>
            <div className={`modal_menu ${openMenu && 'modal_menu-visible'}`}>
                <i onClick={handleCloseMenu} className='bx menu_close bx-x'></i>
                <ul className='menu_phone'>
                    <li><Link className='text_menu' to='/purchases'>Purchases</Link></li>
                    <li><Link className='text_menu' to='/cart'>Cart</Link></li>
                    <li><Link className='text_menu' to='/user/login'>Login</Link></li>
                </ul>
            </div>

        </div>
    )
}

export default MenuPhone