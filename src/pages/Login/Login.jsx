import React, { useState } from 'react'
import './login.css'
import Inputs from '../../components/Input/Input'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserStart } from '../../slice/auth'
const Login = () => {
  const [loginUser, setLoginUser] = useState('')
  const [loginCheck, setLoginCheck] = useState('')
  const { isLoading } = useSelector((state) => state.auth)
  const dispach = useDispatch()
  function hendlerFrom(e) {
    e.preventDefault()
    dispach(loginUserStart())
  }
  return (
    <>
      <div className='loginBg'>
        <div className='grid'>
          <form
            // action='https://httpbin.org/post'
            // method='POST'
            onSubmit={hendlerFrom}
            className='form login'
          >
            <div className='form__field'>
              <label htmlFor='login__username'>
                <svg className='icon'>
                  <i className='bi bi-person-circle'></i>
                </svg>
                <span className='hidden'>Username</span>
              </label>
              <Inputs
                autocomplete='username'
                id='login__username'
                type='text'
                name='username'
                clas='form__input'
                placeholder='Username'
                val={loginUser}
                setVal={setLoginUser}
              />
            </div>

            <div className='form__field'>
              <label htmlFor='login__password'>
                <svg className='icon'></svg>
                <span className='hidden'>Password</span>
              </label>
              <Inputs
                id='login__password'
                type='password'
                name='password'
                clas='form__input'
                placeholder='Password'
                val={loginCheck}
                setVal={setLoginCheck}
              />
            </div>

            <div className='form__field'>
              <input type='submit' value={isLoading ? 'Loading...' : 'Login'} />
            </div>
          </form>

          <p className='text--center'>
            Not a member? <Link to={'/register'}>Sign up now</Link>
            <svg className='icon'></svg>
          </p>
        </div>
      </div>
      {/* s */}
    </>
  )
}

export default Login
