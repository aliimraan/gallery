import React from 'react'
import { Container } from 'react-bootstrap'
import Dashboard from '../layout/Dashboard'
import Sidebar from '../UI/sidebar/Sidebar'
import ImagesUpload from './imagesUpload/ImagesUpload'

function Home() {

    const tags=[
        {icon:'./home.svg',heading:'home',active:true,link:"/"},
        {icon:'./photo.png',heading:'Gallery',link:"/gallery"},
    ]
    return (
        <div>
            <Dashboard sidebar={<Sidebar tags={tags}/>}>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom px-md-4">
                    <h2 className="text-capitalize">welcome back </h2>
                </div>
               <Container>
                  <ImagesUpload/>
               </Container>
            </Dashboard> 
        </div>
    )
}

export default Home
