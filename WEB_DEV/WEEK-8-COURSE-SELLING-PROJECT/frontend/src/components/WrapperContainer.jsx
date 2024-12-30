import React from 'react'

const WrapperContainer = ({children}) => {
  return (
    <div className='px-8 sm:px-10 md:px-20 py-3 flex items-start justify-center w-full h-full overflow-x-hidden '>
        {children}
    </div>
  )
}

export default WrapperContainer