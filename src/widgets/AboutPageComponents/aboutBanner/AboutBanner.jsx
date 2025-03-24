import './aboutBanner.scss'
import Ellipse4 from '../../../shared/libraryImages/Ellipse 4.png'
import Ellipse6 from '../../../shared/libraryImages/Ellipse 6.png'
import Ellipse5 from '../../../shared/libraryImages/Ellipse 5.png'


export const AboutBanner = () => {
    return (
        <div className='banner-container container'>
            <div className='banner-container-headline'>
                <div className='banner-container-headline-parts'>
                    <h1 className='banner-container-headline-parts-first-title'>История, которая </h1>
                    <h3 className='banner-container-headline-parts-second-title'>продолжает жить веками</h3>
                    <p className='banner-container-headline-parts-description'>Библиотека имени Токтогула Сатылганова – это культурный и образовательный центр, 
                    предлагающий широкие возможности для обучения, саморазвития и культурного обмена. 
                    Мы стремимся быть местом, где каждый может найти ресурсы, которые помогут развиваться, 
                    учиться и получать новые знания.</p>
                </div>
            </div>
            <div className='banner-container-images'>
                <img className='banner-container-images-first-img' src={Ellipse4} alt="" />
                <img className='banner-container-images-second-img' src={Ellipse5} alt="" />
                <img className='banner-container-images-third-img' src={Ellipse6} alt="" />
            </div>
        </div>
        
    );
}

