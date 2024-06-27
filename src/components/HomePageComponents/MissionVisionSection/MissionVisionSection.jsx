import './MissionVisionSection.css';
import goal from '@assets/1.png';
import vision from '@assets/2.png';


const MissionVisionSection = () => ( 
  <section className="mission-vision-section">

    <div className="container">
      <div className="section-title">
        <h1>Our Mission & Vision</h1>
      </div>
 
      <div className="mission-vision-content">
 

        <div className="mission">
          <div className="mission-text">
            <h3>OUR MISSION</h3>
            <p>From the beginning, our Mission at Pacific Control is to exceed our customer’s expectations by providing the highest quality products and services to our clients in most cost effective manner.</p>
          </div>
          <div className="mission-image">
            <img src={goal} alt="mission Image" />
          </div>
        </div>

        <div className="vision">


        <div className="vision-image">
            <img src={vision} alt="vision Image" />
          </div>

          <div className="vision-text">
            <h3>OUR VISION</h3>
            <p>Our Vision is to design & implement automation systems which ensure the highest international standards of production quality. Hence enabling our clients to provide world-class level of consumer products.</p>
          </div>



        </div>

      </div>



    </div>
  </section>
);

export default MissionVisionSection;
