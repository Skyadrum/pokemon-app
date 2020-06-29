import React from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './menu.css'
import logo from './logo.png'


const Head = () => {
    return(
        
        <Navbar bg="primary" variant="primary" sticky="top" expand="lg">
            <Navbar.Brand>
                <img src={ logo } alt="Pokemon" className='logo'/>
            </Navbar.Brand>

            <Nav className="ml-auto">
                <Link to="/">
                    <Button variant="danger" className='btn'>Home</Button>
                </Link>

                <Link to="/pokeForm">
                    <Button variant="warning" className='btn'>Join</Button>
                </Link>
            </Nav>
        </Navbar>
        
    )
}

export default Head