import logo from '../../shared/image/Group.svg';
import "./header.scss"
import Search from './search/Search';
import { FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector, } from 'react-redux';
import { VisuallyImpaired } from '../../entities/VisuallyImpaired/VisuallyImpaired';
import { activeMode, deactivateMode } from '../../app/store/reducers/visually';
import HeaderNav from './headerNav/HeaderNav';
import Lang from './lang/Lang';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md";
import Burger from './burger/Burger';
import { useState, useEffect } from 'react';

export const Header = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.visually);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mainTextSpeech = (text) => {
    window.speechSynthesis.cancel();
    const talk = new SpeechSynthesisUtterance(text);
    talk.lang = 'ru-RU';
    window.speechSynthesis.speak(talk);
  };

  const handleVisuallyImpairedToggle = () => {
    if (active) {
      dispatch(deactivateMode());
      setTimeout(() => mainTextSpeech('Режим для слабовидящих выключен'), 100);
    } else {
      dispatch(activeMode());
      setTimeout(() => mainTextSpeech('Режим для слабовидящих включен'), 100);
    }
  };

  return (
    <div className="">
      {active && <VisuallyImpaired mainTextSpeech={mainTextSpeech} />}
      <div className='header'>
        <div className="header container">
          <div className="header_row">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            {!isMobile ? (
              <>
                <div className="tools">
                  <Search />
                  <button className='header_eye' onClick={handleVisuallyImpairedToggle}>
                    <FaEyeSlash color='#105B60' className='eye' />
                  </button>
                </div>
                <HeaderNav className="header_nav-top" start={0} end={5} />
              </>
            ) : (
              <div className="mobile-tools">
                <div className='lang'>

                <Lang  />
                </div>
                <button className='header_eye' onClick={handleVisuallyImpairedToggle}>
                  <FaEyeSlash color='#105B60' className='eye' />
                </button>
                <Search />
                <Burger />
              </div>
            )}
          </div>
          {!isMobile && (
            <div className="header_nav-bottom">
              <HeaderNav className="header_nav-bottom-links" start={5} end={10} />
              <div className="header_right">
                <Lang />
                <div className='header_icon'>
                  <div className='locate'><MdOutlineLocationOn /></div>
                  <div className='locate'><MdOutlinePhone /></div>
                  <div className='locate'><FaInstagram /></div>
                  <div className='locate'><FaFacebook /></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
