import React from 'react';
import NotPound from '../../Sheard/NotPound';
import { Helmet } from 'react-helmet';

const AddReview = () => {
   return (
      <div>
         <Helmet>
            <title>Dashboard || add Review</title>
         </Helmet>
         <NotPound title={"this Data is Not Available"}></NotPound>
      </div>
   );
};

export default AddReview;