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

<div className='fx_center' >
<div className='icon' >
<i className="material-symbols-outlined">
info
</i>
</div>
</div>
              <ul>
                <li className='text_center'  >Continuous Process Plant Automation
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
 


            <div className='fx_center' >
<div className='icon' >
<i className="material-symbols-outlined">
show_chart
</i>
</div>
</div>

              <ul>
                <li className='text_center'  >Batch Process Automation
                  <ul>
                    <li>HVAC and Ventilation Systems</li>
                    <li>Water Pumping Station for City Water Supply</li>
                    <li>Automatic Fire Safety System and Water Pumping Systems</li>
                    <li>PLC Based DG Synchronization & Load Sharing</li>
                  </ul>
                </li>
              </ul>

            </div>
          {/* </SwiperSlide> */}

          {/* <SwiperSlide> */}

            <div className="portfolio-item">


            <div className='fx_center' >
<div className='icon' >
<i className="material-symbols-outlined">
leaderboard
</i>
</div>
</div>


              <ul>
                <li className='text_center'  >Material handling and Packaging automation

                  <ul>
                    <li>Production Line for Biscuits, Ice Cream, etc</li>
                    <li>Milk, Butter & Ghee Packing Machines</li>
                  </ul>
                </li>
              </ul>

            </div>
          {/* </SwiperSlide> */}

          {/* <SwiperSlide> */}

            <div className="portfolio-item">


            <div className='fx_center' >
<div className='icon' >
<i className="material-symbols-outlined">
donut_large
</i>
</div>
</div>

              <ul>
                <li className='text_center' >Special purpose Machines
                  <ul>
                    <li>PLC Based Homogenizer, Cream Separators, etc.
                    </li>
                    <li>Food & Beverages Packing Machines.
                    </li>
                  </ul>
                </li>
              </ul>

            </div>
          {/* </SwiperSlide> */}

          {/* <SwiperSlide> */}

            <div className="portfolio-item">


            <div className='fx_center' >
<div className='icon' >
<i className="material-symbols-outlined">
settings_accessibility
</i>
</div>
</div>

              <ul>
                <li className='text_center' >Telemetry Systems and Pipeline SCADA
                  <ul>
                    <li>Municipal water Distribution & Management System.</li>
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
