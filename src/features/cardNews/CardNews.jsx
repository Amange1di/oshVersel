import React, { useState, useEffect } from "react";
import "./CardNews.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

const newsItems = [
  {
    date: "20 фев",
    time: "19:00",
    title: 'Концерт "Музыкальные ритмы города"',
    description:
      "Окунитесь в атмосферу живой музыки с участием популярных исполнителей.",
    image:
      "https://falstaff.b-cdn.net/storage/sites/2/2023/09/Bildschirmfoto_2023-09-28_um_16.52.07.png",
  },
  {
    date: "20 фев",
    time: "19:00",
    title: 'Концерт "Музыкальные ритмы города"',
    description:
      "Окунитесь в атмосферу живой музыки с участием популярных исполнителей.",
    image:
      "https://falstaff.b-cdn.net/storage/sites/2/2023/09/Bildschirmfoto_2023-09-28_um_16.52.07.png",
  },
  {
    date: "20 фев",
    time: "19:00",
    title: 'Концерт "Музыкальные ритмы города"',
    description:
      "Окунитесь в атмосферу живой музыки с участием популярных исполнителей.",
    image:
      "https://falstaff.b-cdn.net/storage/sites/2/2023/09/Bildschirmfoto_2023-09-28_um_16.52.07.png",
  },
  {
    date: "20 фев",
    time: "19:00",
    title: 'Концерт "Музыкальные ритмы города"',
    description:
      "Окунитесь в атмосферу живой музыки с участием популярных исполнителей.",
    image:
      "https://falstaff.b-cdn.net/storage/sites/2/2023/09/Bildschirmfoto_2023-09-28_um_16.52.07.png",
  },
  {
    date: "20 фев",
    time: "19:00",
    title: 'Концерт "Музыкальные ритмы города"',
    description:
      "Окунитесь в атмосферу живой музыки с участием популярных исполнителей.",
    image:
      "https://falstaff.b-cdn.net/storage/sites/2/2023/09/Bildschirmfoto_2023-09-28_um_16.52.07.png",
  },
  {
    date: "20 фев",
    time: "19:00",
    title: 'Концерт "Музыкальные ритмы города"',
    description:
      "Окунитесь в атмосферу живой музыки с участием популярных исполнителей.",
    image:
      "https://falstaff.b-cdn.net/storage/sites/2/2023/09/Bildschirmfoto_2023-09-28_um_16.52.07.png",
  },
  {
    date: "20 фев",
    time: "19:00",
    title: 'Концерт "Музыкальные ритмы города"',
    description:
      "Окунитесь в атмосферу живой музыки с участием популярных исполнителей.",
    image:
      "https://falstaff.b-cdn.net/storage/sites/2/2023/09/Bildschirmfoto_2023-09-28_um_16.52.07.png",
  },
  {
    date: "20 фев",
    time: "19:00",
    title: 'Концерт "Музыкальные ритмы города"',
    description:
      "Окунитесь в атмосферу живой музыки с участием популярных исполнителей.",
    image:
      "https://falstaff.b-cdn.net/storage/sites/2/2023/09/Bildschirmfoto_2023-09-28_um_16.52.07.png",
  },
  
];

export function CardNews() {
  const getIsTabletop = () => window.innerWidth >= 768 && window.innerWidth <= 1200;
  const getIsMobile = () => window.innerWidth <= 460;

  const [isTabletop, setIsTabletop] = useState(getIsTabletop());
  const [isMobile, setIsMobile] = useState(getIsMobile());
  const [visibleItems, setVisibleItems] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletop(getIsTabletop());
      setIsMobile(getIsMobile());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShowMore = () => {
    setVisibleItems((prev) => prev + 4);
  };

  const itemsToShow = isMobile ? newsItems.slice(0, visibleItems) : newsItems;

  return (
    <div className="container">
  <div className="card-news">
      <h2>НОВОСТИ</h2>
      <div className="news-row">
        {isTabletop ? (
          <Swiper
            spaceBetween={24}
            loop={true}
            breakpoints={{
              1200: { slidesPerView: 3 },
              1000: { slidesPerView: 3 },
              992: { slidesPerView: 2 },
              786: { slidesPerView: 2 },
            }}
          >
            {newsItems.map((news, index) => (
              <SwiperSlide key={index}>
                <div className="news-card">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="news-image"
                  />
                  <div className="news-content">
                    <h3>{news.title}</h3>
                    <hr />
                    <span className="news-date">
                      {news.date} - {news.time}
                    </span>
                    <p>{
                    news.description.length > 10 
                    ? news.description.substr(0, 30).trim() + '...'
                    : news.description
                    }</p>
                    <button className="news-button">Подробнее</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <>
            {itemsToShow.map((news, index) => (
              <div className="news-card" key={index}>
                <img src={news.image} alt={news.title} className="news-image" />
                <div className="news-content">
                  <h3>{news.title}</h3>
                  <span className="news-date">
                    {news.date} - {news.time}
                  </span>
                  <p>{
                    news.description.length > 10 
                    ? news.description.substr(0, 40).trim() + '...'
                    : news.description
                    }</p>
                  <button className="news-button">Подробнее</button>
                </div>
              </div>
            ))}
            {isMobile && visibleItems < newsItems.length && (
              <button
                className="show-more-button"
                onClick={handleShowMore}
              >
                Добавить еще
              </button>
            )}
          </>
        )}
      </div>
    </div>  
    </div>
  
  );
}