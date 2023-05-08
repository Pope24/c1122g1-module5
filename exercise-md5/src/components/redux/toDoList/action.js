export const addToDoJob = (data) => {
  return { type: "todos/add-job", payload: data };
};
export const deleteToDoJob = (data) => {
  return { type: "todos/delete-job", payload: data };
};
