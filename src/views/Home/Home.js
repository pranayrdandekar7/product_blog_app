import BlogCard from "../../components/BlogCard/BlogCard.js";
import Book from "./../../data.js"
import "./Home.css"


function Home() {
  return (
    <>
      <h1>Books Blog App</h1>
      <div className="card-container">
        {
          Book.map((blogObj, i) => {
            const {
              id,
              title,
              author,
              price,
              description,
              image,
              rating,
              publishDate } = blogObj;

            return (<BlogCard
              key={i}
              id={id}
              title={title}
              author={author}
              price={price}
              description={description}
              image={image}
              rating={rating}
              publishDate={publishDate}
            />
            )
          })
        }
      </div>
    </>
  )
}

export default Home;