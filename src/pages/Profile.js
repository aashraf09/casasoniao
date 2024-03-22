import React from 'react'
import UserProfile from '../components/UserProfile'

const Profile = ({ activePage }) => {
  return (
    <section className="flex w-full flex-col items-start justify-between gap-5">
      <UserProfile />
    </section>
  )
}

export default Profile