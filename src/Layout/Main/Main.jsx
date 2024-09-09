import { Outlet } from "react-router-dom";
import Nav from "../NavBar/Nav";


const Main = () => {
   return (
      <div>
         <Nav></Nav>
         <div className="pt-[90px]">
            <Outlet></Outlet>
         </div>
      </div>
   );
};

export default Main;