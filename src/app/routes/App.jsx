import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '../styles/app.scss';
import {
  HomePage,
  AfishaPage,
  AfishaDetail,
  ServicesPage,
  ProjectPage,
  ProjectDetail,
  NewsPage,
  NewsDetail,
  CatalogPage,
  ReaderPage,
  AboutPage,
  SupportPage,
  ElectronicPage,
  ProfessionalPage
} from '../../pages';
import { Footer, Header, Breadcrumb } from '../../widgets';

export const routesArr = [
  {
    path: '/',
    title: "Главная",
    element: <HomePage />
  },
  {
    path: '/afisha',
    title: "Афиша мероприятий",
    element: <AfishaPage />
  },
  {
    path: '/afisha-detail/:id',
    title: "Афиша мероприятий",
    element: <AfishaDetail />
  },
  {
    path: '/services',
    title: "Услуги",
    element: <ServicesPage />
  },
  {
    path: '/project',
    title: "Наши проекты",
    element: <ProjectPage />
  },
  {
    path: '/project-detail/:id',
    title: "Детали проекта",
    element: <ProjectDetail />
  },
  {
    path: '/news',
    title: "Новости",
    element: <NewsPage />
  },
  {
    path: '/news-detail/:id',
    title: "Новости",
    element: <NewsDetail />
  },
  {
    path: '/catalog',
    title: "Каталог",
    element: <CatalogPage />
  },
  {
    path: '/reader',
    title: "Читателям",
    element: <ReaderPage />
  },
  {
    path: '/about',
    title: "О библиотеки",
    element: <AboutPage />
  },
  {
    path: '/support',
    title: "Поддержать библеотеку",
    element: <SupportPage />
  },
  {
    path: '/electronic',
    title: "Электронная библиотека",
    element: <ElectronicPage />
  },
  {
    path: '/professional',
    title: "Профисионалная деятелность",
    element: <ProfessionalPage />
  },
];

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Breadcrumb routes={routesArr} />
      <Routes>
        {routesArr.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
