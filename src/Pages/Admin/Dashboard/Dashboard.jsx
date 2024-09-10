import React from 'react';
import SiteBar from '../SiteBar';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
   return (
      <div className="flex">
         <Helmet>
            <title>Dashboard</title>
         </Helmet>
         <div>
            <SiteBar></SiteBar>
         </div>
         <div className="flex-1">
            <Outlet></Outlet>
         </div>
      </div>
   );
};

export default Dashboard;