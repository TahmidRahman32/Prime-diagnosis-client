import React from 'react';
import SiteBar from '../SiteBar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
   return (
      <div className="flex">
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