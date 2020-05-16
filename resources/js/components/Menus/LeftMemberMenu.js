import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LeftMemberMenu = () => (
    <>
        <Nav.Item>
            <Link to="/home" className="nav-link">Home</Link>
        </Nav.Item >
    </>
)
