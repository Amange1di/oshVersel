import { Link } from "react-router-dom"
import "./cardProjects.scss"
export const CardProjects = ({ img, title, description, id }) => {

    console.log(id)
    return (
        <div>
            <div className="cardProjects">
                <img src={img} alt="" />
                <h4><Link to={`/project-detail/${id}`}>{title}  </Link>
                </h4>
                <p>{description}</p>
            </div>
        </div>
    )
}
