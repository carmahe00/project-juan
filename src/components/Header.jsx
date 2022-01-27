import React from 'react'
import { BiSearchAlt2 } from "react-icons/bi";
import sc from './Header.module.scss'
import menuImage from '../assets/logo.svg';

const Header = () => {
    return (
        <nav className={sc.wrapper} >
            <div className={sc.wrapper__logo} >
                <img src={menuImage} alt="subaru-logo" />
            </div>
            
            <nav className={sc.wrapper__list} >
                <ul>
                    <li>
                        <a href="/">Producto</a>
                    </li>
                    <li>
                        <a href="/">Tecnologias</a>
                    </li>
                    <li>
                        <a href="/">Legado</a>
                    </li>
                    <li>
                        <a href="/">Sport</a>
                    </li>
                    <li>
                        <a href="/">Corporativo</a>
                    </li>
                </ul>
            </nav>
            <BiSearchAlt2 className={sc.wrapper__search__icon} />
            <div className={sc.header__content_toggle}></div>
        </nav>
    )
}

export default Header
