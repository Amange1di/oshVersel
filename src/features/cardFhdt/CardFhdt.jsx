import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CardFhdt.scss";

export const  CardFhdt = () => {
  const [mobile, setMObile] = useState(window.innerWidth < 460)
  
  useEffect(() => {
    const resizeMobile = () => {
      setMObile(window.innerWidth <= 460)
    }
    window.addEventListener('resize', resizeMobile)
    return () => {
      window.removeEventListener('resize', resizeMobile)
    }

  }, []);
  const cards = [
    {
      title: "КАТАЛОГИ",
      description:
        "Электронные и печатные каталоги содержат широкий выбор книг, научных изданий и цифровых ресурсов.",
      imgSrc: "https://natlibraryrm.ru/wp-content/uploads/2020/04/4860331.jpeg",
      alt: "Каталоги",
      link: '/catalogs'
    },
    {
      title: "ЭЛЕКТРОННАЯ БИБЛИОТЕКА",
      description:
        "Доступ к тысячам электронных книг, научных публикаций и архивных документов в удобном формате.",
      imgSrc: "https://natlibraryrm.ru/wp-content/uploads/2020/04/4860331.jpeg",
      alt: "Электронная библиотека",
      link: '/electronic'
    },
  ];

  return (
    <div className="container">
   <div className="card-fhdt__container">
        <div className="card-fhdt__list">
          {cards.map((item, index) => (
            <div className="card-fhdt__item" key={index}>
              <h2 className="card-fhdt__title">{item.title}</h2>
              <div className="card-fhdt__card">
                <img
                  src={item.imgSrc}
                  alt={item.alt}
                  className="card-fhdt__card-image"
                />
                <div className="card-fhdt__card-content">
                  <div className="card-fhdt__card-content-left">
                    <h3 className="card-fhdt__card-title">{item.title}</h3>
                    <p className="card-fhdt__card-description">
                      {mobile
                    ? item.description.substr(0, 30 ).trim() + '...'
                    : item.description
                    }</p>
                  </div>
                  <div className="card-fhdt__card-content-right">
                    <Link to={item.link} className="card-fhdt__card-button">Подробнее</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   
  );
}