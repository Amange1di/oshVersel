import { faImage } from "@fortawesome/fontawesome-free-regular";
import {
  faMinus,
  faMinusCircle,
  faVolumeOff,
} from "@fortawesome/fontawesome-free-solid";
import {
  faCircleHalfStroke,
  faGear,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  activeSpeech,
  darkPictures,
  deactivateMode,
  decreaseFontSize,
  handleThemeChange,
  hidePictures,
  increaseFontSize,
  setHide,
  setShow,
  showPictures,
  unplugSpeech,
} from "../../app/store/reducers/visually";
import Modal from "./Modal";

export const VisuallyImpaired = ({ mainTextSpeech }) => {
  const { hide, speech } = useSelector((state) => state.visually);
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    if (speech) {
      const allText = document.body.innerText;
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(allText);
      utterance.lang = "ru-RU";
      window.speechSynthesis.speak(utterance);
    } else {
      window.speechSynthesis.cancel(); 
    }
  }, [speech]);

  return (
    <React.Fragment>
      {hide && (
        <div className="visually">
          <div className="visually__content">
            <p>Размер шрифта</p>
            <div>
              <button
                onClick={() => {
                  dispatch(decreaseFontSize());
                  mainTextSpeech("Текст уменьшен");
                }}
              >
                A-
              </button>
              <button
                onClick={() => {
                  dispatch(increaseFontSize());
                  mainTextSpeech("Текст увеличен");
                }}
              >
                A+
              </button>
            </div>
          </div>
          <div className="visually__content" id="visually__content">
            <p>Цвета сайта</p>
            <div>
              <button
                id="visually__content-light"
                onClick={() => {
                  dispatch(handleThemeChange("light"));
                  mainTextSpeech("Цвет сайта черный по белому");
                }}
              >
                ц
              </button>
              <button
                id="visually__content-dark"
                onClick={() => {
                  dispatch(handleThemeChange("dark"));
                  mainTextSpeech("Цвет сайта белый по черному");
                }}
              >
                ц
              </button>
              <button
                id="visually__content-blue"
                onClick={() => {
                  dispatch(handleThemeChange("blue"));
                  mainTextSpeech("Цвет сайта темно-синий по голубому");
                }}
              >
                ц
              </button>
              <button
                id="visually__content-brown"
                onClick={() => {
                  dispatch(handleThemeChange("brown"));
                  mainTextSpeech("Цвет сайта коричневый по бежевому");
                }}
              >
                ц
              </button>
              <button
                id="visually__content-green"
                onClick={() => {
                  dispatch(handleThemeChange("green"));
                  mainTextSpeech("Цвет сайта зеленый по темно-коричневому");
                }}
              >
                ц
              </button>
            </div>
          </div>
          <div className="visually__content">
            <p>Изображения</p>
            <div>
              <button
                onClick={() => {
                  dispatch(showPictures());
                  mainTextSpeech("Изображения включены");
                }}
              >
                <FontAwesomeIcon icon={faImage} />
              </button>
              <button
                onClick={() => {
                  dispatch(hidePictures());
                  mainTextSpeech("Изображения выключены");
                }}
              >
                <FontAwesomeIcon icon={faMinusCircle} />
              </button>
              <button
                onClick={() => {
                  dispatch(darkPictures());
                  mainTextSpeech("Изображения черно-белые");
                }}
              >
                <FontAwesomeIcon icon={faCircleHalfStroke} />
              </button>
            </div>
          </div>
          <div className="visually__content">
            <p>Синтез речи</p>
            <div>
              <button
                onClick={() => {
                  dispatch(unplugSpeech());
                  mainTextSpeech("Синтез речи выключен");
                }}
              >
                <FontAwesomeIcon icon={faVolumeOff} />
              </button>
              <button
                onClick={() => {
                  dispatch(activeSpeech());
                  mainTextSpeech("Синтез речи включен");
                }}
              >
                <FontAwesomeIcon icon={faVolumeHigh} />
              </button>
            </div>
          </div>
          <div className="visually__content">
            <p>Настройки</p>
            <div>
              <button onClick={() => setModal(!modal)}>
                <FontAwesomeIcon icon={faGear} />
              </button>
              <button
                onClick={() => {
                  dispatch(deactivateMode());
                  mainTextSpeech("Обычная версия сайта");
                }}
              >
                Обычная версия
              </button>
              <button
                onClick={() => {
                  dispatch(setHide());
                  mainTextSpeech("Панель скрыта");
                }}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
            </div>
          </div>
          {modal && <Modal mainTextSpeech={mainTextSpeech} setModal={setModal} />}
        </div>
      )}
      {!hide && (
        <button
          onClick={() => {
            dispatch(setShow());
            mainTextSpeech("Панель раскрыта");
          }}
        >
          Показать
        </button>
      )}
    </React.Fragment>
  );
};