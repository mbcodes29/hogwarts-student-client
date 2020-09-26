import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

export default class NavBar extends React.Component {
    render() {
        return (
            <nav className="nav-navbar">
            <ul className="navbar">
                <li className="nav-links"><Link className="navbarlink" to="/">Home</Link></li>
                <li className="nav-links"><Link className="navbarlink" to="/create-student">Create</Link></li>
                <li className="nav-links"><Link className="navbarlink" to="/my-students">My Students</Link></li>
                {/* <li className="nav-links"><Link to="/login">Login</Link></li>
                <li className="nav-links"><Link to="/signup">Sign Up</Link></li> */}
            </ul>
            </nav>
        )
    }
}