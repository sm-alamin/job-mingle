import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    );
};

export default Main;