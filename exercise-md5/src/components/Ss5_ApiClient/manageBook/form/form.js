import { useParams, Link, useNavigate } from "react-router-dom";
import "./form.css";
import { useEffect, useState } from "react";
import axios from "axios";
function Form() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({});
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    !id &&
      axios
        .post("http://localhost:3000/book", book)
        .then((data) => {
          console.log("Da vao");
          alert("Thêm mới thành công !!");
        })
        .catch((error) => console.log(error));
    id &&
      axios
        .put("http://localhost:3000/book/" + id, book)
        .then((data) => {
          alert("Chỉnh sửa thành công !!");
        })
        .catch((error) => console.log(error));
    navigate("/");
  };
  useEffect(() => {
    id &&
      axios
        .get("http://localhost:3000/book/" + id)
        .then((data) => setBook(data.data));
  }, []);
  return (
    <>
      <Link to="/" className="btn btn-warning">
        Quay lại home
      </Link>
      <form>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={book.title || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Quantity</label>
          <input
            type="text"
            name="quantity"
            value={book.quantity || ""}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-success" onClick={handleSubmit}>
          {book.id == undefined ? "Add" : "Edit"}
        </button>
      </form>
    </>
  );
}

export default Form;
