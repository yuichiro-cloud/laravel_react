import React from 'react'
import { Link } from 'react-router-dom'
import { NavDropdown, Form } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CSRFToken from '../Elements/CSRFToken'

class RightMemberMenu extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <NavDropdown title={this.props.name+' 様'}>
                <NavDropdown.Item href="/logout" onClick={this.preSubmit}>Logout</NavDropdown.Item>
                <Form id="logout-form" action="/logout" method="POST" style={{display:'none'}}>
                    <CSRFToken />
                </Form>
            </NavDropdown>
        )
    }
    preSubmit(currentEvent){
        currentEvent.preventDefault();
        document.getElementById('logout-form').submit();
    }
}
RightMemberMenu.propTypes = {
    name: PropTypes.string,
}
const mapStateToProps = state => ({
    name: state.session.name,
})
const mapDispatchToProps = dispatch => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(RightMemberMenu)
