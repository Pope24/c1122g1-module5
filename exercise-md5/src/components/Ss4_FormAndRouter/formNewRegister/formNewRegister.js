import { useState } from "react";
import "./formNewRegister.css";
function FormNewRegister() {
  const [form, setForm] = useState({});
  const handleChangeValueForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };
  const handleSubmitForm = () => {
    if (form.username && form.email && form.password && form.confirmPassword) {
      alert("Register success !!");
    } else {
      alert("Register failed !!");
    }
  };
  return (
    <div>
      <h1>Sign up</h1>
      <form>
        <div className="custom-input">
          <label>Username </label>
          <input
            name="username"
            value={form.username || ""}
            onChange={handleChangeValueForm}
          />
        </div>
        <div className="custom-input">
          <label>Email </label>
          <input
            name="email"
            value={form.email || ""}
            onChange={handleChangeValueForm}
          />
        </div>
        <div className="custom-input">
          <label>Password </label>
          <input
            type="password"
            name="password"
            value={form.password || ""}
            onChange={handleChangeValueForm}
          />
        </div>
        <div className="custom-input">
          <label>Confirm password </label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword || ""}
            onChange={handleChangeValueForm}
          />
        </div>
        <button type="button" onClick={handleSubmitForm}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormNewRegister;
