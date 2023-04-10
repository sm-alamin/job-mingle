import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <>
            <Navigation />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;