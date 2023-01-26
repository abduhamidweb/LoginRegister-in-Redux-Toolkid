import React, { useState } from 'react'
import './login.css'
import Inputs from '../../components/Input/Input'
import { Link } from 'react-router-dom'
const Login = () => {
  const [loginUser, setLoginUser] = useState('')
  const [loginCheck, setLoginCheck] = useState('')
  return (
    <>
      <div className='loginBg'>
        <div className='grid'>
          <form
            action='https://httpbin.org/post'
            method='POST'
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
              <input type='submit' value='Sign In' />
            </div>
          </form>

          <p className='text--center'>
            Not a member? <Link to={'/register'}>Sign up now</Link>
            <svg className='icon'></svg>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
