import React,{useState,useEffect} from 'react'
import {Card,Button,Modal} from 'react-bootstrap'
import '../container/imagesGallery/ImagesGallery.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CardUI({records}) {
  const [show, setShow] = useState(false);
  const [imageId, setImageId] = useState('');
  const [image,setImage]=useState('')

  const handleShow = (id) => {
    setImageId(id)
    setShow(true)
  }
  const handleClose = () => setShow(false);

  const deleteHandler=(id)=>{
    const token=localStorage.getItem('token')
    const config={
        headers: {
            "jwt_react":token
          }
    }
    axios.delete(`http://localhost:5000/images/delete/${id}`,config).then(data=>{
      if(data.status===200){
        return toast.success(data.data.msg)
      }
    }).catch(err=>{
        if(err){
            err.response.data.error?toast.error(err.response.data.error)
            :toast.error(err.response.data.msg)
          
        }
    })
  }

    const submitHandler=(e)=>{
        e.preventDefault()
        const id=imageId
        const data = new FormData()
        data.append('gallaryPictures', image)
        console.log(image)
        const token=localStorage.getItem('token')
        const config={
            headers: {
                "Content-Type": "multipart/form-data",
                "jwt_react":token
              }
        }
        axios.put(`http://localhost:5000/images/update/${id}`,data,config).then(data=>{
          if(data.status===200){
            toast.success(data.data.msg)
            setShow(false)
          }
        }).catch(err=>{
            if(err){
                err.response.data.error?toast.error(err.response.data.error)
                :toast.error(err.response.data.msg)
              
            }
        })
    }

  const showData=(el)=>{
    if(el[0]===''||el[0]===undefined){
      return ''
    }else{
      return el[0].map((item,index)=>{
        return (
          <Card style={{ width: '18rem' }} key={index}>
        <Card.Img variant="top" src={`http://localhost:5000/${item.gallaryPictures}`} />
        <Card.Body>
          <Card.Text>
            <div className="custom_icons_area">
            <Button variant="primary" onClick={()=>handleShow(item._id)}>Edit</Button>
            <Button variant="danger" onClick={()=>deleteHandler(item._id)}>Delete</Button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
        )
      })
    }
  }

  
    return (
        <>
        {showData(records)}

        <ToastContainer/>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={(e)=>submitHandler(e)}>
          <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
          <button type="submit">send</button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        
      </Modal.Footer>
    </Modal>
        </>
    )
}

export default CardUI
