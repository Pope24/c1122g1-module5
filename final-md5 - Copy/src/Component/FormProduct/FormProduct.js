import "./FormProduct.css";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { differenceInBusinessDays } from "date-fns";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { ColorRing } from "react-loader-spinner";

function FormProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [typeProducts, setTypeProducts] = useState(null);
  const navigate = useNavigate();
  const fetchApiProductById = async () => {
    const result = await axios.get("http://localhost:3000/products/" + id);
    setProduct(result.data);
  };
  const fetchApiTypeProducts = async () => {
    const result = await axios.get("http://localhost:3000/typeProduct");
    setTypeProducts(result.data);
  };
  const handleUpdateProduct = async (value) => {
    await axios.put("http://localhost:3000/products/" + value.id, value);
  };
  useEffect(() => {
    fetchApiProductById();
    fetchApiTypeProducts();
  }, []);
  return (
    <>
      {product && (
        <Formik
          initialValues={{
            id: product.id,
            name: product.name,
            publicDay: product.publicDay,
            amount: product.amount,
            typeProduct: product.typeProduct,
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .required("Tên bắt buộc nhập")
              .test(
                "Tên sản phẩm không quá 100 kí tự.",
                "Tên sản phẩm không quá 100 kí tự.",
                function (value) {
                  return value.length <= 100;
                }
              ),
            publicDay: Yup.date()
              .required("Ngày thêm bắt buộc nhập")
              .test(
                "Ngày thêm phải bé hơn hoặc bằng ngày hiện tại.",
                "Ngày thêm phải bé hơn hoặc bằng ngày hiện tại.",
                function (value) {
                  return (
                    differenceInBusinessDays(new Date(value), new Date()) <= 0
                  );
                }
              ),
            amount: Yup.number()
              .required("Số lượng bắt buộc nhập.")
              .min(1, "Số lượng phải lớn hơn 0."),
          })}
          onSubmit={(values, { setSubmitting }) => {
            values.typeProduct = +values.typeProduct;
            handleUpdateProduct(values);
            setTimeout(() => {
              setSubmitting(false);
              navigate("/");
              alert("Chỉnh sửa thành công");
            }, 2000);
          }}
        >
          {({ values, handleChange, handleSubmit, isSubmitting }) => (
            <Form className="form container">
              <div className="float-left">
                <Link to="/" className="btn btn-dark">
                  Màn hình chính
                </Link>
              </div>
              <h3>Chỉnh sửa sản phẩm</h3>
              <div className="form-group mb-3">
                <label htmlFor="name">Mã sản phẩm:</label>
                <Field
                  type="number"
                  name="id"
                  disabled
                  className="input form-control"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="name">Tên sản phẩm:</label>
                <Field type="text" name="name" className="input form-control" />
                <ErrorMessage
                  name="name"
                  component={"p"}
                  className="error-mess"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="name">Ngày nhập: </label>
                <Field
                  type="date"
                  name="publicDay"
                  className="input form-control"
                />
                <ErrorMessage
                  name="publicDay"
                  component={"p"}
                  className="error-mess"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="name">Số lượng: </label>
                <Field
                  type="number"
                  name="amount"
                  className="input form-control"
                />
                <ErrorMessage
                  name="amount"
                  component={"p"}
                  className="error-mess"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="name">Loại sản phẩm</label>
                <Field
                  as="select"
                  name="typeProduct"
                  className="input form-control"
                >
                  {typeProducts &&
                    typeProducts.map((type) => {
                      return (
                        <option value={type.id} key={type.id}>
                          {type.name}
                        </option>
                      );
                    })}
                </Field>
              </div>
              <div className="form-group mb-3">
                {isSubmitting ? (
                  <ColorRing />
                ) : (
                  <button className="btn btn-secondary">Submit</button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
}

export default FormProduct;
