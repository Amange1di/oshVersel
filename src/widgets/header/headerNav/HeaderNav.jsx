import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./headerNav.scss"
const headerMenu = [
    { name: "О библиотеке", path: "/about" },
    { name: "Поддержать библиотеку", path: "/support" },
    { name: "Новости", path: "/news" },
    { name: "Услуги", path: "/services" },
    { name: "Каталог", path: "/catalog" },
    { name: "Афиша мероприятий", path: "/afisha" },
    { name: "Профессиональная деятельность", path: "/professional" },
    { name: "Читателям", path: "/reader" },
    { name: "Электронная библиотека", path: "/electronic" },
    { name: "Наши проекты", path: "/project" }

];

const HeaderNav = ({ className, start = 0, end }) => {
    const { t } = useTranslation();
    const menuItems = end ? headerMenu.slice(start, end) : headerMenu;

    return (
        <nav className={`headerNav ${className || ''}`}>
            {menuItems.map((page) => (
                <NavLink
                    key={page.name}
                    to={page.path}
                    className="headerNav_link"
                >
                    {t(page.name)}
                </NavLink>
            ))}
        </nav>
    );
};

export default HeaderNav