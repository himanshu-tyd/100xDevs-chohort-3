import React from 'react'
import { useDebounce } from './hooks/useDebounce'

const Searach = () => {

    const debounceFn=useDebounce()


  return (
    <div>
        <input type='text'  onChange={debounceFn} />
    </div>
  )
}

export default Searach