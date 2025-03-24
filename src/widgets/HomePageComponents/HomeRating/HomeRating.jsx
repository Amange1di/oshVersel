import  { useState } from "react";
import "./HomeRating.scss";

const readers = [
  { id: "02", name: "Иван Иванов", books: " (75 книг за месяц).", image: "https://www.pravilamag.ru/upload/img_cache/01e/01e8a856c03c4553a3e7da221f2af2ec_cropped_510x309.webp" },
  { id: "01", name: "Иван Иванов", books: " (75 книг за месяц).", image: "https://www.pravilamag.ru/upload/img_cache/01e/01e8a856c03c4553a3e7da221f2af2ec_cropped_510x309.webp" },
  { id: "03", name: "Иван Иванов", books: " (75 книг за месяц).", image: "https://www.pravilamag.ru/upload/img_cache/01e/01e8a856c03c4553a3e7da221f2af2ec_cropped_510x309.webp" },
];

const books = [
  { id: "02", title: "Книга: История цивилизаций.", author: "Автор: Джон Доу", votes: "Код цивилизаций — 500 прочтений", image: "https://avatars.dzeninfra.ru/get-zen_doc/9852052/pub_64b4f692338eaf5590d9975e_64b4f7546c48c6430dd9352c/scale_1200" },
  { id: "01", title: "Книга: История цивилизаций.", author: "Автор: Джон Доу", votes: "Код цивилизаций — 500 прочтений", image: "https://avatars.dzeninfra.ru/get-zen_doc/9852052/pub_64b4f692338eaf5590d9975e_64b4f7546c48c6430dd9352c/scale_1200" },
  { id: "03", title: "Книга: История цивилизаций.", author: "Автор: Джон Доу", votes: "Код цивилизаций — 500 прочтений", image: "https://avatars.dzeninfra.ru/get-zen_doc/9852052/pub_64b4f692338eaf5590d9975e_64b4f7546c48c6430dd9352c/scale_1200" },
];

export function HomeRating() {
  const [activePeople, setActivePeople] = useState("01");
  const [activeBooks, setActiveBooks] = useState("01");

  const handleActivePeople = (id) => {
    setActivePeople(id);
  };

  const handleActiveBooks = (id) => {
    setActiveBooks(id);
  };

  return (
    <main className="container">
      <section className="rating">
        <h2 className="rating__title">Рейтинг читателей (ТОП-3)</h2>
        <div className="rating__grid">
          {readers.map((item) => (
            <article
              key={item.id}
              onClick={() => handleActivePeople(item.id)}
              className={`rating__card ${activePeople === item.id ? "rating__card--active" : ""}`}
            >
              <div className="rating__card-image">
              <img src={item.image} alt={item.name}  />
              </div>
              <h3 className="rating__card-id">({item.id})</h3>
              <p className="rating__card-info">{item.name} {item.books}</p>
            </article>
          ))}
        </div>

        <h2 className="rating__title">Рейтинг книг (ТОП-3)</h2>
        <div className="rating__grid">
          {books.map((item) => (
            <article
              key={item.id}
              onClick={() => handleActiveBooks(item.id)}
              className={`rating__card ${activeBooks === item.id ? "rating__card--active" : ""}`}
            >
              <div className="rating__card-image">
              <img src={item.image} alt={item.title}  />
         
              </div>
              <h3 className="rating__card-id">({item.id})</h3>
              <div className="rating__card-content">
                <p className="rating__card-title">{item.title}</p>
                <p className="rating__card-author">{item.author}</p>
              </div>
              <p className="rating__card-votes">{item.votes}</p>
            </article>
          ))}
        </div>
      </section>
    </main>

  );
}