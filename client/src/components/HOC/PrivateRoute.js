import React from 'react'
import {Route} from 'react-router-dom'
import Login from '../container/Login'

function PrivateRoute({component,...rest}) {
    const key=sessionStorage.getItem('key')
    return (
        <div>
            <Route {...rest} component={key===null?Login:component}/>
        </div>
    )
}
export default PrivateRoute
