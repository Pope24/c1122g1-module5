import "./studentInfo.css";
function StudentInfo() {
  const students = [
    {
      id: 1,
      name: "Le Van Chinh",
      age: 18,
      address: "Quang Binh",
    },
    {
      id: 2,
      name: "Nguyen Minh Lanh",
      age: 33,
      address: "Quang Binh",
    },
    {
      id: 3,
      name: "Nguyen Quoc Anh",
      age: 22,
      address: "Quang Tri",
    },
    {
      id: 4,
      name: "Nguyen Van Minh",
      age: 25,
      address: "Nghe An",
    },
    {
      id: 5,
      name: "Pham Hoang Hai",
      age: 30,
      address: "Hue",
    },
  ];
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr>
                <th>{student.id}</th>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StudentInfo;
