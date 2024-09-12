import "./BlogView.css"
import { useParams } from "react-router-dom"
import book from "../../data";

function BlogView() {

  const {id} = useParams() ;

  const selectData = book.find((blogObject) => blogObject.id === id);

  console.log(selectData);
  

  return (
    <>
    <div>
      <h1>{selectData.title}</h1>
    </div>
    </>
  )
}

export default BlogView