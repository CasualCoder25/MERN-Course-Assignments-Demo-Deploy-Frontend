import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Axios from "axios"
import StudentForm from "./StudentForm"

function EditStudent() {
  const [initialValue, setInitialValue] = useState({
    name: "",
    email: "",
    rollno: "",
  })
  const [newData, setNewData] = useState([])
  const { id } = useParams()
  const getState = (childData) => {
    setNewData(childData)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = { name: newData[0], email: newData[1], rollno: newData[2] }
    Axios.put(
      "https://crud-demo-deploy.onrender.com/students/update-student/" + id,
      data
    )
      .then((res) => {
        if (res.status === 200) {
          alert("Record updated")
          window.location.assign("/#/student-list")
        } else {
          Promise.reject()
        }
      })
      .catch((err) => alert(err))
  }
  useEffect(() => {
    Axios.get(
      "https://crud-demo-deploy.onrender.com/students/update-student/" + id
    )
      .then((res) => {
        if (res.status === 200) {
          const { name, email, rollno } = res.data
          setInitialValue({ name: name, email: email, rollno: rollno })
        } else {
          Promise.reject()
        }
      })
      .catch((err) => {
        alert(err)
      })
  }, [id])
  return (
    <form onSubmit={handleSubmit}>
      <StudentForm
        nameValue={initialValue.name}
        emailValue={initialValue.email}
        rollnoValue={initialValue.rollno}
        submitButtonName="Update Student"
        getState={getState}
      />
      <button
        type="button"
        className="btn btn-info d-block my-2 mx-auto"
        onClick={() => window.location.reload()}
      >
        Click to Sync
      </button>
    </form>
  )
}
export default EditStudent
