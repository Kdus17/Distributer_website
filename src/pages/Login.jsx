import { Link } from "react-router-dom"
const Login = () => {
  return (
    <div>
        sign in
      <div>
        not  account <Link to={'/signup'}> sign up </Link>
      </div>
      <div>
        <input type="email" name="" id="" />
      </div>
      <div>
        <input type="password" name="" id="" />
      </div>
    </div>
  )
}

export default Login