import ru from '../../../shared/image/image 2 (1).svg';
import kg from '../../../shared/image/image 3.svg';
import { useTranslation } from "react-i18next";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from 'react';
import "./lang.scss"
const Lang = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeLang = () => {
    const newLang = i18n.language === "ru" ? "kg" : "ru";
    i18n.changeLanguage(newLang);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher" style={{ position: 'relative' }}>
      <div className="selected-lang"
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
      >
        <img
          src={i18n.language === "ru" ? ru : kg}
          alt={i18n.language === "ru" ? "Ru" : "Kg"}
          style={{ width: 30, height: 20 }}
        />
        <MdOutlineKeyboardArrowDown
          size={20}
          style={{
            color: "white",
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
            transition: 'transform 0.3s ease'
          }}
        />
      </div>
      {isOpen && (
        <div className="dropdown" >
          <div onClick={handleChangeLang}>
            <img
              src={i18n.language === "ru" ? kg : ru}
              alt={i18n.language === "ru" ? "kg" : "ru"}
              style={{ width: 30, height: 20 }}
            />
            {i18n.language === "ru" ? "kg" : "ru"}
          </div>
        </div>
      )}
    </div>
  )
}

export default Lang;