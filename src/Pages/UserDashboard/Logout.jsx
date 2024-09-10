import React from 'react';
import NotPound from '../../Sheard/NotPound';
import { Helmet } from 'react-helmet';

const Logout = () => {
   return (
      <div>
         <Helmet>
            <title>Dashboard || Logout</title>
         </Helmet>
         <NotPound title={"this Data is Not Available"}></NotPound>
      </div>
   );
};

export default Logout;