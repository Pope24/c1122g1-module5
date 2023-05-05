import { useEffect, useState } from "react";
import Form from "./form/form";
import "./manageBook.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { replace } from "formik";
function ManageBook() {
  const [books, setBooks] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [bookDelete, setBookDelete] = useState({});
  const navigate = useNavigate();
  const handleDeleteBook = (id) => {
    axios
      .delete("http://localhost:3000/book/" + id)
      .then((data) => setIsDelete(!isDelete))
      .catch((error) => console.log(error));
    navigate("/");
  };
  useEffect(() => {
    axios.get("http://localhost:3000/book").then((data) => setBooks(data.data));
  }, [isDelete]);
  return (
    <>
      <div className="d-flex justify-content-between">
        <h3>Library</h3>
        <Link to="/add-book" className="btn btn-success">
          Add a new book
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Quantity</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {books.map((book) => {
            return (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.quantity}</td>
                <td>
                  <Link
                    to={"/edit-book/" + book.id}
                    className="btn btn-warning"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => {
                      console.log(1);
                      setBookDelete({
                        id: book.id,
                        title: book.title,
                        quantity: book.quantity,
                      });
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Xác nhận
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Xác nhận xóa {bookDelete.title} ?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  handleDeleteBook(bookDelete.id);
                }}
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageBook;
