import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addToDoJob, deleteToDoJob } from "../../redux/toDoList/action";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function TodoListRedux() {
  const dispatch = useDispatch();
  const jobList = useSelector((state) => state.todos);
  return (
    <>
      <Formik
        initialValues={{
          text: "",
        }}
        onSubmit={(values) => {
          values.id = uuidv4();
          console.log(values.id);
          dispatch(addToDoJob(values));
        }}
      >
        <Form>
          <Field name="text" type="text" />
          <button type="submit">Add</button>
        </Form>
      </Formik>
      <ul>
        {jobList.map((job) => {
          return (
            <li key={job.id}>
              <span>{job.text}</span>
              <span
                className="fw-bold ms-2"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  dispatch(deleteToDoJob(job.id));
                }}
              >
                x
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TodoListRedux;
