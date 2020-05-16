import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Form } from 'react-bootstrap'
import TextInput from '../Elements/TextInput'
import SubmitButton from '../Elements/SubmitButton'
import CSRFToken from '../Elements/CSRFToken'
import SessionAlert from '../Elements/SessionAlert '
import { setEmail } from '../../actions/authentications'

class ResetForm extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <>
                <SessionAlert target="status" />
                <Form method="POST" action="/password/email" id="login-form">
                    <CSRFToken />
                    <TextInput
                        identity="email"
                        controlType="email"
                        label="E-Mail Address"
                        defaultValue={this.props.email}
                        action={this.props.setEmail}
                        autoFocus={true}
                        />
                    <SubmitButton label="Send Password Reset Link" />
                </Form>
            </>
        )
    }
}
ResetForm.propTypes = {
    email:  PropTypes.string,
    setEmail: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    email: state.email,
})
const mapDispatchToProps = dispatch => ({
    setEmail: (email) => dispatch(setEmail(email)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ResetForm)
