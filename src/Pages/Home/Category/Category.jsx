import { Link } from "react-router-dom";
import FindCat from './FindCat';


const Category = () => {
   return (
      <div className="md:grid grid-cols-4 max-w-7xl mx-auto my-3 space-y-2 gap-8">
         <FindCat title={"Looking for doctors?"} text={"Find here"} path={"/doctors"} btn={"Find A Doctor"}></FindCat>
         <FindCat title={"When to come in?"} text={"Book here"} path={""} btn={"Appointment"}></FindCat>
         <FindCat title={"Need test information?"} text={"Our Packages"} path={"/ourPackage"} btn={"Packages"}></FindCat>
         <FindCat title={"Got a question?"} text={"Send us your query"} path={"/location"} btn={"Our Location"}></FindCat>

        
      </div>
   );
};

export default Category;