import { Loader2Icon, LoaderIcon } from 'lucide-react'
import React from 'react'

const Loader = () => {
  return (
    <div className='w-screen h-screen flex-center ' >
        <LoaderIcon className='animate-spin' />
    </div>
  )
}

export default Loader