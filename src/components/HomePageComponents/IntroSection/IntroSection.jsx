// import introImage from '';
import introImage from '@assets/intro-img.jpeg';
import './IntroSection.css';
  

const IntroSection = () => (
 

  <section className="intro">

    <div className="container">

      <div className="intro-content">
        
        <div className="intro-text" >
        <div>
        <h2>Introduction</h2>
          <p> 
            SUPERVISORY CONTROL & DATA ACCUSITION SYSTEM
            We have developed standard SCADA applications for a range of processes mentioned above. The detailed reporting and data handling solutions provided by us, which allows the process engineers to optimize the process.
            PCIPL has designed wide range of projects with SCADA system placed in a single facility or different locations sometimes over a wide geographical area. Maintaining efficiencies, identifying problems as soon as they occur, improved productivity, quality and profitability while keeping costs at a minimum.
            Our team has versatile experience of working with different platforms of PLC hardware and SCADA software, ranging from Siemens, Allen-Bradley, Delta and Mitsubishi.
          </p>
        </div> 
        </div>



        <div className="intro-image">
          <img src={introImage} alt="Introduction Image" />
        </div>



      </div>

    </div>

  </section >



);

export default IntroSection;
