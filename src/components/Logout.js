import React from 'react'
import {Redirect} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

const Logout = (props) => {
    const dispatch = useDispatch()
    const token = useSelector(state => state.token)

    React.useEffect(() => {
        dispatch({
            type: 'TOKEN',
            token: ''
        })
    }, [dispatch])
    return (
        <>
            {token === '' && <Redirect to={'/login'} /> }
        </>
    )
}

export default Logout