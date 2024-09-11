import "./BlogCard.css"

    function BlogCard ({
        id,
        image,
        title,
        description,
        author
    })
   
      {
  return (
   <>
  
    <div className="blog-card">
        <img src={image} 
        alt="book-image"
        className="card-image"
        />
        <span className="card-title">{title}</span>
        <span className="card-description">{description.substring(0,80)}...</span>
        <span className="card-author">By {author}</span>

        <button className="card-btn">Buy Now</button>
    </div>
    
   
   </>
  )
}


export default BlogCard  