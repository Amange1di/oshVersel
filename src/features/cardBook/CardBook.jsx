

import "./cardBook.scss";

export const CardBook = ({ image, author, description, title }) => {
  return (

    <div className="cardBook">
      <div className="desktop_view">
        <div className="cardBook_img">
          <img src={image} alt="" />
        </div>
        <div className="cardBook_text">
          <h2 className="cardBook_text_name">📖 НАЗВАНИЕ КНИГИ: {title}</h2>
          <h4 className="cardBook_text_author">✍️ Автор: {author}</h4>
          <p className="cardBook_text_description">
            <span>📜 Описание:</span> {description}
          </p>
        </div>
        <div className="cardBook_btn">
          <button className="cardBook_btn_read">читать</button>
          <button className="cardBook_btn_download">скачать</button>
        </div>
      </div>

      <div className="mobile_view">
        <div className="cardBook_top">
          <div className="cardBook_img">
            <img src={image} alt="" />
          </div>

          <div className="cardBook_text">
            <h4 className="cardBook_text_author">✍️ Автор: {author}</h4>
            <h2 className="cardBook_text_name">📖 НАЗВАНИЕ КНИГИ: {title}</h2>
          </div>
        </div>
        <p className="cardBook_text_description">
          <span>📜 Описание:</span> {description}
        </p>
        <div className="cardBook_btn">
          <button className="cardBook_btn_read">читать</button>
          <button className="cardBook_btn_download">скачать</button>
        </div>
      </div>
    </div>

  )
}
