import { Link } from "react-router-dom"
import React from "react"

export default function Navbar() {
    return (
        <div className="nav-logo">
            <Link to="/">
                <h1>Introvert Empowerment</h1>
            </Link>
            <ul className="navbar-routes">
            <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    )
}