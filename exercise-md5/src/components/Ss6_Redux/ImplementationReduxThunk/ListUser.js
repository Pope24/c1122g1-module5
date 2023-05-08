import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ListUser() {
  const users = useSelector((state) => state.users);
  return (
    <div>
      <Link to={-1} className="btn btn-dark">
        Logout
      </Link>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListUser;
