import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import {
    setSession,
    setName,
    setEmail,
    setRemember,
    setCSRF
} from './actions/authentications'
import routes from './routes'

class ReactRoot extends React.Component {
    constructor(props){
        super(props)
        props.setSession(props.responseSession)
        if(laravelErrors['name']===undefined
            &&laravelErrors['email']===undefined
            &&laravelErrors['password']===undefined)
        {
            this.props.setName('')
            this.props.setEmail('')
            this.props.setRemember(false)
        }
        let token = document.head.querySelector('meta[name="csrf-token"]')
        this.props.setCSRF(token.content)
    }
    render(){
        return (
            <ConnectedRouter history={this.props.history}>
                { routes(this.props.responseSession) }
            </ConnectedRouter>
        )
    }
}

ReactRoot.propTypes = {
    history: PropTypes.object,
    csrf:  PropTypes.string,
    setSession: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    setEmail: PropTypes.func.isRequired,
    setRemember: PropTypes.func.isRequired,

}

const mapStateToProps = state => ({
    csrf: state.csrf,
})

const mapDispatchToProps = dispatch => ({
    setCSRF: (csrf) => dispatch(setCSRF(csrf)),
    setSession: (session) => dispatch(setSession(session)),
    setName: (name) => dispatch(setName(name)),
    setEmail: (email) => dispatch(setEmail(email)),
    setRemember: (remember) => dispatch(setRemember(remember)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReactRoot)
