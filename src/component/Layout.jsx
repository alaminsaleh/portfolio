import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';

 export const Layout = () => {
    return (
        <div className='flex flex-col min-h-screen '>
            <Navbar></Navbar>
            <main className='flex-1'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Layout;