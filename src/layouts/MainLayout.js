import React from 'react';
import NavBar from "../navBar/navBar";
import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header";

const MainLayout = () => {
    return (
        <div>
            <Header/>
           <NavBar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;