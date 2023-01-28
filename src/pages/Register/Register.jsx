import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Inputs from '../../components/Input/Input';
import { useSelector, useDispatch } from 'react-redux';
import { registerUserFailure, registerUserStart, registernUserSuccess } from '../../slice/auth';

const Register = () => {
  const [userName, setUserName] = useState('')
  const [userPass, setUserPass] = useState('')
  const [userEmail, setUserEmail] = useState('');
  const dispacher = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  function hendlerFormRegister(e) {
    e.preventDefault();
    dispacher(registerUserStart());
    try {
      dispacher(registernUserSuccess())
    } catch (e) {
      console.log(e);
      dispacher(registerUserFailure())
    }
  }
  return (
    <>
      {/*  */}
      <div className='loginBg'>
        <div className='grid'>
          <form
            // action='https://httpbin.org/post'
            // method='POST'
            className='form login'
            onSubmit={hendlerFormRegister}
          >
            <div className='form__field'>
              <label htmlFor='login__username'>
                <svg className='icon'></svg>
                <span className='hidden'>Username</span>
              </label>
              <Inputs
                autocomplete='username'
                id='login__username'
                type='text'
                name='username'
                val={userName}
                setVal={setUserName}
                className='form__input'
                placeholder='Username'
              />
            </div>
            <div className='form__field'>
              <label htmlFor='login__email'>
                <svg className='icon'></svg>
                <span className='hidden'>Username</span>
              </label>
              <Inputs
                autocomplete='username'
                id='login__email'
                type='text'
                name='user Email'
                className='form__input'
                placeholder='UserEmail'
                val={userEmail}
                setVal={setUserEmail}
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
                val={userPass}
                setVal={setUserPass}
              />
            </div>

            <div className='form__field'>
              <input type='submit' value={isLoading ? "Loading..." : "Register"}  />
            </div>
          </form>
          <p className='text--center'>
            Not a member? <Link to={'/login'}>Sign up now</Link>
            <svg className='icon'></svg>
          </p>
        </div>
      </div>
    </>
  )
}

export default Register
