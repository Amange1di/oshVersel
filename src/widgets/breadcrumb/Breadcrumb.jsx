import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./breadcrumb.scss"

export const Breadcrumb = ({ routes }) => {
  const location = useLocation();
  const { t } = useTranslation();

  if (location.pathname === '/') return null;

  const paths = location.pathname.split("/").filter(Boolean);

  const titleTranslations = {
    "/about": "О библиотеке",
    "/support": "Поддержать библиотеку",
    "/news": "Новости",
    "/services": "Услуги",
    "/catalog": "Каталог",
    "/afisha": "Афиша мероприятий",
    "/professional": "Профессиональная деятельность",
    "/reader": "Читателям",
    "/electronic": "Электронная библиотека",
    "/project": "Наши проекты"
  };

  return (
    <nav className=" container breadcrumb">
      <Link to="/" className="breadcrumb__link">{t("ГЛАВНАЯ СТРАНИЦА")}</Link>
      {paths.length > 0 && <span className="breadcrumb__separator">{'>'}</span>}
      {paths.map((path, index) => {
        const href = "/" + paths.slice(0, index + 1).join("/");
        const isLast = index === paths.length - 1;

        const route = routes.find(r => {
          const routePath = r.path.split('/');
          const currentPath = href.split('/');

          if (routePath.length !== currentPath.length) return false;

          return routePath.every((segment, i) =>
            segment.startsWith(':') || segment === currentPath[i]
          );
        });

        if (!route?.title) return null;

        const translatedTitle = t(titleTranslations[href] || route.title);

        return (
          <span key={href} className={isLast ? "breadcrumb__active" : "breadcrumb__link"}>
            {isLast ? translatedTitle : <Link to={href}>{translatedTitle}</Link>}
          </span>
        );
      })}
    </nav>
  );
}