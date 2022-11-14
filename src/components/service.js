import React from 'react'
import { useContext } from 'react'
import { MainContext } from '../context'
const Service = () => {
    const data =useContext(MainContext);
  return (
    <>
     <h3>{data}</h3>
    </>
  )
}

export default Service