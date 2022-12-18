import { Link } from "react-router-dom"
import "./register.scss"

function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            officia illum recusandae aut harum dolore quae tempora
            asperiores rerum veniam?
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder='Username' />
            <input type="text" placeholder='Name' />
            <input type="password" placeholder='Password' />
            <input type="email" placeholder='Email' />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register