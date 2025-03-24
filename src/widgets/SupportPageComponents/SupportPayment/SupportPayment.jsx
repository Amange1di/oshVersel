import './SupportPayment.scss';
import imageA from '../../../shared/img/imageA.png';
import imageB from '../../../shared/img/imageB.png';
import imageC from '../../../shared/img/imageC.png';

const payment = [
    {
    id: 1,
    phone: "+996 555 555 555", 
    image: imageA
    },
    
    {
    id: 2,
    phone: "+996 555 555 555",
    image: imageB
    },

    {
    id: 3,
    phone: "+996 555 555 555",
    image: imageC
    }
];

export function SupportPayment() {
    return (
        <div>
            <div className="payment">
                <h1 className="title_payment">СПОСОБЫ ОПЛАТЫ</h1>
                <div className="block_payment">
                    {payment.map(({ id, phone, image }) => (
                        <div key={id} className="block_py">
                            <h1 className="payment_text">{phone}</h1>
                            <img className="img_payment" src={image} alt="payment" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
