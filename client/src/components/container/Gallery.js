import React from 'react'
import { Container } from 'react-bootstrap'
import Dashboard from '../layout/Dashboard'
import Sidebar from '../UI/sidebar/Sidebar'
import ImagesGallery from './imagesGallery/ImagesGallery'

function Gallery() {

    const tags=[
        {icon:'./home.svg',heading:'home',link:"/"},
        {icon:'./photo.png',heading:'Gallery',active:true,link:"/gallery"},
    ]

    return (
        <div>
            <Dashboard sidebar={<Sidebar tags={tags}/>}>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom px-md-4">
                    <h2 className="text-capitalize">gallery section</h2>
                </div>
               <Container>
                  <ImagesGallery/>
               </Container>
            </Dashboard> 
        </div>
    )
}

export default Gallery
