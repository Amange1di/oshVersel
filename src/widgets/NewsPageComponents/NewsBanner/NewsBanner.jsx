import './newsBanner.scss'
import nenoigirl from '../../../shared/img/books.svg'
import nenoibook from '../../../shared/img/group.svg'
import laptop from '../../../shared/img/laptop.svg'



export const NewsBanner = () => {
    return (
        <div >
            <div className="servicesBanner">
                <div className="container">
                    <h1 className='servicesBanner_title'>
                        Новости
                    </h1>
                    <div className='servicesBanner_group '>
                        <div className=''>
                            <img src={laptop} alt="" className='servicesBanner_group_girl' />
                            <img src={nenoibook} alt="" className='servicesBanner_group_book' />
                            <img src={nenoigirl} alt="" className='servicesBanner_group_glasses' />
                        </div>
                    </div>
                    <p className='servicesBanner_description'>Библиотека имени Токтогула Сатылганова – это не только книги, но и активная работа по развитию культуры, образования и просвещения.  Мы реализуем различные проекты, направленные на популяризацию чтения, поддержку молодежи,  сохранение исторического наследия и развитие цифровых технологий.</p>
                </div>
            </div>
        </div>
    );
}





