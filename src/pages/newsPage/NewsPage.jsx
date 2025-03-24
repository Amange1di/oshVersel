import { NewsBanner, NewsBooksUpdate ,NewsAdvertisment  } from "../../widgets";


export const NewsPage = () => {
  return (
    <div>
      <NewsBanner />    {/*адаптив готов */}
      <NewsAdvertisment title="Обьявление о мероприятиях"/>
      <NewsBooksUpdate />
      <NewsAdvertisment title="Сми о нас"/>
    </div>
  );
}