import image from '../../../shared/homeImages/image.png';

import "./HomeBanner.scss";

export function HomeBanner() {
  const banner = {
    images: [
      {
        id: 1,
        image: image
      },
      {
        id: 2,
        image: image
      },
      {
        id: 3,
        image: image
      },
      {
        id: 4,
        image: image
      },
      {
        id: 5,
        image: image
      },
    ],
    texts: [
      {
        id: 1,
        title: 'ОТКРЫВАЙ КНИГУ – ОТКРЫВАЙ МИР',
        description: `Добро пожаловать в библиотеку имени Токтогула Сатылганова – место, где книги
          открывают двери в мир знаний и вдохновения. Наш фонд включает разнообразную
          литературу – от классики до современных бестселлеров, а также электронные ресурсы
          для учебы и досуга. Мы создаем уютное пространство для чтения, развития и
          творчества, регулярно проводим лекции, мастер-классы и встречи с авторами. Каждая
          книга – это ключ к новым открытиям, и мы рады делиться ими с вами!
          `
      }
    ]
  };


  return (
    <div className="home-banner">
      <div className="container">
      <div className="home-banner-images">
       {
        banner.images.map((item) => (
          <img key={item.id} src={item.image} alt="image" />
        ))
       }
      </div>
      <div className="home-banner-text">
        {
          banner.texts.map((item) => (
            <div className='home-banner-text-block' key={item.id}>
               <h1>{item.title}</h1>
               <p>{item.description}</p>
            </div>
          ))
        }
      </div>
    </div>
    </div>

  );
}

export default HomeBanner;