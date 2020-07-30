import React from 'react'
import './menu.css'
import Logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import Button from '../Button'

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} alt="NechioFlix Logo" className="Logo"></img>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo!
            </Button>
        </nav>
    )
}

export default Menu 