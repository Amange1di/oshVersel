import React, { useState } from 'react';
import './professionalPage.scss';
import { Bibliographical ,Methodological,Sidebar ,Multimedia } from '../../widgets';

export const ProfessionalPage = () => {
    const [selected, setSelected] = useState(1);
    
    const categories = [
        {
            id: 1,
            title: 'БИБЛИОГРАФИЧЕСКИЕ ИЗДАНИЯ',
        },
        {
            id: 2,
            title: 'МЕТОДИЧЕСКИЕ ПОСОБИЯ',
        },
        {
            id: 3,
            title: 'МУЛЬТИМЕДИЙНЫЕ ПРОДУКТЫ',
        },
    ];

    return (
        <div className="container">
        <div className="professional-container">
            <div className="professional-content">
                <Sidebar setSelected={setSelected} list={categories} selectedId={selected} />
                <div className="professional-main-content">
                    {selected === 1 && <Bibliographical />}
                    {selected === 2 && <Methodological />}
                    {selected === 3 && <Multimedia />}
                </div>
            </div>
        </div>
        </div>
    );
}
