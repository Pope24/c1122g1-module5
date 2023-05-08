import { useNavigate } from "react-router-dom";
import "./ImplemetationReduxThunk.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { fakeLogin } from "../../redux/action";
function ImplemetationReduxThunk() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogined = useSelector((state) => state.userLogined);
  useEffect(() => {
    if (userLogined.username) {
      navigate("/user");
    }
  }, [userLogined, navigate]);
  return (
    <>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          dispatch(fakeLogin(values));
        }}
      >
        <Form>
          <label>Username</label>
          <Field name="username" type="text" />
          <label>Password</label>
          <Field name="password" type="password" />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </>
  );
}

export default ImplemetationReduxThunk;
