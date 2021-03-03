import React from 'react'
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    return (


        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <div className="container-fluid">
                    <div ><a href="http://techvedika.com/" target="_blank" className="navbar-brand">Tech Vedika</a></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" exact to="/Home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                            </li>

                        </ul>
                    </div>
                    <Link className="btn btn-outline-warning text-white" to="/users/add">Add Developer</Link>
                </div>

            </div>
        </nav>

    )
}

export default Navbar;
