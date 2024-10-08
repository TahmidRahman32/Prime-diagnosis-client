import React from 'react';
import SiteBar from '../SiteBar';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
   return (
      <div className="md:flex block">
         <Helmet>
            <title>Dashboard</title>
         </Helmet>
         <div>
            <SiteBar></SiteBar>
         </div>
         <div className="md:flex-1 ">
            <Outlet></Outlet>
         </div>
      </div>
   );
};

export default Dashboard;