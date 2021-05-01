import React from 'react'

export default function Dashboard(props) {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 p-0">
                        {props.sidebar}
                    </div>
                    <div className="col-md-9 p-0">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}
