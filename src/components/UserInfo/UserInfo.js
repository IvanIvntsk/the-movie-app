import React from 'react';
import {avatar} from "../../constants/urls/urls";
import css from './UserInfo.module.css'
const UserInfo = () => {
    return (
        <div className={css.main} >

                <img src={avatar} alt={'avatar'}/>

            <p style={{color:"white", fontSize:"10px"}}><b>User Name:
                Kokos</b></p>
        </div>
    );
};

export default UserInfo;