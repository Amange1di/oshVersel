import './newsDeteilSection.scss';
import img from '../../../shared/image/imageGeteilSection.png';
export const NewsDeteilSection = () => {
    return (
        <div className="newDeteil">
            <div className="container">
                <h1 className='newDeteil_title'>В Бишкеке открыли первый в мире центр нового формата "Россия с вами"</h1>
                <div className="newDeteil_group">
                    <div className="newDeteil_group_img">
                        <img src={img} alt="" />
                    </div>
                    <div className="newDeteil_group_text">

                        <h2>Описание</h2>
                        <div className='newDeteil_group_text_description'>

                            <p className='newDeteil_group_text_description_part'>Российские дизайнеры создали комфортные условия для проведения лекций, выставок, дискуссионных клубов, тематических занятий и мастер-классов. Все эти мероприятия будут ориентированы прежде всего на подрастающее поколение</p>

                            <p className='newDeteil_group_text_description_part'>Планируется, что до конца года российские ученые, педагоги и разработчики современных средств обучения проведут в центре мастер-классы по физике, биологии, робототехнике для школьников и педагогов. Также будет проведен детский фестиваль научных экспериментов.</p>

                            <p className='newDeteil_group_text_description_part'>Россотрудничество оснастило центр современной эргономичной мебелью. Для детей до 12 лет предусмотрена игровая зона с уникальными "говорящими" книгами и ручками "Знаток", электронными плакатами, интерактивным столиком и конструкторами</p>

                            <p className='newDeteil_group_text_description_part'>В открытии центра приняли участие заместитель министра культуры КР Гульбара Абдыкалыкова, замглавы Россотрудничества Павел Шевцов, библиотекари, учителя, а также лидеры движения соотечественников.</p>

                            <p className='newDeteil_group_text_description_part'>Шевцов отметил, что идея создания центра принадлежит Россотрудничеству.</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}