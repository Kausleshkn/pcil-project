import './BusinessPortfolioSection.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const BusinessPortfolioSection = () => (


  <section className="business-portfolio-section">
    <div className="container">
      <div className="section-title">
        <h1>Our Business Portfolio</h1>
      </div>
      <div className="portfolio-content">

        {/* <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={4}
          navigation ={{enabled: false,}}
          pagination={{ clickable: false,enabled: false, }}
          scrollbar={{ draggable: false, }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        > */}

          {/* <SwiperSlide> */}
            <div className="portfolio-item">

              <h4>Our Capabilities in process automation is spread over a range of services right from consultation, installation, commissioning, planned maintenance, product training, support and services. We have achieved a commendable position in the industry for our rich experience in preparation of design and engineering calculations, layout and detailed engineering of equipment & systems based on Industrial Automation Standard IEC 61131-3. We offer a unique combination of best technologies, expertise, services and support spanning the entire automation spectrum.</h4>

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
              </ul>

            </div>
          {/* </SwiperSlide> */}

          {/* <SwiperSlide> */}

            <div className="portfolio-item">

              <h4>Our Capabilities in process automation is spread over a range of services right from consultation, installation, commissioning, planned maintenance, product training, support and services. We have achieved a commendable position in the industry for our rich experience in preparation of design and engineering calculations, layout and detailed engineering of equipment & systems based on Industrial Automation Standard IEC 61131-3. We offer a unique combination of best technologies, expertise, services and support spanning the entire automation spectrum.</h4>

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
              </ul>

            </div>
          {/* </SwiperSlide> */}

          {/* <SwiperSlide> */}

            <div className="portfolio-item">

              <h4>Our Capabilities in process automation is spread over a range of services right from consultation, installation, commissioning, planned maintenance, product training, support and services. We have achieved a commendable position in the industry for our rich experience in preparation of design and engineering calculations, layout and detailed engineering of equipment & systems based on Industrial Automation Standard IEC 61131-3. We offer a unique combination of best technologies, expertise, services and support spanning the entire automation spectrum.</h4>

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
              </ul>

            </div>
          {/* </SwiperSlide> */}

          {/* <SwiperSlide> */}

            <div className="portfolio-item">

              <h4>Our Capabilities in process automation is spread over a range of services right from consultation, installation, commissioning, planned maintenance, product training, support and services. We have achieved a commendable position in the industry for our rich experience in preparation of design and engineering calculations, layout and detailed engineering of equipment & systems based on Industrial Automation Standard IEC 61131-3. We offer a unique combination of best technologies, expertise, services and support spanning the entire automation spectrum.</h4>

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
              </ul>

            </div>
          {/* </SwiperSlide> */}

          {/* <SwiperSlide> */}

            <div className="portfolio-item">

              <h4>Our Capabilities in process automation is spread over a range of services right from consultation, installation, commissioning, planned maintenance, product training, support and services. We have achieved a commendable position in the industry for our rich experience in preparation of design and engineering calculations, layout and detailed engineering of equipment & systems based on Industrial Automation Standard IEC 61131-3. We offer a unique combination of best technologies, expertise, services and support spanning the entire automation spectrum.</h4>

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
              </ul>

            </div>
          {/* </SwiperSlide> */}
        {/* </Swiper> */}
      </div>
    </div>
  </section>
);

export default BusinessPortfolioSection;
