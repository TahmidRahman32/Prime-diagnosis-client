import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Services from "../Services/Services";
import Title from "../Title/Title";
import ViewReview from './../ViewReview/ViewReview';

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
         <ViewReview></ViewReview>
      </div>
   );
};

export default Home;
