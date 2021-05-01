import React from 'react'
import Account from '../layout/Account'

function Login() {

    const login=[
        {type:"text",placeholder:"enter email",name:"email"},
        {type:"password",placeholder:"enter password",name:"password"}
      ]
    return (
        <div>
            <Account heading="login to get started" button="register" submit="login" data={login} redirect="/register" src="/b3.jpg" />
        </div>
    )
}

export default Login
