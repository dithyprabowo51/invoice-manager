import React, { useState } from 'react'
import './Login.css'

// Router
import { useHistory } from 'react-router-dom'

// Axios
import axios from '../../lib/axios.js'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios({
        url: '/login',
        method: 'POST',
        data: { email, password }
      })
      localStorage.setItem('access_token', data.access_token)
      history.push('/invoicer')
    } catch (err) {
      setErrorMessage(err.response.data.error)
      setPassword('')
    }
  }
  return (
    <div className="login">
      <div className="container-login">
        <h4 className="text-center">Sign In</h4>
        {
          errorMessage ?
            <div className="alert alert-danger" role="alert">{errorMessage}</div>
            :
            null
        }
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
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