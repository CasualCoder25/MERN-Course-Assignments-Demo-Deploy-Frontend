import { useState } from "react"
import StudentForm from "./StudentForm"
import Axios from "axios"

function CreateStudent() {
  const [arr, setArr] = useState([])
  const getState = (studentInfo) => {
    console.log(studentInfo)
    setArr(studentInfo)
  }
  const handleSubmit = () => {
    const data = { name: arr[0], email: arr[1], rollno: arr[2] }
    Axios.post("https://crud-demo-deploy.onrender.com/students/create-student", data)
      .then((res) => {
        console.log(data)
        if (res.status === 200) {
          alert("Record added successfully")
        } else {
          Promise.reject()
        }
      })
      .catch((err) => alert(err))
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
