import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function InterviewItemCard({interview}) {


    const router=useRouter();
    const onStart=()=>{
        router.push('/dashboard/interview/'+interview?.mockId)
    }
    const onFeedback=()=>{
        router.push('/dashboard/interview/'+interview?.mockId+'/feedback')
    }

  return (
    <div className='border shadow-sm rounded-lg p-3'>
          <h2 className='font-bold text-primary'>{interview?.jobPosition}</h2>
          <h2 className='text-sm text-gray-800'>Techstack: {interview.jobDesc}</h2>
          <h2 className='text-sm text-gray-800'>Years of Experience: {interview.jobExperience} </h2>
          <h2 className='text-xs text-gray-600'>Created At: {interview.createdAt}</h2>
          <div className='justify-between flex mt-2'>
            <Button size="sm" variant="outline" className="w-full"
            onClick={onFeedback}
            >Feedback</Button>
            <Button size="sm" className="w-full"
            onClick={onStart}
            >Reappear</Button>
          </div>
    </div>
  )
}

export default InterviewItemCard