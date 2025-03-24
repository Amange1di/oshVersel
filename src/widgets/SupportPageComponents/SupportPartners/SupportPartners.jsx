import './SupportPartners.scss';
import Sponsors from '../../../shared/img/Sponsors.jpg';

export const SupportPartners = () => {
    return (
        <div>
            <div className="sponsor">
                <h1 className="title_sponsor">ПАРТНЕРЫ</h1>
                <img className="img_sponsor" src={Sponsors} alt="" />
            </div>
        </div>
    );
};