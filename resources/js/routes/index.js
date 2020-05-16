import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import NavBar from '../components/NavBar'
import CardTemplate from '../components/CardTemplate'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setSession } from '../actions/authentications'

const routes = (session)=> {
    return(
        <>
            <NavBar />
            <div className="py-3">
                {(()=>{
                    if(session.id===undefined){
                        return (
                            <Switch>
                                <Route exact path="/login" render={() => <CardTemplate title="Login" content="LoginForm" />} />
                                <Route exact path="/register" render={() => <CardTemplate title="Register" content="RegisterForm" />} />
                                <Route exact path="/password/reset" render={() => <CardTemplate title="Reset Password" content="EMailForm" />} />
                                <Route path="/password/reset/:id" render={(props) => <CardTemplate title="Reset Password" content="ResetForm" params={props.match.params} />} />
                                <Redirect to="/login" />
                            </Switch>
                        )
                    }
                    else
                    {
                        if(session.email_verified_at===null)
                        {
                            return (
                                <Switch>
                                    <Route exact path="/email/verify" render={() => <CardTemplate title="Verify Your Email Address" content="Verify" />} />
                                    <Redirect to="/email/verify" />
                                </Switch>
                            )
                        }
                        else
                        {
                            return (
                                <Switch>
                                    <Route exact path="/" render={() => <CardTemplate title="Welcome" content="Welcome" />} />
                                    <Route path="/home" render={() => <CardTemplate title="Dashboard" content="Home" />} />
                                    <Redirect to="/home" />
                                </Switch>
                            )
                        }
                    }
                })()}
            </div>
        </>
    )
}

export default routes
