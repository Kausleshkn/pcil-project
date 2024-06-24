import './BusinessPortfolioSection.css';

const BusinessPortfolioSection = () => (
  <section className="business-portfolio-section">
    <div className="container">
      <div className="section-title">
        <h1>Our Business Portfolio</h1>
      </div>
      <div className="portfolio-content">
        <div className="portfolio-item">
          <p>Our Capabilities in process automation is spread over a range of services right from consultation, installation, commissioning, planned maintenance, product training, support and services. We have achieved a commendable position in the industry for our rich experience in preparation of design and engineering calculations, layout and detailed engineering of equipment & systems based on Industrial Automation Standard IEC 61131-3. We offer a unique combination of best technologies, expertise, services and support spanning the entire automation spectrum.</p>

          <ul>
            <li>Continuous Process Plant Automation
              <ul>
                <li>Dairy Plants (Liquid Milk Handling, Fermented Products, Butter/Ghee Plants, Powder Plants)</li>
                <li>Food & Beverages</li>
                <li>Waste Water & ETP Plants</li>
                <li>Steam Boilers and Turbines</li>
                <li>Distillation Columns for Menthol Plants</li>
                <li>Fermenter for Fertilizer & Pesticides</li>
                <li>Chemical Reactors</li>
              </ul>
            </li>

            <li>Batch Process Automation
              <ul>
                <li>HVAC and Ventilation Systems</li>
                <li>Water Pumping Station for City Water Supply</li>
                <li>Automatic Fire Safety System and Water Pumping Systems</li>
                <li>PLC Based DG Synchronization & Load Sharing</li>
                <li>Material handling and Packaging automation</li>
                <li>Production Line for Biscuits, Ice Cream, etc.</li>
                <li>Milk, Butter & Ghee Packing Machines</li>
                <li>Special purpose Machines</li>
                <li>PLC Based Homogenizer, Cream Separators, etc.</li>
                <li>Food & Beverages Packing Machines</li>
                <li>Telemetry Systems and Pipeline SCADA</li>
                <li>Municipal water Distribution & Management System</li>
              </ul>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </section>
);

export default BusinessPortfolioSection;
