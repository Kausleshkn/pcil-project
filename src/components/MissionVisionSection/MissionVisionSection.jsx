import './MissionVisionSection.css';
import goal from '@assets/our-goal.jpg';
import vision from '@assets/our-vision.jpg';


const MissionVisionSection = () => (
  <section className="mission-vision-section">
    <div className="container">
      <div className="section-title">
        <h1>Our Mission & Vision</h1>
      </div>
      <div className="mission-vision-content">
        <h2>Mission</h2>
        <div className="mission">
          <div className="mission-text">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>From the beginning, our Mission at Pacific Control is to exceed our customer’s expectations by providing the highest quality products and services to our clients in most cost effective manner.</p>
          </div>
          <div className="mission-image">
            <img src={goal} alt="mission Image" />
          </div>
        </div>

        <div className="vision">
          <div className="vision-text">

            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>Our Vision is to design & implement automation systems which ensure the highest international standards of production quality. Hence enabling our clients to provide world-class level of consumer products.</p>
          </div>
          <div className="vision-image">
            <h2>Vision</h2>
            <img src={vision} alt="vision Image" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MissionVisionSection;
