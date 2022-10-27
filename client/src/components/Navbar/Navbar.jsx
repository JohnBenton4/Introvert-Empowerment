import React from "react"
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom"

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
                    <Link to="/about"></Link>
                </li>
                <li id="loginRoute">
                    <Link to="/login"><CiUser size={20} style={{ color: "#000000", marginRight: "2rem" }} /></Link>
                </li>
            </ul>
        </div>
    )
}