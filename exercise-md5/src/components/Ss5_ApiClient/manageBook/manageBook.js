import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import axios from "axios";
import "./manageBook.css";
function ManageBook() {
  const [books, setBooks] = useState([]);
  const [bookDelete, setBookDelete] = useState({});
  const [isDelete, setIsDelete] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDeleteBook = (id) => {
    axios
      .delete("http://localhost:3000/book/" + id)
      .then((data) => setIsDelete(!isDelete))
      .catch((error) => console.log(error));
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
                    onClick={() => {
                      handleShow();
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
      {bookDelete.id && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Xác nhận</Modal.Title>
          </Modal.Header>
          <Modal.Body>Bạn chắc chắn xóa {bookDelete.title} ?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Đóng
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                handleClose();
                handleDeleteBook(bookDelete.id);
              }}
            >
              Xóa
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default ManageBook;
