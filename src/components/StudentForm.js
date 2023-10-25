import { useEffect, useState } from "react"

function StudentForm(props) {
  const [name, setName] = useState(props.nameValue)
  const [email, setEmail] = useState(props.emailValue)
  const [rollno, setRollno] = useState(props.rollnoValue)

  const arr = [name, email, rollno]

  const handleClick = () => {
    props.getState(arr)
  }
  useEffect(() => {
    setName(props.nameValue)
    setEmail(props.emailValue)
    setRollno(props.rollnoValue)
  }, [props])
  return (
    <div style={{ maxWidth: "40%", margin: "0px auto" }}>
      <input
        className="form-control my-2"
        placeholder="Enter your name"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <input
        className="form-control my-2"
        placeholder="Enter your email"
        onChange={(event) => {
          setEmail(event.target.value)
        }}
        value={email}
      />
      <input
        className="form-control my-2"
        placeholder="Enter your roll number"
        onChange={(event) => setRollno(event.target.value)}
        value={rollno}
      />
      <button
        className="btn btn-success d-block my-2 mx-auto"
        type="submit"
        onClick={handleClick}
      >
        {props.submitButtonName}
      </button>
    </div>
  )
}
export default StudentForm
