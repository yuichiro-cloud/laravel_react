import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

const RightGuestMenu = () => (
    <>
        <Nav.Item>
            <Link to="/login" className="nav-link">Login</Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="/register" className="nav-link">Register</Link>
        </Nav.Item>
    </>
)
export default RightGuestMenu
