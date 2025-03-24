import './management.scss'
import managementFirstImage from '../../../shared/libraryImages/Group 1261156094.png'
import managementSecondImage from '../../../shared/libraryImages/Group 1261156094 (1).png'
import managementThirdImage from '../../../shared/libraryImages/image (2).png'
import managementFourthImage from '../../../shared/libraryImages/image (3).png'


export const Management = () => {
    return (
        <div className='management-container container'>
            <h1 className='management-container-title' >РУКОВОДСТВО</h1>
            <div className='management-container-cards' >
                <div className='management-container-cards-card' >
                    <img className='management-container-cards-card-img' src={managementFirstImage} alt="" />
                    <h3 className='management-title' >Директор библиотеки</h3>
                    <p className='management-description'>Иванова Елена Сергеевна</p>
                </div>
                <div className='management-container-cards-card'>
                    <img className='management-container-cards-card-img' src={managementSecondImage} alt="" />
                    <h3 className='management-title'>Заместитель Директора</h3>
                    <p className='management-description'>Петрова Мария Алексеевна</p>
                </div>
                <div className='management-container-cards-card'>
                    <img className='management-container-cards-card-img' src={managementThirdImage} alt="" />
                    <h3 className='management-title'>Главный Библиотекарь</h3>
                    <p className='management-description'>Смирнов Александр Владимирович</p>
                </div>
                <div className='management-container-cards-card'>
                    <img className='management-container-cards-card-img' src={managementFourthImage} alt="" />
                    <h3 className='management-title'>Главный Библиотекарь</h3>
                    <p className='management-description'>Смирнов Александр Владимирович</p>
                </div>
            </div>
        </div>
    );
}

