import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList'

const Dashboard = () => {
  return (
    <div className='p-10'>
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
            Dashboard
          </h1>
      <h2 className='text-gray-500'>Create and start your AI Mock Interview</h2>
      
        <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
        <AddNewInterview/>
      </div>

      <InterviewList/>
    </div>
  )
}

export default Dashboard
