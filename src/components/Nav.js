import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav className="navbar bg-warning">
      <Link to="/" className="navbar-brand mx-5">
        CRUD operations
      </Link>
      <div className="nav">
        <Link to="/create-student" className="nav-link">
          CreateStudent
        </Link>
        <Link to="/student-list" className="nav-link">
          StudentList
        </Link>
      </div>
    </nav>
  )
}
export default Nav
