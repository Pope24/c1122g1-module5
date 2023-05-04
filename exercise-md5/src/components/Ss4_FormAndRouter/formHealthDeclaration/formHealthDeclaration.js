import { useState } from "react";
import "./formHealthDeclaration.css";
import { Formik } from "formik";
function FormHealthDeclaration() {
  const [form, setForm] = useState({});
  const [gender, setGender] = useState("male");
  const REGEX = {
    year: /^(19|20)\d{2}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };
  const handleChangeValueForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleValidate = () => {
    const errors = {};
    if (!form.name) {
      errors.name = "Required enter !!!";
    }
    if (!form.passport) {
      errors.passport = "Required enter !!!";
    }
    if (!form.yearOfBirth) {
      errors.yearOfBirth = "Required enter !!!";
    } else if (!REGEX.year.test(form.yearOfBirth)) {
      errors.yearOfBirth = "Yêu cầu năm sinh lớn hơn 1900 !!!";
    }
    if (!form.nationality) {
      errors.nationality = "Required enter !!!";
    }
    if (!form.city) {
      errors.city = "Required enter !!!";
    }
    if (!form.district) {
      errors.district = "Required enter !!!";
    }
    if (!form.town) {
      errors.town = "Required enter !!!";
    }
    if (!form.apartmentNumber) {
      errors.apartmentNumber = "Required enter !!!";
    }
    if (!form.phoneNumber) {
      errors.phoneNumber = "Required enter !!!";
    }
    if (!form.email) {
      errors.email = "Required enter !!!";
    } else if (!REGEX.email.test(form.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };
  const handleSubmit = () => {
    alert("Health declaration successfully !!");
  };
  return (
    <>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <label>Họ tên</label>
              <input
                type="text"
                name="name"
                value={form.name || ""}
                onChange={handleChangeValueForm}
              />
              <p style={{ color: "red" }}>{errors.name}</p>
              <label>Số hộ chiếu/CMND</label>
              <input
                type="text"
                name="passport"
                value={form.passport || ""}
                onChange={handleChangeValueForm}
              />
              <p style={{ color: "red" }}>{errors.passport}</p>
              <label>Năm sinh</label>
              <input
                type="text"
                name="yearOfBirth"
                value={form.yearOfBirth || ""}
                onChange={handleChangeValueForm}
              />
              <p style={{ color: "red" }}>{errors.yearOfBirth}</p>
              <div
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <label>Giới tính</label>
                <input type="radio" name="gender" defaultChecked value="male" />
                Male
                <input type="radio" name="gender" value="female" />
                Female
              </div>
              <label>Quốc tịch</label>
              <input
                type="text"
                name="nationality"
                value={form.nationality || ""}
                onChange={handleChangeValueForm}
              />
              <p style={{ color: "red" }}>{errors.nationality}</p>
              <label>Công ty làm việc</label>
              <input
                type="text"
                name="company"
                value={form.company || ""}
                onChange={handleChangeValueForm}
              />
              <label>Bộ phận làm việc</label>
              <input
                type="text"
                name="department"
                value={form.department || ""}
                onChange={handleChangeValueForm}
              />
              <label>Có thẻ bảo hiểm y tế</label>
              <input
                type="text"
                name="cardInsurance"
                value={form.cardInsurance || ""}
                onChange={handleChangeValueForm}
              />
              <label>Tỉnh thành</label>
              <input
                type="text"
                name="city"
                value={form.city || ""}
                onChange={handleChangeValueForm}
              />
              <p style={{ color: "red" }}>{errors.city}</p>
              <label>Quận huyện</label>
              <input
                type="text"
                name="district"
                value={form.district || ""}
                onChange={handleChangeValueForm}
              />
              <p style={{ color: "red" }}>{errors.district}</p>
              <label>Phường xã</label>
              <input
                type="text"
                name="town"
                value={form.town || ""}
                onChange={handleChangeValueForm}
              />
              <p style={{ color: "red" }}>{errors.town}</p>
              <label>Số nhà, phố, tổ dân phố /thôn /đội</label>
              <input
                type="text"
                name="apartmentNumber"
                value={form.apartmentNumber || ""}
                onChange={handleChangeValueForm}
              />
              <p style={{ color: "red" }}>{errors.apartmentNumber}</p>
              <label>Điện thoại</label>
              <input
                type="text"
                name="phoneNumber"
                value={form.phoneNumber || ""}
                onChange={handleChangeValueForm}
              />
              <p style={{ color: "red" }}>{errors.phoneNumber}</p>
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={form.email || ""}
                onChange={handleChangeValueForm}
              />
              <p style={{ color: "red" }}>{errors.email}</p>
              <label className="mt-3"></label>
              <button type="submit">Submit form</button>
            </form>
          );
        }}
      </Formik>
    </>
  );
}

export default FormHealthDeclaration;
