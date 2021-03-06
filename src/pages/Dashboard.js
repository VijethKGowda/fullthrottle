import React, { useState, useEffect } from 'react'
import NavBar from '../components/Nav/NavBar'
import UserCard from '../components/UserCard/UserCard'
import Modal from '../components/Modal/Modal'
import { usersJSON } from '../data/users'
import { BgAnimation } from '../components/BgAnimation/BgAnimation'

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [filterBy, setFilterBy] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [userActiveTimes, setUserActiveTimes] = useState([])


  useEffect(() => {
    setUsers([...usersJSON])
  }, [])

  const handleFilter = (e) => {
    setFilterBy(e.target.value);
  }

  const activeClicked = (activeTimeArray) => {
    setShowModal(true);
    setUserActiveTimes(activeTimeArray)
  }

  return (
    <div>
      <BgAnimation />
      <div className="w-full absolute">
        <NavBar onFilter={handleFilter} />

        <section className="px-3 sm:px-3 md:px-20 lg:px-48 mt-20 lg:mt-32 mb-12 lg:mb-20">
          <h2 className="text-left font-medium text-base lg:text-lg pl-1 text-white tracking-tight mb-2 mt-5">
            FullThrottle Users
          </h2>
          <hr />
        </section>

        <div className="w-full grid sm:grid-cols-3 md:grid-cols-3 gap-7 px-3 sm:px-3 md:px-20 lg:px-48 -mt-10 lg:-mt-16">
          {users.map((mems) => (
            mems.members
              .filter((user) => {
                return user.real_name.toLowerCase().includes(filterBy.toLowerCase());
              })
              .map((user) => (
                <UserCard
                  key={user.id}
                  name={user.real_name}
                  Id={user.id}
                  timeZone={user.tz}
                  activeClicked={() => { activeClicked(user.activity_periods) }} />
              ))
          ))

          }
        </div>
      </div>
      {showModal ? (
        <Modal
          closeModal={() => {
            setShowModal(false);
          }}
          userActiveTimes={userActiveTimes}
        />
      ) : null}
    </div>
  )
}

export default Dashboard