import './rating.scss';
import img from '../../../shared/images/image(1).png';
import img2 from '../../../shared/images/image(2).png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';

export const Rating = () => {
    const newsItems = [
        { date: "(01)", title: "Иван Иванов (75 книг за месяц)." },
        { date: "(02)", title: "Иван Иванов (75 книг за месяц)." },
        { date: "(03)", title: "Иван Иванов (75 книг за месяц)." },
        { date: "(04)", title: "Иван Иванов (75 книг за месяц)." },
        { date: "(05)", title: "Иван Иванов (75 книг за месяц)." },
        { date: "(06)", title: "Иван Иванов (75 книг за месяц)." },
    ];

    const books = [
        {
            date: "(01)",
            title: 'Книга: "История цивилизаций". Автор: Джон Доу.',
            take: 'Код цивилизаций" — 500 прочтений'
        },
        {
            date: "(02)",
           title: 'Книга: "История цивилизаций". Автор: Джон Доу.',
            take: 'Код цивилизаций" — 500 прочтений'
        },
        {
            date: "(03)",
            title: 'Книга: "История цивилизаций". Автор: Джон Доу.',
            take: 'Код цивилизаций" — 500 прочтений'
        },
        {
            date: "(04)",
            title: 'Книга: "История цивилизаций". Автор: Джон Доу.',
            take: 'Код цивилизаций" — 500 прочтений'
        },
        {
          date: "(05)",
          title: 'Книга: "История цивилизаций". Автор: Джон Доу.',
          take: 'Код цивилизаций" — 500 прочтений'
        },
        {
          date: "(06)",
          title: 'Книга: "История цивилизаций". Автор: Джон Доу.',
          take: 'Код цивилизаций" — 500 прочтений'
       }
    ];

    return (
        <div className='rating container'>
            <h1 className='rating-text1'>Рейтинг читателей (топ-10)</h1>
            <br />

            <Swiper 
            spaceBetween={20} 
            slidesPerView={3.5} 
            grabCursor={true}
            breakpoints={{
              1200: { slidesPerView:3.5},
              992: { slidesPerView: 3},
              890: { slidesPerView: 2.3, 
                   spaceBetween:50
              },
         
              670: { slidesPerView: 1.7},
              570: { slidesPerView: 1.8},
              450: { slidesPerView: 1.3} ,
              350: { slidesPerView: 1.1},
              250: { slidesPerView: 1} ,
              150: { slidesPerView: 1} ,
              50: { slidesPerView: 1} 
              
            }}
             >
                {newsItems.map((news, index) => (
                    <SwiperSlide key={index}>
                        <div className="rating-row">
                            <img className="rating-img" src={img} alt="" />
                            <div className='rating-col'>
                                <span className="rating-date">{news.date}</span>
                                <h3 className="rating-title">{news.title}</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <br /><br />
            <h1 className='rating-text2'>Рейтинг книг (топ-10)</h1>
            <br />

            <Swiper 
            spaceBetween={20} 
            slidesPerView={3.5}  
            grabCursor={true}
            breakpoints={{
                1200: { slidesPerView:3.5},
                992: { slidesPerView: 3},
                890: { slidesPerView: 2.3, 
                     spaceBetween:50
                },
                // 865: { slidesPerView: 1} ,
                // 770: { slidesPerView: 2 } ,
                670: { slidesPerView: 1.7},
                570: { slidesPerView: 1.8},
                450: { slidesPerView: 1.3} ,
                350: { slidesPerView: 1.1},
                250: { slidesPerView: 1} ,
                150: { slidesPerView: 1} ,
                50: { slidesPerView: 1} 

            }}
            >
                {books.map((book, index) => (
                    <SwiperSlide key={index}>
                        <div className="rating-box">
                            <img className='rating-img2' src={img2} alt="" />
                            <div className="rating-col-1">
                                <span className="rating-data">{book.date}</span>
                                <h3 className='rating-title1'>{book.title}</h3>
                                <br />
                                <h3 className='rating-take'>{book.take}</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};