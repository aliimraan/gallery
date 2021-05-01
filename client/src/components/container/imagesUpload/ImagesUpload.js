import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './ImagesUpload.css'
import { FaCloudUploadAlt } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useHistory} from 'react-router-dom'

function ImagesUpload() {
    const [images,setImages]=useState('')
    const [selected,setSelected]=useState(false)
    const history=useHistory()

    useEffect(() => {
        if(images!==''){
         setSelected(true)
        }
     }, [images])

    const submitHandler=(e)=>{
        e.preventDefault()
        const data = new FormData()
        for(var x = 0; x<images.length; x++) {
            data.append('gallaryPictures', images[x])
        }
        const token=localStorage.getItem('token')
        const config={
            headers: {
                "Content-Type": "multipart/form-data",
                "jwt_react":token
              }
        }
        
        axios.post('http://localhost:5000/images/add',data,config).then(data=>{
            if(data.status===201){
                toast.success(data.data.msg)
                setTimeout(() => {
                    return history.push('/gallery')
                }, 5000);   
            }
        }).catch(err=>console.log(err))
    }
    return (
        <div className="uploads">
            <ToastContainer/>
            <form onSubmit={(e)=>submitHandler(e)}>
                <input type="file" id="file" className="inputfile" multiple  onChange={(e)=>setImages(e.target.files)}/>
                <label for="file"><FaCloudUploadAlt size="2rem" style={{margin:"0 10px 5px 0"}}/>{selected===false?'Choose Files':'Selected'}</label>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default ImagesUpload
