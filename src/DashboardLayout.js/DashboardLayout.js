import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../Pages/Dashboard/SideBar/SideBar';
import Footer from '../Pages/Home/Footer/Footer';
import Navbar from '../Pages/Home/Navbar/Navbar';

const DashboardLayout = () => {

    return (
        <div>
            <div>
                <div>
                    <Navbar></Navbar>

                    <div  className="drawer drawer-mobile">
                        <input
                            id="dashboard-drawer"
                            type="checkbox"
                            className="drawer-toggle"
                        />

                        <div className="drawer-content">

                            <Outlet></Outlet>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

                         <SideBar></SideBar>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        </div>


    );
};

export default DashboardLayout;