import React from 'react'
import NavBarViewer from '../../components/navbar/NavBarViewer'
import FooterView from '../../components/footer/FooterView'


export default function Loading() {
    return (
        <div class="container">
            <NavBarViewer />
                <div style={{height:'100vh',backgroundColor:'green'}}></div>
            <FooterView />
        </div>
    )
}
