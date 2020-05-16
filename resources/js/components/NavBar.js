import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    Container,
    Navbar, Nav,
} from 'react-bootstrap'
import LeftMenu from './Menus/LeftMenu'
import RightMenu from './Menus/RightMenu'

const NavBar = (props) => (
    <Navbar expand="md" bg="light" className="navbar-laravel">
        <Container>
            <Navbar.Brand href="/">
                Laravel
            </Navbar.Brand>
            <Navbar.Toggle data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" />
            <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="mr-auto">
                    <LeftMenu auth={props.auth} />
                </Nav>
                <Nav className="ml-auto">
                    <RightMenu auth={props.auth} />
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)

NavBar.propTypes = {
    auth: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    auth: state.session.auth,
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
