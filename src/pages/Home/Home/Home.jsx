import Advertisers from "../Advertisers/Advertisers";
import Banner from "../Banner/Banner";
import NewsLetter from "../NewsLetter/NewsLetter";
import Team from "../Team/Team";
import Feedback from "../Feedback/Feedback";
import Advertisement from "../Advertisement/Advertisement";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Advertisers></Advertisers>
            <Advertisement></Advertisement>
            <Team></Team>
            <NewsLetter></NewsLetter>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;