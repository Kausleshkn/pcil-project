import banner1 from '@assets/banners/1.png';
import banner2 from '@assets/banners/2.png';
import './MainSlider.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


 
const MainSlider = () => {

  return (
    <>
     
     <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true  }}
        scrollbar={{ draggable: false,  }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          
           
           <div className="slide-content">
            <img src={banner1} alt="Slide 1" className="slide-image" />

             <div className="slide-overlay">

          <div className='c_box' >
          <h2>ELECTRICAL SOLUTIONS</h2>
              <p>We manufacture switchboards and control panels with conventional as well as intelligent protection
                <span className='hide_small' >
                ,control and communication. Accompanied with cost-effective design or retrofit systems tailored as per your needs and requirements.
                </span>
              </p>
              <button className="slide-button">Contact Us</button>
          </div>

            </div>


          </div>
     
          
          
          </SwiperSlide>
        <SwiperSlide>
          
        <div className="slide-content">
            <img src={banner2} alt="Slide 2" className="slide-image" />
            <div className="slide-overlay">
            <div className='c_box' >
              <h2>PROCESS INSTRUMENTATION </h2>
              <p>For the past 25 years PACIFIC CONTROL has been working as a pivotal organization in design & development<span className='hide_small' >, Erection and commissioning of wide range of Field Instruments With a wide range of experience in instrumentation, PCIPL has ..</span></p>
              <button className="slide-button">Contact Us</button>
              </div>
            </div>  
          </div>
          
          </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default MainSlider;


