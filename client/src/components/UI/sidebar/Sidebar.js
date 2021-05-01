import React from 'react'
import './sidebar.css'
import {Link,useHistory} from 'react-router-dom'
import { FaSignInAlt } from "react-icons/fa";

function Sidebar({tags}) {
    const history=useHistory()
    const logoutHandler=()=>{
        sessionStorage.clear();
        history.push('/login')
    }
    const showElements=(el)=>{
        if(el===undefined){
            return 'loading'
        }
         return el.map((item,index)=>{
            const {icon,heading,active,link}=item
            return(
                <div className={active===true?"elements active":"elements"} key={index}>
                    <div className="icons">
                        <img src={icon}/>
                    </div>
                    <Link to={link} className="text-decoration-none">
                        <div className="heading">
                        <h3>{heading}</h3>
                        </div>
                    </Link>
                </div>
                )
        })
    }
    return (
        <div className="side_area">
            <div className="logo">
                <div className="pic">
                    <img src="/daslogo.png"/>
                </div>
                <div className="heading">
                    gallary
                </div>
            </div>
            <div className="all_elements">
                {showElements(tags)}
            </div>
            <div className="logout">
                <button onClick={()=>logoutHandler()}>logout {<FaSignInAlt size="1.4rem" style={{margin:'0 10px',color:'white'}}/>}</button>
            </div>
        </div>
    )
}

export default Sidebar
