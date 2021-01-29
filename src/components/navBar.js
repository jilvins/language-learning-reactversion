import React from 'react'
import  '../styles/navbar.css'
import {Link} from 'react-router-dom'

function Navbar () {
    return (
        <div className="navbar">
            <Link to="/"><p>Home</p></Link>
            <Link to="words"><p>New Words</p></Link>
        </div>
    )
}

export default Navbar