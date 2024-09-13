import Headers from "../../../Sheard/Headers/Headers";
import NotPound from "../../../Sheard/NotPound";


const Doctors = () => {
   return (
      <div>
         <Headers previous={"Home"} current={"Doctors"} title={"Find your doctors"}></Headers>
         <NotPound title={"this Data is Not Available"}></NotPound>
      </div>
   );
};

export default Doctors;