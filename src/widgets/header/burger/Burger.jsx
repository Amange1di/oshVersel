import { useState, useEffect } from 'react';
import HeaderNav from "../headerNav/HeaderNav"
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md";
import "./burger.scss"
import Lang from '../lang/Lang';

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="burger-menu">
        <input
          id="menu__toggle"
          type="checkbox"
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
        />

        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>

        <div className={`menu__box ${isOpen ? 'open' : ''}`} onClick={handleClick}>
          <div className='langg'>

            <Lang />
          </div>
          <HeaderNav />
          <div className="icons">
            <div className="locates">
              <MdOutlineLocationOn size={20} />
            </div>
            <div className="locates">
              <MdOutlinePhone size={20} />
            </div>
            <div className="locates">
              <FaInstagram size={20} />
            </div>
            <div className="locates">
              <FaFacebook size={20} />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Burger