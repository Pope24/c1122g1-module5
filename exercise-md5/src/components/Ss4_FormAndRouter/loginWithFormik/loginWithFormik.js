import "./loginWithFormik.css";
import { useState } from "react";
import { Formik } from "formik";
function LoginWithFormik() {
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };
  const [form, setForm] = useState({});
  const handleChangeValueForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleValidate = () => {
    const errors = {};
    if (!form.email) {
      errors.email = "Required enter !!";
    } else if (!REGEX.email.test(form.email)) {
      errors.email = "Invalid email address !!";
    }
    if (!form.password) {
      errors.password = "Required enter !!";
    }
    return errors;
  };
  function handleSubmit() {
    alert("Login in successfully!!!");
  }

  return (
    <>
      <h1>Formik login</h1>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={form.email || ""}
                onChange={handleChangeValueForm}
              />
              <p style={{ color: "red" }}>{errors.email}</p>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={form.password || ""}
                onChange={handleChangeValueForm}
              />
              <p style={{ color: "red" }}>{errors.password}</p>
              <button type="submit">Submit</button>
            </form>
          );
        }}
      </Formik>
    </>
  );
}

export default LoginWithFormik;
