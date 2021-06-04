import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Assets/jiologo.svg"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/">
                        <img src={logo} alt="logo" className="img-fluid logo" />
                    </Link>
                    <p className="text-light dev-text">Developers</p>
                    <Link to="/" style={{textDecoration:'none'}}>
                        <a style={{textDecoration:'none'}} className="signup">Sign up</a>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
