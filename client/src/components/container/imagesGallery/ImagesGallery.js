import React,{useState,useEffect} from 'react'
import CardUI from '../../UI/Card'
import axios from 'axios'
import './ImagesGallery.css'

function ImagesGallery() {
    const [records,setRecords]= useState([])
    useEffect(()=>{
        const token=localStorage.getItem('token')
        const config={
            headers:{
                'jwt_react':token
            }
        }
        axios.get('http://localhost:5000/images/viewAll',config).then(data=>{
            return setRecords([data.data.data])
        }).catch(err=>console.log(err))
    },[records])

    return (
        <div className="custom_card_area">
            <CardUI records={records}/>
        </div>
    )
}

export default ImagesGallery
