import React, { useState, useEffect } from 'react'
import './style.css'

import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

import { usersJSON } from '../../data/users'

const Modal = ({ closeModal, userActiveTimes }) => {
  const [users, setUsers] = useState([]);
  const [activeTimeResult1, setActiveTimeResult] = useState(userActiveTimes);
  const [selectedDays, setSelectedDays] = useState();

  const clickHandler = (value) => {
    selectedDays == value ?
      (setSelectedDays(null), setActiveTimeResult(userActiveTimes)) :
      setSelectedDays(value)
    const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '27', '28', '29', '30', '31']
    const date = monthName[value.month - 1] + ' ' + day[value.day - 1] + ' ' + value.year

    let activeResult = userActiveTimes.filter((time) => {
      return time.start_time.includes(date)
    })
    setActiveTimeResult(activeResult)
  }

  useEffect(() => {
    setUsers([...usersJSON])
  }, [])

  return (
    <div
      className="flex h-full w-full fixed top-0 left-0 bg-transparent-black justify-center items-center z-50 shadow-lg"
      style={{
        backgroundColor: "#00000030",
      }}
    >
      <div className="block bg-white w-11/12 md:w-2/3 lg:w-2/4 mx-auto my-4 py-4 max-h-full overflow-y-auto relative rounded-rd">
        <button
          onClick={closeModal}
          className="absolute top-0 right-0 p-2 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>
        </button>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 px-4 py-2">
            <div className="w-full pr-2 md:pr-4">
              <span>
                <h2 className="text-center text-xl font-bold text-gray-800 pb-5">
                  User Periods of Activity <span className="text-xs font-hairline"></span>
                </h2>
              </span>
              {
                (activeTimeResult1 != '') ? (
                  <div className="overflow-y-auto h-64">
                    <table className="table-auto border-collapse w-full p-2">
                      <thead>
                        <tr className="rounded-lg text-sm font-medium text-gray-700 text-left bg-gray-200">
                          <th className="px-4 py-3">Date</th>
                          <th className="px-4 py-3">From</th>
                          <th className="px-4 py-3">To</th>
                        </tr>
                      </thead>
                      {activeTimeResult1.map((time, index) => (
                        <tbody className="text-sm font-normal text-gray-700 " key={time.start_time}>
                          <tr className={`${index == 0 || index % 2 == 0 ? 'bg-white' : 'bg-gray-200'} rounded py-4`}>

                            <td className="px-4 py-3">{time.start_time.slice(0, 11)}</td>
                            <td className="px-4 py-3">{time.start_time.slice(12,)}</td>
                            <td className="px-4 py-3">{time.end_time.slice(12,)}</td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>

                ) : (
                    <h2 className="text-center text-base font-bold text-red-600 pb-5">
                      No Record Found
                    </h2>)
              }
            </div>
            <div className="max-w-sm mt-5">
              <Calendar
                colorPrimaryLight
                calendarTodayClassName="custom-today-day"
                value={selectedDays}
                onChange={clickHandler}
                shouldHighlightWeekends
                colorPrimary="#2C65C8"
                calendarClassName="custom-calendar"
                calendarTodayClassName="custom-today-day" 
                renderFooter={() => (
                  <div className="w-full flex justify-center">
                    <button
                      className="px-2 py-4 mx-auto text-red-700 text-base"
                      onClick={() => {
                        clickHandler
                        setSelectedDays(null)
                        setActiveTimeResult(userActiveTimes)
                      }}
                    >
                      Reset Date!
                    </button>
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal