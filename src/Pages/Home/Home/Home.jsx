import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Services from "../Services/Services";
import Title from "../Title/Title";

const Home = () => {
   return (
      <div>
         <Helmet>
            <title>PRIME DIAGNOSIS || Home</title>
         </Helmet>
         <Banner></Banner>
         <Category></Category>
         <Title></Title>
         <Services></Services>
      </div>
   );
};

export default Home;
