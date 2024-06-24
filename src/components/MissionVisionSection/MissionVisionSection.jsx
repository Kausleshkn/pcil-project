import './MissionVisionSection.css'; 


const MissionVisionSection = () => (
  <section className="mission-vision-section" style={{ marginTop: '-3rem' }}>
    <div className="container">
      <div className="section-title">
        <h1>Our Mission & Vision</h1>
      </div>
      <div className="mission-vision-content">
        <div className="mission">
          <h2>Mission</h2>
          <p>From the beginning, our Mission at Pacific Control is to exceed our customer’s expectations by providing the highest quality products and services to our clients in most cost effective manner.</p>
        </div>
        <div className="vision">
          <h2>Vision</h2>
          <p>Our Vision is to design & implement automation systems which ensure the highest international standards of production quality. Hence enabling our clients to provide world-class level of consumer products. We are committed to becoming the catalyst in the growth of automation industry with our firm adherence to quality standards and being accessible to customer at any point of time.</p>
        </div>
      </div>
    </div>
  </section>
);

export default MissionVisionSection;
