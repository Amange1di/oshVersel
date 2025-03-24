import './activities.scss'
import vector1 from '../../../shared/libraryImages/hugeicons_ai-innovation-03.png'
import vector2 from '../../../shared/libraryImages/Vector (1).png'


export const Activities = () => {
    const cards = [
        {
            id: 1,
            title: 'Управление качеством услуг',
            description: 'Aкты и регламенты помогают стандартизировать процессы внутри библиотеки, чтобы обеспечить высокий уровень обслуживания пользователей и соответствие всем требованиям.'
        },
        {
            id: 2,
            title: 'Соблюдение законодательства',
            description: 'Эти документы позволяют библиотеке действовать в рамках закона, соблюдая как национальные, так и международные нормы в области интеллектуальной собственности.'
        },
        {
            id: 3,
            title: 'Эффективность работы',
            description: 'Регулирующие акты помогают оптимизировать процессы работы с читателями, улучшая доступ к материалам, условия для образовательных и культурных инициатив.'
        },
        {
            id: 4,
            title: 'Прозрачность и ответственность',
            description: 'Соблюдение норм и процедур способствует открытости работы библиотеки, повышает доверие пользователей и дает возможность отслеживать эффективность работы каждого отдела.'
        }
    ]
    return (
        <div className='activities-container container' >
            <h1 className='activities-container-title' >АКТЫ, РЕГУЛИРУЮЩИЕ ДЕЯТЕЛЬНОСТЬ</h1>
            <div className='activities-container-cards' >
            {
                    cards.map((cards) => (
                        <div className='activities-container-cards-card' >
                            <h3 className='activities-container-cards-card-title'>{cards.title}</h3>
                            <p className='activities-container-cards-card-description'>{cards.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

