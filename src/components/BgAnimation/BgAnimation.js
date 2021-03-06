import React from 'react'
import './style.css'

export const BgAnimation = () => {

  return (
      <div className="area absolute h-full w-full top-0 bg-gradient-to-r from-teal-400 to-blue-500" >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
  )
}

export default BgAnimation