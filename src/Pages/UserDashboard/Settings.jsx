import { Helmet } from "react-helmet";
import NotPound from "../../Sheard/NotPound";


const Settings = () => {
   return (
      <div>
         <Helmet>
            <title>Dashboard || Setting</title>
         </Helmet>
         <NotPound title={"this Data is Not Available"}></NotPound>
      </div>
   );
};

export default Settings;