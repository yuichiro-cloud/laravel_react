export const setSession = (session) => ({
    type: 'SET_SESSION',
    payload: {
        id:session.id,
        name:session.name
    },
})

export const setName = (name) => ({
    type: 'SET_NAME',
    payload: {
        name
    }
})

export const setEmail = (email) => ({
    type: 'SET_EMAIL',
    payload: {
        email
    }
})

export const setRemember = (remember) => ({
    type: 'SET_REMEMBER',
    payload: {
        remember
    }
})

export const setCSRF = (csrf) => ({
    type: 'SET_CSRF',
    payload: {
        csrf
    }
})

export const setPrams = (request) => ({
    type: 'SET_PARAMS',
    payload: {
        request
    }
})
