import './banner.scss'
import img from '../../../shared/images/Rectangle.png'

export const Banner = () => {
    return (
        <div className="banner container">

          <div className="banner-row">
             <h1 className='banner-text1'>История, которая продолжает жить веками</h1>
 
             <p className='banner-text2'>Библиотека имени Токтогула Сатылганова – это 
             культурный и образовательный центр, предлагающий широкие 
             возможности для обучения, саморазвития и культурного обмена. 
             Мы стремимся быть местом, где каждый 
             может найти ресурсы, которые помогут развиваться, учиться и 
             получать новые знания.</p>

             <button className='banner-btn'>Подробнее</button>

            </div> 

             <img className='banner-img' src={img} alt="" />

        </div>

      
    );
}


