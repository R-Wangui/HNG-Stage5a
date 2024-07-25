import Header from '@components/common/header'
import Profile from '@components/profiledetails'
import React from 'react'

const page:React.FC = () => {
  return (
    <main>
        <Header />
        <Profile />
    </main>
  )
}

export default page