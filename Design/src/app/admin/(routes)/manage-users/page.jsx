'use client'

import Sidebar from '@/components/admin_components/Sidebar'
import React from 'react'
import { useSelector } from 'react-redux';

const page = () => {
  const menuStatus = useSelector((state) => state.menuStatus);

  return (
    <>
    <Sidebar />
    <div className={`${menuStatus ? "sm:ml-52" : "ml-20"} min-h-screen  `}>
      <p className='text-2xl'>Users</p>
    </div>
  </>
  )
}

export default page