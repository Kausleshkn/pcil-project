// import introImage from '';
import introImage from '@assets/intro.png';
import './IntroSection.css';


const IntroSection = () => (
  <section className="intro">
    <div className="container">
      <div className="intro-content">
        <div className="intro-text" style={{ paddingRight: '50px' }}>
          <h2>Introduction</h2>
          <p>
            PACIFIC CONTROL INDIA PRIVATE LIMITED (PCIPL) (formerly known as Instrumentation Engineering Services) has been working in the field of Instrumentation, and Automation systems and services since the year 1996. At Pacific Control we are proficient in the Design, Engineering, Supply and Execution of the turnkey projects. Our long and diverse experience, and a large number of successfully completed projects in different streams of process industry give us the edge in understanding client’s performance requirement, and providing innovative solutions which are cost effective and follow modern industry standards.

            Our objective is to produce quality Electrical, Instrumentation & Automation equipment and services in a positive, closely controlled, well-managed & professional manner. With good communication, understanding, and the correct use of project management tools: Reporting, Progress evaluation, and an imaginative flexible approach to solving problems we intend to make working with PCIPL as easy as possible. Our project management expertise also ensures that the project are executed within the agreed timeline, thus controlling the project cost.
          </p>
        </div>
        <div className="intro-image">
          <img src={introImage} alt="Introduction Image" style={{ marginTop: '8rem' }} />
        </div>
      </div>
    </div>
  </section>
);

export default IntroSection;
