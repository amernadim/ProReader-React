import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './component/Footer';
import NavBar from './component/NavBar';

const Root = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Root;