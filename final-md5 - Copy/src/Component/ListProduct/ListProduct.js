import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function ListProduct() {
  const [productList, setProductList] = useState(null);
  const [typeProducts, setTypeProducts] = useState(null);
  const [typeProductCurrent, setTypeProductCurrent] = useState(0);
  const fetchApiProductList = async () => {
    const result = await axios.get(
      "http://localhost:3000/products?_sort=amount"
    );
    setProductList(result.data);
  };
  const fetchApiTypeProducts = async () => {
    const result = await axios.get("http://localhost:3000/typeProduct");
    setTypeProducts(result.data);
  };
  const handleSearchByTypeProduct = async (value) => {
    value = +value;
    if (value === 0) {
      fetchApiProductList();
    } else {
      const result = await axios.get(
        "http://localhost:3000/products?typeProduct=" + value + "&_sort=amount"
      );
      setProductList(result.data);
    }
    setTypeProductCurrent(value);
  };
  const handleSearchProducts = async (value) => {
    if (typeProductCurrent !== 0) {
      const result = await axios.get(
        "http://localhost:3000/products?typeProduct=" +
          typeProductCurrent +
          "&name_like=" +
          value +
          "&_sort=amount"
      );
      setProductList(result.data);
    } else {
      const result = await axios.get(
        "http://localhost:3000/products?name_like=" + value + "&_sort=amount"
      );
      setProductList(result.data);
    }
  };
  const parseDate = (value) => {
    return new Date(value).toLocaleDateString("VN", {});
  };
  useEffect(() => {
    fetchApiProductList();
    fetchApiTypeProducts();
  }, []);
  return (
    <div className="container">
      <div className="d-flex justify-content-end align-items-center">
        <select
          className="btn btn-dark"
          onChange={(e) => {
            handleSearchByTypeProduct(e.target.value);
          }}
        >
          <option value="0">All Products</option>
          {typeProducts &&
            typeProducts.map((type) => {
              return (
                <option value={type.id} key={type.id}>
                  {type.name}
                </option>
              );
            })}
        </select>
        <Formik
          initialValues={{
            search: "",
          }}
          onSubmit={(values) => {
            handleSearchProducts(values.search);
          }}
        >
          <Form className="ms-2">
            <Field
              type="text"
              name="search"
              className="btn btn-outline-secondary"
              placeHolder="Tìm kiếm theo tên"
            />
            <button className="btn btn-dark ms-1">Tìm kiếm</button>
          </Form>
        </Formik>
      </div>
      <table className="table">
        <thead className="dark">
          <tr>
            <th>STT</th>
            <th>Mã SP</th>
            <th>Tên sản phẩm</th>
            <th>Ngày nhập</th>
            <th>Số lượng</th>
            <th>Loại sản phẩm</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {productList && productList.length === 0 ? (
            <tr>
              <td colSpan={7}>
                <h5>Không thể tìm thấy</h5>
              </td>
            </tr>
          ) : (
            productList &&
            productList.map((product, index) => {
              return (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{parseDate(product.publicDay)}</td>
                  <td>{product.amount}</td>
                  <td>
                    {typeProducts &&
                      typeProducts.find(
                        (type) => type.id === product.typeProduct
                      )?.name}
                  </td>
                  <td>
                    <Link
                      to={"/update-product/" + product.id}
                      className="btn btn-danger"
                    >
                      Chỉnh sửa
                    </Link>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
}

export default ListProduct;
