import { Link } from "react-router-dom";
import "./CardAfisha.scss";

export const CardAfisha = ({id, image, title, date, description, tablet }) => {
  return (
    <div className="container-card__parent">
      <div className="container-card__parent-content">
        <div className="container-card__parent-content-left">
          <div className="container-card__parent-content-left-image">
            <img src={image} alt={title} />
          </div>
        </div>

        <div className="container-card__parent-content-right">
          <p className="container-card__parent-content-right-date">{date}</p>
          <h2 className="container-card__parent-content-right-title">{title}</h2>
          <p className="container-card__parent-content-right-description-default">
            {tablet
              ? description.substr(0, 120).trim() + '...'
             : description}
          </p>
        </div>
      </div>
      <p className="container-card__parent-content-right-description-detail">
        {description.substr(0, 110).trim() + '...' }
      </p>
      <button className="container-card__parent-btn">
        <Link to={`/afisha-detail/${id}`}>Подробнее</Link>
      </button>
    </div>
  );
};