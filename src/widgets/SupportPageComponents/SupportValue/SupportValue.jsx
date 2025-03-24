import './SupportValue.scss';
import science from '../../../shared/img/science.png';
import star from '../../../shared/img/star.png';

export function SupportValue() {

    const item = [
        {
            id: 1,
            title: 'ДОСТУПНОСТЬ',
            image: star,
            description: 'Знания должны быть доступны каждому, независимо от возраста, социального статуса и места проживания.'
        },
        {
            id: 2,
            title: 'ОБРАЗОВАНИЕ',
            image: star,
            description: 'Мы поддерживаем стремление к саморазвитию, предоставляя широкий спектр образовательных ресурсов.'
        },
        {
            id: 3,
            title: 'СОТРУДНИЧЕСТВО',
            image: star,
            description: 'Работаем с партнерами и организациями для развития культуры и науки.'
        },
        {
            id: 4,
            title: 'ИННОВАЦИИ',
            image: star,
            description: 'Знания должны быть доступны каждому, независимо от внедряем современные технологии.'
        },
    ];


    return (
        <section>
            <div className="support_value">
                <h1 className="title_value">ЦЕННОСТИ БИБЛИОТЕКИ</h1>
                <div className="value__container">
                    {
                        item.map((item) => (
                            <div key={item.id} className="value__block">
                                <img className="value__block-image" src={science} alt="" />
                                <h3 className="value__block-title">{item.title}</h3>
                                <p className="value__block-description">{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};