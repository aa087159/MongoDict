import React from 'react'
import Logo from './logo.png'


const Nav = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo"><img className="nav-logo" src={Logo} alt="logo"/><span className="nav-logo-txt">Dictionary</span></a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
                    <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav