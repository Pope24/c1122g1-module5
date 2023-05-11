import axios from "axios";

export default function User({ users }) {
  return (
    <table className="table">
      <thead className="table-light">
        <tr>
          <th>STT</th>
          <th>Name</th>
          <th>Email</th>
          <th>Website</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          return (
            <tr>
              <td>{index}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td>{user.address.city}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export const getStaticProps = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return {
    props: {
      users: response.data,
    },
  };
};
