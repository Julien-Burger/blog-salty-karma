import { useNavigate } from "react-router-dom";

import "./style.scss";
import { getDateSince } from "../../utils/common";

function BlogCard({ id, type, date, blogNumber, title, description }) {
    const navigate = useNavigate();

    const handleClickBlog = () => {
        navigate(`/blog/${id}`);
    };

    return (
        <article onClick={handleClickBlog}>
            <div className="blogHeader">
                <div>
                    <p className="blogType">{type}</p>
                    <p className="dateSince">{getDateSince(date)}</p>
                </div>

                <span className="blogNumber">Blog N°{blogNumber}</span>
            </div>

            <h2 className="blogTitle">{title}</h2>

            <p className="blogDescription">{description}</p>
        </article>
    );
}

export default BlogCard;
