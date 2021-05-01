import React from 'react'

function Inputs({type,placeholder,onChange,name,value}) {
    return (
        <div>
            <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange}/>
        </div>
    )
}

export default Inputs
