import { Link } from "react-router-dom"
import "./BlogCard.css"

function BlogCard({
    id,
    image,
    title,
    description,
    author,
    price,
    rating
}) {
    return (
        <>

            <div className="blog-card">
                <img src={image}
                    alt="book-image"
                    className="card-image"
                />
                <span className="card-title">{title}</span>
                <span className="card-description">{description.substring(0, 70)}...</span>
                <span className="card-author">By {author}</span>
                <span className="card-price">{price} /-</span>
                <span className="card-rating">{rating}⭐</span>

                <Link to={`/blog/${id}`}>
                    <button className="card-btn">Add To Card</button>
                    </Link >
            </div>

        </>
    )
}


export default BlogCard  