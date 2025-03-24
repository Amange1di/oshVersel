import './structure.scss'
import rectangle from '../../../shared/libraryImages/Rectangle 650.png'

export const Structure = () => {
    return (
        <div className='structure-container container' >
            <h1 className='structure-container-title'>СТРУКТУРА БИБЛЕОТЕКИ</h1>
            <div>
                <img className='structure-container-img' src={rectangle} alt="" />
            </div>
        </div>
    );
}

