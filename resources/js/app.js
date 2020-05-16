/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/Example');


import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactRoot from './ReactRoot'
import configureStore, { history } from './stores/configureStore'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const store = configureStore()

const pstore = persistStore(store)

const render = (props) => {
    ReactDOM.render(
        <Provider store={store}>
            <PersistGate loading={<p>loading...</p>} persistor={pstore}>
                <ReactRoot history={history} responseSession={props} />
            </PersistGate>
        </Provider>,
        document.getElementById('react-root')
    )
}

function authSession()
{
    let params = new URLSearchParams();
    let url = '/session';
    window.axios.post(url,params)
        .then((response)=>{
            render(response.data)
        })
}

authSession()
