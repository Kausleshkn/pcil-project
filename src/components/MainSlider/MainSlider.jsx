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
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          
          
        <div className="slide-content">
            <img src={banner1} alt="Slide 1" className="slide-image" />
            <div className="slide-overlay">
              <h2>Slide 1 Heading</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis officia odio sequi placeat quaerat sed deserunt quis cumque soluta magni?</p>
              <button className="slide-button">Click Me</button>
            </div>
          </div>
          
          
          </SwiperSlide>
        <SwiperSlide>
          
        <div className="slide-content">
            <img src={banner2} alt="Slide 2" className="slide-image" />
            <div className="slide-overlay">
              <h2>Slide 2 Heading</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, vitae voluptatibus? Ad sit quasi excepturi, soluta reiciendis quidem pariatur enim.</p>
              <button className="slide-button">Click Me</button>
            </div>
          </div>
          
          </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default MainSlider;


