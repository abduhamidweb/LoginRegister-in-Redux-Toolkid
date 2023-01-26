import React from 'react'
import './login.css';
import Inputs from '../../components/Input/Input';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <>
      <div className='loginBg'>
        <div class='grid'>
          <form
            action='https://httpbin.org/post'
            method='POST'
            class='form login'
          >
            <div class='form__field'>
              <label for='login__username'>
                <svg class='icon'>
                  <i class='bi bi-person-circle'></i>
                </svg>
                <span class='hidden'>Username</span>
              </label>
              <Inputs
                autocomplete='username'
                id='login__username'
                type='text'
                name='username'
                clas='form__input'
                placeholder='Username'
                required
              />
            </div>

            <div class='form__field'>
              <label for='login__password'>
                <svg class='icon'>
                  <use xlink:href='#icon-lock'></use>
                </svg>
                <span class='hidden'>Password</span>
              </label>
              <Inputs
                id='login__password'
                type='password'
                name='password'
                clas='form__input'
                placeholder='Password'
              />
            </div>

            <div class='form__field'>
              <input type='submit' value='Sign In' />
            </div>
          </form>

          <p class='text--center'>
            Not a member? <Link to={'/register'}>Sign up now</Link>
            <svg class='icon'>
              <use xlink:href='#icon-arrow-right'></use>
            </svg>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
