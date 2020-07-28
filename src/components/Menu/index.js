import React from 'react'
import './menu.css'
import Logo from '../../assets/img/logo.png'
import ButtonLink from '../ButtonLink'

function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
                <img src={Logo} alt="NechioFlix Logo" className="Logo"></img>
            </a>
            <ButtonLink className="ButtonLink" href="/">
                Novo vídeo!
            </ButtonLink>
        </nav>
    )
}

export default Menu 