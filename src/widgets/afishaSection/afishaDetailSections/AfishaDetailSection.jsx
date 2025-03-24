import imagee from '../../../shared/eventsImg/imagee.png'
import iconca from '../../../shared/eventsImg/iconca.png'
import { MdOutlineCalendarMonth } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { useParams } from 'react-router-dom';
import { events } from '../afishaEvents/AfishaEvents';


import './afishaDetailSection.scss'
export const AfishaDetailSection = () => {
    const { id } = useParams();
    const afisha = events.find((item) => item.id === parseInt(id)); 
    const { image, title, description, date } = afisha;

  return (


    <div className="afishaDetail">
        <div className="container">
             
            <h1 className='afishaDetail_title'>Выставка: {title}</h1>
            <div className="afishaDetail_group">
                <div className="afishaDetail_group_img">
                    <img src={image} alt="" />
                </div>
                <div className="afishaDetail_group_text">
                    <h3><img src={iconca} alt="" />Выставка</h3>
                    <h3> <MdOutlineCalendarMonth />{date}</h3>
                    <h3> <LuMapPin />Музей Изобразительных Искусств им. Г. Айтиева</h3>
                    <h2>Описание</h2>
                    <div className='afishaDetail_group_text_description'>
                        <p className='afishaDetail_group_text_description_part'>{description}</p>

                        <p className='afishaDetail_group_text_description_part'>Планируется, что до конца года российские ученые, педагоги и разработчики современных средств обучения проведут в центре мастер-классы по физике, биологии, робототехнике для школьников и педагогов. Также будет проведен детский фестиваль научных экспериментов.</p>

                        <p className='afishaDetail_group_text_description_part'>Россотрудничество оснастило центр современной эргономичной мебелью. Для детей до 12 лет предусмотрена игровая зона с уникальными "говорящими" книгами и ручками "Знаток", электронными плакатами, интерактивным столиком и конструкторами</p>

                        <p className='afishaDetail_group_text_description_part'>В открытии центра приняли участие заместитель министра культуры КР Гульбара Абдыкалыкова, замглавы Россотрудничества Павел Шевцов, библиотекари, учителя, а также лидеры движения соотечественников.</p>

                        <p className='afishaDetail_group_text_description_part'>Шевцов отметил, что идея создания центра принадлежит Россотрудничеству.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
