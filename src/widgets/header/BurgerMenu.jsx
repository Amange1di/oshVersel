import React, { useState } from 'react';
import './burgerMenu.scss';
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className={`burger-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div className="burger-bar"></div>
                <div className="burger-bar"></div>
                <div className="burger-bar"></div>
            </div>

            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <NavLink className="links">О библиотеке</NavLink>
                    <NavLink className="links">Поддержать библиотеку</NavLink>
                    <NavLink className="links">Новости</NavLink>
                    <NavLink className="links">Услуги</NavLink>
                    <NavLink className="links">Каталог</NavLink>
                    <NavLink className="links">Афиша мероприятий</NavLink>
                    <NavLink className="links">Профессиональная деятельность</NavLink>
                    <NavLink className="links">Читателям</NavLink>
                    <NavLink className="links">Проекты</NavLink>
                </ul>

                <div className="icons">
                    <div className="locates">
                        <MdOutlineLocationOn />
                    </div>
                    <div className="locates">
                        <MdOutlinePhone />
                    </div>
                    <div className="locates">
                        <FaInstagram />
                    </div>
                    <div className="locates">
                        <FaFacebook />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;
