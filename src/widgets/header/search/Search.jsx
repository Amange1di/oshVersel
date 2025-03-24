import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import "./search.scss"

const Search = () => {
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  return (
    <div className="search">
      <div className="search_desktop">
        <input type="text" placeholder="Поиск" />
        <button>
          <CiSearch />
        </button>
      </div>
      <div className="search_icon" onClick={() => setIsOpenMobile(true)}>
        <CiSearch />
      </div>
      {isOpenMobile && (
        <div className="search_mob">
          <button className="close-btn" onClick={() => setIsOpenMobile(false)}>
            <IoMdClose />
          </button>
          <div className="search_mob_input">
            <CiSearch className="search-icon" />
            <input type="text" placeholder="Поиск" />
          </div>
          <div className="quick_links">
            <p>Быстрая ссылка</p>
            <div className="links">
              <Link to="/news">Новости</Link>
              <Link to="/services">Услуги</Link>
              <Link to="/catalog">Каталог</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Search