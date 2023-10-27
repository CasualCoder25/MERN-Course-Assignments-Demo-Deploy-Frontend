import { useState } from "react"
import StudentForm from "./StudentForm"
import Axios from "axios"

function CreateStudent() {
  const [arr, setArr] = useState([])
  const getState = (studentInfo) => {
    setArr(studentInfo)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = { name: arr[0], email: arr[1], rollno: arr[2] }
    Axios.post(
      "https://crud-demo-deploy.onrender.com/students/create-student",
      data
    )
      .then((res) => {
        if (res.status === 200) {
          alert("Record added successfully")
        } else {
          Promise.reject()
        }
      })
      .catch((err) => alert(err))
    event.target.reset()
  }
  return (
    <form onSubmit={handleSubmit}>
      <StudentForm
        nameValue=""
        emailValue=""
        rollnoValue=""
        submitButtonName="Create Student"
        getState={getState}
      />
    </form>
  )
}
export default CreateStudent
