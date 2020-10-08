import React, { useState } from 'react'

const NavBar = ({ onFilter }) => {
  const [searchTab, setSearchTab] = useState(false)
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-3 lg:px-48 py-3 lg:py-4 text-white">
      <div className="font-bold text-base lg:text-lg cursor-pointer flex items-center">
        <span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-reactroot="">
            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" stroke="#f9f8fd" fill="none" d="M9 7H2V22H9V7Z"></path>
            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" stroke="#f9f8fd" fill="none" d="M22 2H9V22H22V2Z"></path>
            <path strokeLinecap="round" strokeWidth="1" stroke="#f9f8fd" d="M14 6H12V7H14V6Z"></path>
            <path strokeLinecap="round" strokeWidth="1" stroke="#f9f8fd" d="M19 6H17V7H19V6Z"></path>
            <path strokeLinecap="round" strokeWidth="1" stroke="#f9f8fd" d="M14 14H12V15H14V14Z"></path>
            <path strokeLinecap="round" strokeWidth="1" stroke="#f9f8fd" d="M19 14H17V15H19V14Z"></path>
            <path strokeLinecap="round" strokeWidth="1" stroke="#f9f8fd" d="M14 10H12V11H14V10Z"></path>
            <path strokeLinecap="round" strokeWidth="1" stroke="#f9f8fd" d="M19 10H17V11H19V10Z"></path>
            <path strokeLinecap="round" strokeWidth="1" stroke="#f9f8fd" d="M14 18H12V19H14V18Z"></path>
            <path strokeLinecap="round" strokeWidth="1" stroke="#f9f8fd" d="M19 18H17V19H19V18Z"></path>
            <path strokeLinecap="round" strokeWidth="1" stroke="#f9f8fd" d="M6 14H5V15H6V14Z"></path>
            <path strokeLinecap="round" strokeWidth="1" stroke="#f9f8fd" d="M6 10H5V11H6V10Z"></path>
            <path strokeLinecap="round" strokeWidth="1" stroke="#f9f8fd" d="M6 18H5V19H6V18Z"></path>
          </svg>
        </span>
        <span className="px-2">Full Throttle User Activity</span>
      </div>

      <div className="flex items-center">
        {
          searchTab ?
            (
              <span>
                <input
                  type="text"
                  className="border-b-1 border-white bg-transparent w-20 lg:w-40 px-3 focus:outline-none"
                  placeholder="Search..."
                  onChange={onFilter}
                />
              </span>
            ) : null
        }
        <span onClick={() => setSearchTab(!searchTab)}>
          {
            searchTab ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-reactroot="" className="transition ease-in duration-200">
                <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1" stroke="#f4f4f8" d="M2 2L22 22"></path>
                <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1" stroke="#f4f4f8" d="M22 2L2 22"></path>
              </svg>
            ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-reactroot="" className="transition ease-in duration-200">
                  <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" stroke="#f5f4f8" fill="none" d="M9.5 17C13.6421 17 17 13.6421 17 9.5C17 5.35786 13.6421 2 9.5 2C5.35786 2 2 5.35786 2 9.5C2 13.6421 5.35786 17 9.5 17Z"></path>
                  <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" stroke="#f5f4f8" d="M22 22L14.8 14.8"></path>
                </svg>
              )
          }
        </span>
      </div>
    </nav>
  )
}

export default NavBar