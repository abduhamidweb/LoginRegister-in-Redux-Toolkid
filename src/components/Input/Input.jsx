import React from 'react'

const Inputs = ({ autocomplete, id, type, name, clas, placeholder }) => {
  return (
    <>
      <input
        autocomplete={autocomplete}
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
