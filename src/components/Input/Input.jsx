import React from 'react'

const Inputs = ({
  id,
  type,
  name,
  clas,
  placeholder,
  val,
  setVal,
}) => {
  return (
    <>
      <input
        value={val}
        onChange={(e) => {
          setVal(e.target.value)
        }}
        id={id}
        type={type}
        name={name}
        className={clas}
        placeholder={placeholder}
      />
    </>
  )
}

export default Inputs
