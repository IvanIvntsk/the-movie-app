import React from 'react';

import {Outlet} from "react-router-dom";
import NavBar from "../components/navBar/navBar";

import css from './MainLayout.module.css'
const MainLayout = () => {
    return (
        <div className={css.main}>
       <NavBar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;