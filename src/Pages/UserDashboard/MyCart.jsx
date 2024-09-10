import { Helmet } from "react-helmet";
import NotPound from "../../Sheard/NotPound";


const MyCart = () => {
   return (
      <div>
         <Helmet>
            <title>Dashboard || My Cart</title>
         </Helmet>
         <NotPound title={"this Data is Not Available"}></NotPound>
      </div>
   );
};

export default MyCart;