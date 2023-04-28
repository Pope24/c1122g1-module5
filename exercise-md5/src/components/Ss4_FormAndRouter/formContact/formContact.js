import { useState } from "react";
import "./formContact.css";
import { Formik } from "formik";
function FormContact() {
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
    if (!form.name) {
      errors.name = "Required enter name !!";
    }
    if (!form.email) {
      errors.email = "Required enter email !!";
    } else if (!REGEX.email.test(form.email)) {
      errors.email = "Email incorrectly format !!";
    }
    if (!form.phone) {
      errors.phone = "Required enter phone !!";
    }
    return errors;
  };
  function handleSubmit() {
    alert("Success login !!!");
  }

  return (
    <>
      <h2>Form contact</h2>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={form.name || ""}
                onChange={handleChangeValueForm}
              />
              <p style={{ color: "red" }}>{errors.name}</p>
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={form.email || ""}
                onChange={handleChangeValueForm}
              />
              <p style={{ color: "red" }}>{errors.email}</p>
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={form.phone || ""}
                onChange={handleChangeValueForm}
              />
              <p style={{ color: "red" }}>{errors.phone}</p>
              <button type="submit">Submit form</button>
            </form>
          );
        }}
      </Formik>
    </>
  );
}

export default FormContact;
