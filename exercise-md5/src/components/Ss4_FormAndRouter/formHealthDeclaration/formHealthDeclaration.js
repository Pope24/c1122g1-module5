import "./formHealthDeclaration.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ColorRing } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
function FormHealthDeclaration() {
  const REGEX = {
    year: /^(19|20)\d{2}$/,
    phoneNumber: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <Formik
        initialValues={{
          name: "",
          passport: "",
          yearOfBirth: "",
          gender: "female",
          nationality: "",
          company: "",
          department: "",
          cardInsurance: "",
          city: "",
          district: "",
          town: "",
          apartmentNumber: "",
          phoneNumber: "",
          email: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Ten bat buoc nhap..."),
          passport: Yup.string().required("CMND bat buoc nhap..."),
          yearOfBirth: Yup.string()
            .required("Ngay sinh bat buoc nhap...")
            .matches(REGEX.year, "Ngay sinh phai tren 1900..."),
          phoneNumber: Yup.string()
            .required("So dien thoai bat buoc nhap...")
            .matches(REGEX.phoneNumber, "So dien thoai phai 10 chu so (84|0+)"),
          email: Yup.string()
            .required("Email bat buoc nhap...")
            .matches(REGEX.email, "Email nhap khong dung dinh dang..."),
          nationality: Yup.string().required("Quoc tich bat buoc nhap..."),
          city: Yup.string().required("Thanh pho bat buoc nhap..."),
          district: Yup.string().required("Quan huyen bat buoc nhap..."),
          town: Yup.string().required("Xa phuong bat buoc nhap..."),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            toast("Thêm mới thành công !!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }, 3000);
        }}
      >
        {({ isSubmitting }) => (
          <>
            <Form>
              <label>Họ tên</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" className="error" component="p" />
              <label>Số hộ chiếu/CMND</label>
              <Field type="text" name="passport" />
              <ErrorMessage name="passport" className="error" component="p" />
              <label>Năm sinh</label>
              <Field type="text" name="yearOfBirth" />
              <ErrorMessage
                name="yearOfBirth"
                className="error"
                component="p"
              />
              <div>
                <label>Giới tính</label>
                <Field type="radio" name="gender" defaultChecked value="male" />
                Male
                <Field type="radio" name="gender" value="female" />
                Female
              </div>
              <label>Quốc tịch</label>
              <Field type="text" name="nationality" />
              <ErrorMessage
                name="nationality"
                className="error"
                component="p"
              />
              <label>Công ty làm việc</label>
              <Field type="text" name="company" />
              <label>Bộ phận làm việc</label>
              <Field type="text" name="department" />
              <label>Có thẻ bảo hiểm y tế</label>
              <Field type="text" name="cardInsurance" />
              <label>Tỉnh thành</label>
              <Field type="text" name="city" />
              <ErrorMessage name="city" className="error" component="p" />
              <label>Quận huyện</label>
              <Field type="text" name="district" />
              <ErrorMessage name="district" className="error" component="p" />
              <label>Phường xã</label>
              <Field type="text" name="town" />
              <ErrorMessage name="town" className="error" component="p" />
              <label>Số nhà, phố, tổ dân phố /thôn /đội</label>
              <Field type="text" name="apartmentNumber" />
              <label>Điện thoại</label>
              <Field type="text" name="phoneNumber" />
              <ErrorMessage
                name="phoneNumber"
                component="p"
                className="error"
              />
              <label>Email</label>
              <Field type="text" name="email" />
              <ErrorMessage name="email" component="p" className="error" />
              <label className="mt-3"></label>
              {isSubmitting ? (
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={["#000"]}
                />
              ) : (
                <button type="submit">Submit form</button>
              )}
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}

export default FormHealthDeclaration;
