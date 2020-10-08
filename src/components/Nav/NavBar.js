import React, { useState } from 'react'

const NavBar = ({ onFilter }) => {
  const [searchTab, setSearchTab] = useState(false)
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-3 lg:px-48 py-3 lg:py-4 text-white">
      <div className="font-bold text-base lg:text-lg cursor-pointer flex items-center">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-cpu"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
        </span>
        <span className="px-2">Full Throttle User Activity</span>
      </div>

      <div className="flex items-center">
        <span>
          <input
            type="text"
            className="border-b-1 border-white bg-transparent w-20 lg:w-40 focus:outline-none"
            placeholder="Search..."
            onChange={onFilter}
          />
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>      </div>
    </nav>
  )
}

export default NavBar