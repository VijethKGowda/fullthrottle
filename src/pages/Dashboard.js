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

    // useEffect(() => {
    //     clickHandler(new Date());
    // }, [showModal])

    const handleFilter = (e) => {
        setFilterBy(e.target.value);
    }

    const activeClicked = (activeTimeArray) => {
        setShowModal(true);
        setUserActiveTimes(activeTimeArray)
    }

    // const clickHandler = (value) => {
    //     let selectedDate = value.toString().slice(4, 15)
    //     let activeResult = userActiveTimes.filter((time) => {
    //         return time.start_time.includes(selectedDate)
    //     })
    //     console.log(selectedDate)
    //     setActiveTimeResult(activeResult)
    // }
    return (
        <div>
            {/*animation start */}
            <BgAnimation />
            {/*animation end */}
            <div className="absolute w-full">
                <NavBar onFilter={handleFilter} />

                <section className="px-3 lg:px-48 mt-20 lg:mt-32 mb-12 lg:mb-20">
                    <h2 className="text-left font-medium text-base lg:text-lg pl-1 text-white tracking-tight mb-2 mt-5">
                        Full Throttle Users
                    </h2>
                    <hr />
                </section>

                <div className="-mt-10 lg:-mt-16 grid sm:grid-cols-3 md:grid-cols-3 gap-7 lg:px-48 px-3 w-full">
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