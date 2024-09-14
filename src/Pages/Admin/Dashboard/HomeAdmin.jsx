import React from 'react';
import NotPound from '../../../Sheard/NotPound';
import { Helmet } from 'react-helmet';

const HomeAdmin = () => {
   return (
      <div>
         <Helmet>
            <title>Admin Home</title>
         </Helmet>
         <NotPound title={"this Data is Not Available"}></NotPound>
      </div>
   );
};

export default HomeAdmin;