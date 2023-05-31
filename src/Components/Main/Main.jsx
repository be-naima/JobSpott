import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'

const Main = () => {
    return (
        <div className='d-flex flex-column position-relative' style={{minHeight : "100vh"}}>
            
           
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;