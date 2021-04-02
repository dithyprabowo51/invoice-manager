import React from 'react'
import './Login.css'

// Router
import { useHistory } from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const handleSubmit = (event) => {
    event.preventDefault()
    localStorage.setItem('access_token', '123456')
    history.push('/invoicer')
  }
  return (
    <div className="login">
      <div className="container-login">
        <h4 className="text-center">Sign In</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-success">Sign In</button>
          </div>
          <div className="mt-4 text-center">
            {/* eslint-disable-next-line */}
            <a href="" style={{ display: 'inline-block' }}>Dont have an account ?</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login