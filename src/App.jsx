import './App.css';
import Header from './components/Header/Header';
import MainSlider from './components/MainSlider/MainSlider';
import IntroSection from './components/IntroSection/IntroSection';
import MissionVisionSection from './components/MissionVisionSection/MissionVisionSection';
import OurBusinessSection from './components/OurBusinessSection/OurBusinessSection';
import BusinessPortfolioSection from './components/BusinessPortfolioSection/BusinessPortfolioSection';
import OtherComponent from './components/OtherComponent/OtherComponent';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='main-container'>
      <Header />
      <MainSlider />
      <IntroSection />
      <MissionVisionSection />
      <OurBusinessSection />
      <BusinessPortfolioSection />
      <OtherComponent />
      <Footer />
    </div>
  );
}

export default App;
