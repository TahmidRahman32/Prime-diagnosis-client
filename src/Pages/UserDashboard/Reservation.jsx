import { Helmet } from "react-helmet";
import NotPound from "../../Sheard/NotPound";


const Reservation = () => {
   return (
      <div>
         <Helmet>
            <title>Dashboard || Reservation</title>
         </Helmet>
         <NotPound title={"Reservation Data is Not Available"}></NotPound>
      </div>
   );
};

export default Reservation;