export const session = (state = {auth:false,name:null}, action) => {
    switch (action.type) {
        case 'SET_SESSION':
            let session = (action.payload.id===undefined)
                ? ({auth:false,name:null})
                : ({auth:true,name:action.payload.name})
            return session
        default:
            return state
    }
}

export const name = (state = null, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return action.payload.name;
        default:
            return state
    }
}

export const email = (state = null, action) => {
    switch (action.type) {
        case 'SET_EMAIL':
            return action.payload.email;
        default:
            return state
    }
}

export const remember = (state = false, action) => {
    switch (action.type) {
        case 'SET_REMEMBER':
            return action.payload.remember;
        default:
            return state
    }
}

export const csrf = (state = '', action) => {
    switch (action.type) {
        case 'SET_CSRF':
            return action.payload.csrf;
        default:
            return state
    }
}

export const params = (state = '', action) => {
    switch (action.type) {
        case 'SET_PARAMS':
            return action.payload.request;
        default:
            return state
    }
}
