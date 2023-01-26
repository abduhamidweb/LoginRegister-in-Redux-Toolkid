import { Outlet, useNavigate } from 'react-router-dom'
import React,{useState} from 'react'

const Private = () => {
    const [check, setCheck] = useState(true);
    const navigate = useNavigate()
  return (
    <>
      {
        check ? <Outlet/> : navigate("login")
      }
    </>
  )
}

export default Private
