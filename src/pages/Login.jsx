import { Link } from "react-router-dom"
const Login = () => {
  return (
    <div className="min-h-screen flex  justify-center items-center">
        <div className="flex flex-col w-100 h-100 border border-gray-200 shadow-md px-12">
          <p>KB</p>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Username</label>
            <input type="text" name="username" id="name" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
        </div>
    </div>
  )
}

export default Login