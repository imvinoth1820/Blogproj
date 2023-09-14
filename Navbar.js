import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
    return (
        <header>
            <div className='container'>
                <Link to='/'><h1>Vinoth BLOG</h1></Link>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/create">Create Post</Link>
                </nav>
            </div>
        </header>
    )
}
