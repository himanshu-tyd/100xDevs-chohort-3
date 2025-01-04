import React from 'react'
import { course } from '../constants/data'
import WrapperContainer from '../components/WrapperContainer'
import { CourseCard } from '../components/CourseCard'

const Purchase = () => {
  return (
    <WrapperContainer containerClass={' flex items-start justify-center w-full h-full overflow-x-hidden'} >
    <div className="flex flex-wrap gap-5 justify-center md:justify-start ">
      {course.map((items, i) => (
        <CourseCard key={i} {...items} />
      ))}
    </div>
  </WrapperContainer>
  )
}

export default Purchase