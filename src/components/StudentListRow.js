import Axios from "axios"
import { Link } from "react-router-dom"

function StudentListRow(props) {
  const { _id, name, email, rollno } = props.obj
  const handleClick = () => {
    Axios.delete("https://crud-demo-deploy.onrender.com/students/delete-student/" + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("Record deleted successfully")
          // We can use the below;
          // window.location.reload()
          // (or)
          // We can use student as dependency in the useEffect in parent component
        } else {
          Promise.reject()
        }
      })
      .catch((err) => console.log(err))
  }
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{rollno}</td>
      <td>
        <button className="btn btn-success ms-3">
          <Link
            to={"/edit-student/" + _id}
            style={{ color: "white", textDecoration: "none" }}
          >
            Edit
          </Link>
        </button>
        <button onClick={handleClick} className="btn btn-danger mx-3">
          Delete
        </button>
      </td>
    </tr>
  )
}

export default StudentListRow
