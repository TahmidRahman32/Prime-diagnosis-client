import React from 'react';
import NotPound from '../../../Sheard/NotPound';
import { Helmet } from 'react-helmet';

const ManageItems = () => {
   return (
      <div>
         <Helmet>
            <title>Manage Items</title>
         </Helmet>
         <NotPound title={"this Data is Not Available"}></NotPound>
      </div>
   );
};

export default ManageItems;