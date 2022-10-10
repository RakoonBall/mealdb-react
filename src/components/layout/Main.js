import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
// import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const Main = ({search, setSearch}) => {
    return (
        <div>
            <Navbar search={search} setSearch={setSearch}></Navbar>
            <Outlet search={search} setSearch={setSearch}></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;