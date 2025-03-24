import Rectangle from '../../../shared/img/Rectanglel.jpg';
import rectanglebanner from '../../../shared/img/rectanglebanner.png';
import './SupportBanner.scss';

export const SupportBanner = () => {
  const supportData = [
    {
      id: 1,
      title: 'ПОДДЕРЖИТЕ  РАЗВИТИЕ  ЗНАНИЙ И  КУЛЬТУРЫ',
      image: rectanglebanner,
      description: 'Библиотека имени Токтогула Сатылганова – это не только хранилище знаний, но и динамично развивающееся образовательное и культурное пространство. Поддержка библиотеки играет ключевую роль в ее развитии, позволяя нам предоставлять читателям доступ к ценным ресурсам, организовывать мероприятия и внедрять новые технологии.'
    }
  ];

  return (
    <div className="support">
      {supportData.map((item) => (
        <div className="rectangle" key={item.id}>
          <div className="support_text">
            <h1 className="title_rectangle">{item.title}</h1>
          </div>
          <div className="rectangle_sup">
            <img className="rectangle_img" src={item.image} alt="" />
            <p className="rectangle_p">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
