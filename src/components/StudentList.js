import { useEffect, useState } from "react"
import Axios from "axios"
import StudentListRow from "./StudentListRow"

function StudentList() {
  const [students, setStudents] = useState([])
  useEffect(() => {
    Axios.get("https://crud-demo-deploy.onrender.com/students/")
      .then((res) => {
        if (res.status === 200) {
          setStudents(res.data)
        } else {
          Promise.reject()
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [students])
  const ListItems = () => {
    return students.map((value, index) => {
      return <StudentListRow obj={value} key={value.rollno} />
    })
  }
  return (
    <table className="table table-success table-bordered table-striped">
      <thead>
        <tr style={{ backgroundColor: "forestgreen" }}>
          <th className="text-center">Name</th>
          <th className="text-center">Email</th>
          <th className="text-center">Roll Number</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>{ListItems()}</tbody>
    </table>
  )
}
export default StudentList
