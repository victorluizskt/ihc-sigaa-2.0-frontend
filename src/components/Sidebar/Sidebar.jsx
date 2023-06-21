import React from 'react';
import { SidebarWrapper } from './styled'
import {
    FaHome,
    FaBookOpen,
} from "react-icons/fa";

import { IoMdExit } from "react-icons/io";


import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {

    const Logo = {
        path:"/home",
        name:"Dashboard",
        icon:<FaHome/>
    }

    const Home = {
        path:"/home",
        name:"Dashboard",
        icon:<FaHome/>
    }

    const Licoes = {
        path:"/about",
        name:"About",
        icon:<FaBookOpen/>
    }

    const Sair = {
        path:"/",
        name:"Exit",
        icon:<IoMdExit/>
    }

    return (
        <div className="container">
           <SidebarWrapper>
                <NavLink to={Logo.path} className="link">
                    <div style={{ marginTop: "50px", marginBottom: "50px"}}>
                        <div className="icon">{Logo.icon}</div>
                    </div>
                </NavLink>
                <NavLink to={Home.path} className="link" activeclassName="active">
                    <div className="icon">{Home.icon}</div>
                </NavLink>
                <NavLink to={Licoes.path} className="link" activeclassName="active">
                    <div className="icon">{Licoes.icon}</div>
                </NavLink>
                <NavLink to={Sair.path} className="link" activeclassName="active">
                    <div className="icon">{Sair.icon}</div>
                </NavLink>
           </SidebarWrapper>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;