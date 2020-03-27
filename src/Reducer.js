const Reducer = (state = { token: ''}, action) => {
    switch(action.type) {
        case 'TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return {
                ...state
            }    
    }
}

export default Reducer