import img4 from '../../../shared/image/main.svg'
import img12 from '../../../shared/image/image.svg'
import img9 from '../../../shared/image/image.png'
import { useState, useEffect } from 'react';

import './mainprojects.scss'
import { CardProjects } from '../../../features'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const DataProjects = [
  {
    id:1,
    img: img4,
    titlle: 'Читающий город',
    description: 'Проект, направленный на развитие культуры чтения среди жителей. Организуем книжные выставки, литературные конкурсы, публичные чтения.'
  },
  {id:2,
    img: img12,
    titlle: 'Читающий город',
    description: 'Проект, направленный на развитие культуры чтения среди жителей. Организуем книжные выставки, литературные конкурсы, публичные чтения.'
  },
  {
    id:3,
    img: img9,
    titlle: 'Образовательный центр',
    description: 'Проект, направленный на развитие культуры чтения среди жителей. Организуем книжные выставки, литературные конкурсы, публичные чтения.'
  },
  {id:4,
    img: img4,
    titlle: 'Читающий город',
    description: 'Проект, направленный на развитие культуры чтения среди жителей. Организуем книжные выставки, литературные конкурсы, публичные чтения.'
  },
]

export const MainProjects = () => {
  const [showAll, setShowAll] = useState(false);

  const swiperSettings = {
    modules: [Autoplay],
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    loopedSlides: 5,
    speed: 800,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      waitForTransition: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 1.4,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  };

  return (
    <div className='projects container'>
      <h1 className='main'>Основные проекты</h1>
      <div className={`projects-grid ${showAll ? 'show' : ''}`}>
        {DataProjects.map((item, index) => (
          <CardProjects
            key={index}
            img={item.img}
            title={item.titlle}
            description={item.description}
          />
        ))}
      </div>
      <div className={`projects-grup ${showAll ? 'hide' : ''}`}>
        <Swiper {...swiperSettings}>
          {DataProjects.map((item, index) => (
            <SwiperSlide key={index}>
              <CardProjects
                img={item.img}
                title={item.titlle}
                description={item.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Свернуть' : 'Еще'}
      </button>
    </div>
  );
};
