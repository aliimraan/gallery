import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './ImagesUpload.css'
import { FaCloudUploadAlt } from "react-icons/fa";

function ImagesUpload() {
    const [images,setImages]=useState('')
    const [selected,setSelected]=useState(false)

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
            console.log(data)
        }).catch(err=>console.log(err))
    }
    return (
        <div className="uploads">
            <form onSubmit={(e)=>submitHandler(e)}>
                <input type="file" id="file" className="inputfile" multiple  onChange={(e)=>setImages(e.target.files)}/>
                <label for="file"><FaCloudUploadAlt size="2rem" style={{margin:"0 10px 5px 0"}}/>{selected===false?'Choose Files':'Selected'}</label>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default ImagesUpload
