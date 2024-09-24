import "./BlogView.css"
import { useParams } from "react-router-dom"
import book from "../../data";

function BlogView() {

  const { id } = useParams();

  const selectData = book.find((blogObject) => blogObject.id === id);

  console.log(selectData);


  return (
    <>

      <h1 className="blogview-title">{selectData.title}</h1>

      <div className="detail-card-container">
        <div className="image-container">
          <img src={selectData.image} className="Blogview-img" />
        </div>

        <div className="detail-card">
          <ul>

            <li> <h2 className="blog-view-card-title"> Book Name: {selectData.title}</h2></li>
            <li><p>Publish On {selectData.publishDate}</p> </li>
            <li><p>Author : {selectData.author}</p></li>
            <span className="card-description">Description :</span>

            <ul className="descripton-container">
              {selectData.description.length > 1 ? (
                selectData.description.map((element, i) => (
                  <li key={i} className="card-description-item">
                    {element}
                  </li>
                ))
              ) : (
                <p>No element available.</p>
              )}
            </ul>

            <span className="offer">OFFER FOR YOU  : 100 Rs off on your First Order </span>
            <p className="price">
              Price :<del className="del-price">{selectData.price}  </del>{selectData.price - 100}

            </p>

          </ul>
        </div>

      </div>
      <button className="btn">Buy now</button>

    </>
  )
}

export default BlogView