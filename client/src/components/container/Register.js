import React from 'react'
import Account from '../layout/Account'

function Register() {
    const register=[
        {type:"text",placeholder:"enter Username",name:"userName"},
        {type:"text",placeholder:"enter Email",name:"email"},
        {type:"text",placeholder:"enter Password no",name:"password"},
      ]
    return (
        <div>
            <Account heading="create you account now" button="login" submit="register" data={register} redirect="/login" src="/pic2.jpg" />
        </div>
    )
}

export default Register
