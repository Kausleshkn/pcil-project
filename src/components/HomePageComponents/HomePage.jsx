import Header from '../GlobalComponents/Header/Header';
import MainSlider from './MainSlider/MainSlider';
import IntroSection from './IntroSection/IntroSection';
import MissionVisionSection from './MissionVisionSection/MissionVisionSection';
import OurBusinessSection from './OurBusinessSection/OurBusinessSection';
import BusinessPortfolioSection from './BusinessPortfolioSection/BusinessPortfolioSection';
import SupervisionControl from './SupervisionarySection/SupervisionControl';
import ProcessControl from './ProcessControl/ProcessControl';
import Footer from '../GlobalComponents/Footer/Footer';


function Home() {
    return (
        <div className='main-container'>
            <Header />
            <MainSlider />
            <IntroSection />
            <MissionVisionSection />
            <OurBusinessSection />
            <BusinessPortfolioSection />
            <SupervisionControl />
            <ProcessControl />
            <Footer />
        </div>
    );
}

export default Home;
