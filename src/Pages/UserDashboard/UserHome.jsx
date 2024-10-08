import { Helmet } from "react-helmet";
import NotPound from "../../Sheard/NotPound";


const UserHome = () => {
  
   return (
      <div>
         <Helmet>
            <title> Home</title>
         </Helmet>
         
            <NotPound title={"Your Booking Not Available"} />
        
      </div>
   );
};

export default UserHome;
