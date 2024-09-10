import { Outlet } from "react-router-dom";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";


const Main = () => {
   return (
      <div>
         <Nav></Nav>
         <div className="pt-[90px]">
            <Outlet></Outlet>

         </div>
         <Footer></Footer>
      </div>
   );
};

export default Main;