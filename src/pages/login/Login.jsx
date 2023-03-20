import { useContext } from "react";
import { AuthContext } from "../../context/authContext"
import { Link } from "react-router-dom"
import "./login.scss"

function Login() {

  const { login } = useContext(AuthContext)

  const handleLogin = () => {
    login();
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            officia illum recusandae aut harum dolore quae tempora
            asperiores rerum veniam?
          </p>
          <span>Don't you have an account?</span>
          <Link to='/register'>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <Link to='/'>
              <button>Login</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login